fetch('../_data/events.yaml')
.then(response => response.text())
.then(yamlText => {
  const yamlData = jsyaml.load(yamlText);
  let allEvents = [];

  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() + 3);

  for (let event of yamlData.events) {
    if(event.recurrence) {
      let startDate = new Date(event.start_date);
      let endDate = new Date(event.end_date);
      let recurrenceInterval = event.recurrence.includes('week') ? 7 : 30;

      while (startDate <= endDate) {
        let isHoliday = false;
        if (yamlData.holidays) {
          for (let holiday of yamlData.holidays) {
            let holidayStart = new Date(holiday.start_date);
            let holidayEnd = new Date(holiday.end_date);
            if (startDate >= holidayStart && startDate <= holidayEnd) {
              isHoliday = true;
              break;
            }
          }
        }

        if (!isHoliday) {
          let eventTitle = event.title;
          let eventTime = event.time;
          let eventDescription = event.description;

          if(event.exceptions) {
            for(let exception of event.exceptions) {
              if(exception.date && new Date(exception.date).toDateString() === startDate.toDateString()) {
                eventTime = exception.time || eventTime;
                eventTitle = exception.title || eventTitle;
                eventDescription = exception.description || eventDescription;
              } else if(exception.nth_day_of_month && isNthDayOfMonth(startDate, exception.nth_day_of_month)) {
                eventTime = exception.time || eventTime;
                eventTitle = exception.title || eventTitle;
                eventDescription = exception.description || eventDescription;
              }
            }
          }

          if(startDate >= today && startDate <= cutoff) {
            allEvents.push({
              title: eventTitle,
              date: new Date(startDate),
              time: eventTime,
              description: eventDescription,
              signup_url: event.signup_url,
              image: event.image,
              image_copyright: event.image_copyright
            });
          }
        }
      
        // Increment startDate by the recurrence interval
        startDate.setDate(startDate.getDate() + recurrenceInterval);
      }
    } else {
      let date = new Date(event.date);
      if(date >= today && date <= cutoff) {
        allEvents.push({
          title: event.title,
          date: date,
          time: event.time,
          description: event.description,
          signup_url: event.signup_url,
          image: event.image,
          image_copyright: event.image_copyright
        });
      }
    }
  }

  allEvents.sort((a, b) => a.date - b.date);

    let eventsHTML = '';
    for (let [index, eventData] of allEvents.entries()) {
    eventsHTML += generateEventHTML(eventData, index);
    }

    document.getElementById('events').innerHTML = eventsHTML;

    document.querySelectorAll('.signup-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            let form = document.getElementById(`form-${index}`);
            if (form.style.display === 'none') {
                form.style.display = 'block';
                button.innerText = 'Anfrage abbrechen';
            } else {
                form.style.display = 'none';
                button.innerText = 'Teilnahmeanfrage stellen';
            }
        });
    });
         
});

function generateEventHTML(eventData, index) {
    return `
      <div class="event">
        <h2>${eventData.title}</h2>
        <div class="event-content">
          <div class="event-image-container">
            <img src="${eventData.image}" alt="${eventData.title}" class="event-img" />
            <div class="custom-copyright">${eventData.image_copyright}</div>
          </div>
          <div class="event-details">
            <p style="font-weight:550">Datum: ${eventData.date.toLocaleDateString('de-DE')} <br> Uhrzeit: ${eventData.time} Uhr</p>
            <p>${eventData.description}</p>
          </div>
        </div>
        <button class="md-button signup-button" id="signup-${index}">Teilnahmeanfrage stellen</button>
        <form id="form-${index}" style="display: none;" method="post" action="https://feedback.ruhr-uni-bochum.de/formmailer.php" ... >
        <input type="hidden" name="subject"       value="Teilnahmeanfrage von der Makerspace-Homepage" /> 
        <div class="event-subject">
            <label for="event-info"><strong>Deine Teilnahmeanfrage für:</strong></label>
            <textarea name="event-info" readonly>${eventData.title + '\nam ' + eventData.date.toLocaleDateString('de-DE') + ' ' + eventData.time} Uhr</textarea>
        </div>   
        <input type="hidden" name="recipients"    value="Torben.Boehnke-makerspace@ruhr-uni-bochum.de"/>
            <input type="hidden" name="mail_options" value="charset=UTF-8,Exclude=realname;honigtopf;schicken;FromAddr"/>
            <input type="hidden" name="good_url"      value="https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/danke/"  />       
            <input type="hidden" name="good_template" value="https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/danke/"  />

            <div class="form-field">
                <label for="nachname"><strong>Name:</strong></label>
                <input name="nachname" type="text" maxlength="30" required/>
            </div>							

            <div class="form-field">
                <label for="vorname"><strong>Vorname:</strong></label>
                <input name="vorname" type="text" maxlength="30" required/>
            </div>							

            <div class="form-field">
                <label for="email"><strong>E-Mail:</strong></label>
                <input name="email" type="email" maxlength="60" required/>
            </div>			

            <div class="form-field">
                <label for="tel"><strong>Telefonnummer:</strong></label>
                <input name="tel" type="tel" maxlength="40" placeholder="Optional" />
            </div>						

            <div class="form-field">
                <label for="nachricht" id="nachricht-text"><strong>Deine Nachricht:</strong><span class='large'></span></label>
                <textarea name="nachricht" placeholder="Hier kannst Du Deine Nachricht schreiben (Limit: 2000 Zeichen)" rows="10"></textarea>
            </div> 

            <div class="honey">
                <label for="honigtopf"><strong>Please do not fill this field:</strong></label>
                <input name="honigtopf" type="text" maxlength="50" value="" />
            </div>	

            <p>Bitte beachte: Diese Anfrage allein berechtigt Dich noch nicht zur Teilnahme. Die Teilnahme ist erst nach Erhalt einer Bestätigungsmail von uns gültig!</p>
       
            <div class="form-field">
                <input type="submit" class="md-button" value="Teilnahmeanfrage abschicken" name="schicken" /> 
            </div>				
        </form>
      </div>
    `;
  }

function isNthDayOfMonth(date, dayString) {
  let [nthString, day] = dayString.split(' ');
  let nth = ["first", "second", "third", "fourth"].indexOf(nthString) + 1;
  let dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].indexOf(day.toLowerCase());

  let dateDayOfWeek = date.getDay();
  let dateWeekOfMonth = Math.floor((date.getDate() - 1) / 7) + 1;

  return dateDayOfWeek === dayOfWeek && dateWeekOfMonth === nth;
}
