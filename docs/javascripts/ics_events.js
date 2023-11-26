// Load iCalendar data
async function fetchAndParseICS() {
  const response = await fetch('http://mail.exchange.ruhr-uni-bochum.de/owa/calendar/c35486a95ce0458084511f72258a0ae2@it-services.ruhr-uni-bochum.de/ebd8081528364481b4fe87794a3e8776659663570677531713/calendar.ics');
  const data = await response.text();
  const jcalData = ICAL.parse(data);
  const comp = new ICAL.Component(jcalData);
  return comp.getAllSubcomponents('vevent');
}

fetchAndParseICS()
.then(vevents => {
  let allEvents = [];

  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() + 3);

  for (let vevent of vevents) {
    let summary = vevent.getFirstPropertyValue('summary');
    let description = vevent.getFirstPropertyValue('description');
    let dtstartIcal = vevent.getFirstPropertyValue('dtstart');
    let dtendIcal = vevent.getFirstPropertyValue('dtend');

    let dtstart = dtstartIcal ? dtstartIcal.toJSDate() : null;
    let dtend = dtendIcal ? dtendIcal.toJSDate() : null;

    if (summary.toLowerCase().includes('nutzung')) {  // Skip events with "Nutzung" in the title
      continue;
    }

    if (dtstart >= today && dtstart <= cutoff) {
      let startTime = dtstart ? `${dtstart.getHours().toString().padStart(2, '0')}:${dtstart.getMinutes().toString().padStart(2, '0')}` : '';
      let endTime = dtend ? `${dtend.getHours().toString().padStart(2, '0')}:${dtend.getMinutes().toString().padStart(2, '0')}` : '';
      let time = endTime ? `${startTime} bis ${endTime}` : startTime;
      
      allEvents.push({
        title: summary,
        date: dtstart,
        time: time + " Uhr",
        description: description,
        image: 'your-image-url', // Use a fixed image URL here
        image_copyright: 'your-image-copyright'
      });
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
          <p style="font-weight:550">Datum: ${eventData.date.toLocaleDateString('de-DE')} <br> Uhrzeit: ${eventData.time}</p>
          <p>${eventData.description}</p>
        </div>
      </div>
      <button class="md-button signup-button" id="signup-${index}">Teilnahmeanfrage stellen</button>
      <form id="form-${index}" style="display: none;" method="post" action="https://feedback.ruhr-uni-bochum.de/formmailer.php" ... >
      <input type="hidden" name="subject"       value="Teilnahmeanfrage von der Makerspace-Homepage" /> 
      <div class="event-subject">
          <label for="event-info"><strong>Deine Teilnahmeanfrage für:</strong></label>
          <textarea name="event-info" readonly>${eventData.title + '\nam ' + eventData.date.toLocaleDateString('de-DE') + ' von ' + eventData.time}</textarea>
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
