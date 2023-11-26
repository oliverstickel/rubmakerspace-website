// set initial visibilty of events in the past
var showPastEvents = false;

// closes contact form when close-button clicked
document.addEventListener('DOMContentLoaded', function() { 
  // Attach click event to the document or a closer parent that already exists
  document.addEventListener('click', function(event) {
      // Check if the clicked element or its parent has the ID 'close-button'
      if (event.target.id === 'close-button' || event.target.closest('#close-button')) {
          var eventContactForm = document.getElementById('event-form');
          if (eventContactForm) {
              eventContactForm.style.display = 'none';
          }
        }
      });
});

/**
 * Asynchronously fetches and parses an ICS file to extract calendar events.
 * Handles exceptions for recurring events and adjusts them based on timezone.
 * @return {Array} An array of processed calendar events.
 */
async function fetchAndParseICS() {
  try {
      // Fetch the ICS file from the server
      let response = await fetch('./data/calendar.ics');
      // Check if the fetch was successful
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Read the text content of the response
      let data = await response.text();

      // Parse the ICS data into a jCal (JSON) format
      let jcalData = ICAL.parse(data);
      // Create an ICAL component from the parsed data
      let comp = new ICAL.Component(jcalData);

      // Determine the timezone
      let vtimezoneComp = comp.getFirstSubcomponent("vtimezone");
      let timezoneId = vtimezoneComp ? vtimezoneComp.getFirstPropertyValue("tzid") : "W. Europe Standard Time";

      // Extract all event components from the ICS data
      let events = comp.getAllSubcomponents("vevent");

      // Prepare to handle exceptions for recurring events
      let exceptions = {};
      events.forEach((eventComp) => {
          let vevent = new ICAL.Event(eventComp);
          // If the event is an exception to a recurring event, store it
          if (vevent.recurrenceId) {
              if (!exceptions[vevent.uid]) {
                  exceptions[vevent.uid] = [];
              }
              exceptions[vevent.uid].push(vevent);
          }
      });

      // Filter out the exception events, leaving only main events
      let mainEvents = events.filter(eventComp => {
          let vevent = new ICAL.Event(eventComp);
          return !vevent.recurrenceId; // Ignore exception events
      });

      // Process each main event, considering timezone and exceptions
      let calendarEvents = mainEvents.flatMap(eventComp => {
          let vevent = new ICAL.Event(eventComp);
          return processSingleEvent(vevent, exceptions, timezoneId);
      });

      return calendarEvents;
  } catch (err) {
      // Log and handle any errors that occur during the fetch and parse process
      console.error("Failed to fetch and parse the ICS file:", err);
      return []; // Return an empty array in case of an error
  }
}

/**
 * Processes a single calendar event, handling recurring events and exceptions.
 * @param {Object} vevent - The event to process.
 * @param {Object} exceptions - Object containing exceptions for recurring events.
 * @param {String} timezoneId - The dynamic timezone to use.
 * @return {Array} An array of processed events (both single and recurring).
 */
function processSingleEvent(vevent, exceptions, timezoneId) {
  let processedEvents = [];

  // Handle recurring events
  if (vevent.isRecurring()) {
      // Retrieve the recurrence rule for the event
      let rule = vevent.component.getFirstPropertyValue('rrule');
      
      // Initialize an iterator to go through each occurrence of the event
      let iterator = vevent.iterator();
      let nextDate = iterator.next();
      
      // Set a maximum number of occurrences to process to prevent infinite loops
      let maxOccurrences = 1000;
      let count = 0;
      let exdates = [];

      // Process EXDATE properties to exclude these dates in the recurrence
      vevent.component.getAllProperties("exdate").forEach(prop => {
          let exdate = prop.getFirstValue();
          exdates.push(exdate.toString());
      });

      // Track dates processed as exceptions to avoid duplicating them
      let processedExceptionDates = [];

      // Iterate through each occurrence within the rule's constraints
      while (nextDate && (!rule.until || nextDate.compare(rule.until) <= 0) && count < maxOccurrences) {
          if (!nextDate) continue; // Skip if the date is not defined
          let currentStartTime = nextDate;
          let duration = vevent.endDate.subtractDate(vevent.startDate);
          let currentEndTime = currentStartTime.clone();
          currentEndTime.addDuration(duration);

          // Check if there's an exception for this occurrence
          let exceptionForThisDate = exceptions[vevent.uid] && exceptions[vevent.uid].find(e => {
              let exceptionDate = e.recurrenceId;
              return exceptionDate && exceptionDate.toString().slice(0,10) === currentStartTime.toString().slice(0,10);
          });

          if (exceptionForThisDate) {
              // Process the exception event instead of the regular occurrence
              processedEvents.push({
                  uid: vevent.uid,
                  title: exceptionForThisDate.summary,
                  start: exceptionForThisDate.startDate.toString(),
                  end: exceptionForThisDate.endDate.toString(),
                  description: exceptionForThisDate.description
              });
              processedExceptionDates.push(currentStartTime.toString()); // Mark this date as processed
          } else if (!processedExceptionDates.includes(currentStartTime.toString())) {
              // Add the regular event if it's not already processed as an exception
              processedEvents.push({
                  uid: vevent.uid,
                  title: vevent.summary,
                  start: currentStartTime.toString(),
                  end: currentEndTime.toString(),
                  description: vevent.description
              });
          }

          nextDate = iterator.next();
          count++;
      }
      if (count >= maxOccurrences) {
          console.warn("Max occurrences reached for event: ", vevent.summary);
      }
  } else {
      // Process non-recurring events
      processedEvents.push({
          uid: vevent.uid,
          title: vevent.summary,
          start: vevent.startDate.toString(),
          end: vevent.endDate.toString(),
          description: vevent.description
      });
  }

  return processedEvents; // Return the array of processed events
}

// defines toolbar based on width
fetchAndParseICS().then(calendarEvents => {
  function getToolbarConfig() {
    const width = window.innerWidth;

    // Define breakpoints
    const mobileWidth = 768;

    if (width <= mobileWidth) {
      return {
        toolbar: {
          start: '',
          center: 'prev title next',
          end: 'jumpToBottom'
        },
        view: 'listYear'
      };
    } else {
      return {
        toolbar: {
          start: 'prev,next,today',
          center: 'title',
          end: 'dayGridMonth,listYear jumpToBottom'
        }
      };
    }
  }

  // Determine the initial view based on screen width
  let isMobile = window.innerWidth <= 768;
  let initialViewType = isMobile ? 'listYear' : 'listYear';
  let calendar; 

  function initializeCalendar() {
    if (!calendar) {  
      let config = getToolbarConfig();
      var calendarEl = document.getElementById('calendar');
      calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'de', // German locale
        initialView: initialViewType,
        customButtons: {
          togglePastEvents: {
              text: 'Zeige/Verstecke vergangene Termine',
              click: function() {
                  showPastEvents = !showPastEvents;
                  handlePastEventsVisibility(); 
              }
          },
          jumpToTop: {
            text: '▲',
            hint: 'Zum Kalender-Anfang',
              click: function() {
                var ef = document.getElementById('event-form');
                if(ef) {
                  document.getElementById('fc-dom-1').scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                  document.getElementById('form-container').scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
              }
          },
          jumpToBottom: {
            text: '▼',
            hint: 'Zum Kalender-Ende',
              click: function() {
                  document.getElementById('calendar').scrollIntoView({ behavior: 'smooth', block: 'end' });
              }
          },
        },
        headerToolbar: config.toolbar,
        footerToolbar: {
          start: 'togglePastEvents',
          end: 'jumpToTop'
        },
        views: {
          dayGridMonth: { buttonText: 'Kalender'},
          listYear: { buttonText: 'Liste' },
        },
        buttonText: {
          today: 'Heute'
        },
        contentHeight: "auto",
        events: calendarEvents,
        eventDisplay: 'block',

        eventContent: function(arg) {
          var start = arg.event.start;
          var end = arg.event.end;
          var title = arg.event.title;
          
          //Format time as "[start time] - [end time] Uhr: [title]"
          var startTime = start.getHours() + ':' + (start.getMinutes()<10?'0':'') + start.getMinutes();
          var endTime = end.getHours() + ':' + (end.getMinutes()<10?'0':'') + end.getMinutes();
          var formattedTime = startTime + ' - ' + endTime + ' Uhr: ';
          
          var tooltipContent = formattedTime + title;

          return {
            html: `<div title="${tooltipContent}">${title}</div>`
          }
        },
        
        eventDidMount: function(info) {
          handlePastEventsVisibility(); 
        },   
        
        //Opens the contact form with event specific informations after clicking an event
        eventClick: function showContactForm(info) {
          let currentDate = new Date();
          let startDate = info.event.start;
          let endDate = info.event.end;

          // Check if the event's start date is in the past
          if (startDate < currentDate) {
              alert("Du kannst Dich nicht für ein Ereignis in der Vergangenheit anmelden.");
              return; // Exit the function early
          }

          // Format the date using German locale
          let formattedDate = new Intl.DateTimeFormat('de-DE', {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
          }).format(startDate);

          // Format the start time using German locale
          let formattedStartTime = new Intl.DateTimeFormat('de-DE', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false  // Use 24-hour format
          }).format(startDate);

          // Format the end time using German locale
          let formattedEndTime = new Intl.DateTimeFormat('de-DE', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false  // Use 24-hour format
          }).format(endDate);
          
          function generateEventHTML (info, formattedDate, formattedStartTime, formattedEndTime) {
          return `
          <form id="event-form" class="form" style="display: none;" method="post" action="https://feedback.ruhr-uni-bochum.de/formmailer.php" ... >
          <input type="hidden" name="subject"       value="Teilnahmeanfrage von der Makerspace-Homepage" /> 
          <div class="event-subject">
              <label for="event-info" style="font-size: 18px"><strong>Deine Teilnahmeanfrage für:</strong></label>
              <input type="hidden" name="event_info" id="event-info-input" value="${info.event.title + '\nam ' + formattedDate + ' von ' + formattedStartTime + ' bis ' + formattedEndTime + ' Uhr'}" />
              <p id="event-info-display" readonly>${info.event.title + '\nam ' + formattedDate + ' von ' + formattedStartTime + ' bis ' + formattedEndTime + ' Uhr'}</p>
          </div>   
          <input type="hidden" name="recipients"    value="makerspace@ruhr-uni-bochum.de"/>
              <input type="hidden" name="mail_options" value="charset=UTF-8,Exclude=realname;honigtopf;schicken;FromAddr"/>
              <input type="hidden" name="good_url"      value="https://makerspace.ruhr-uni-bochum.de/danke/"  />       

              <div class="form-field">
                  <label for="nachname"><strong>Name:</strong></label>
                  <input name="nachname" id="nachname" type="text" maxlength="30" required/>
              </div>							

              <div class="form-field">
                  <label for="vorname"><strong>Vorname:</strong></label>
                  <input name="vorname" id="vorname" type="text" maxlength="30" required/>
              </div>							

              <div class="form-field">
                  <label for="email"><strong>E-Mail:</strong></label>
                  <input name="email" id="email" type="email" maxlength="60" required/>
              </div>			

              <div class="form-field">
                  <label for="tel"><strong>Telefonnummer:</strong></label>
                  <input name="tel" id="tel" type="tel" maxlength="40" placeholder="Optional" />
              </div>						

              <div class="form-field">
                  <label for="nachricht" id="nachricht-text"><strong>Deine Nachricht:</strong><span class='large'></span></label>
                  <textarea name="nachricht" id="nachricht" placeholder="Hier kannst Du Deine Nachricht schreiben (Limit: 2000 Zeichen)" rows="6"></textarea>
              </div> 

              <div class="honey" style="display: none;">
                  <label for="honigtopf"><strong>Please do not fill this field:</strong></label>
                  <input name="honigtopf" id="honigtopf" type="text" maxlength="50" value="" />
              </div>	

              <p style="font-size: var(--form-note-font-size);">Bitte beachte: Diese Anfrage allein berechtigt Dich noch nicht zur Teilnahme. Die Teilnahme ist erst nach Erhalt einer Bestätigungsmail von uns gültig!</p>

              <div class="form-field" style="margin-bottom: 10px; font-size: var(--form-note-font-size);">
                <label for="data-privacy" style="font-size: var(--form-note-font-size);">
                  <div style="float: left; padding: 0px;">
                    <input type="checkbox" id="data-privacy" name="data-privacy" required>
                  </div>
                  <div style="overflow: hidden; padding-left: 10px;">
                    Ich erkläre mich mit der Erhebung, Verarbeitung und Speicherung meiner hier gemachten Angaben gemäß Eurer
                    <a href="./datenschutz/index.html" target="_blank" style="color: var(--link-color);">Datenschutzvereinbarung</a> einverstanden. Meine Einwilligung kann ich jederzeit durch formlose Mitteilung an Euch widerrufen.
                  </div>
                </label>
              </div>
          
              <div id=button-wrapper>
                <div class="form-field">
                    <input type="submit" id="submit-button" class="md-button" value="Absenden" name="schicken" />  
                </div>
                <div class="form-field">
                    <input type="button" id="close-button" class="md-button" value="Abbrechen" name="abbrechen" />
                </div>
              </div>				
          </form>
        </div>
      `};
      
      //scroll to form when event is clicked
      document.getElementById('form-container').innerHTML = generateEventHTML(info, formattedDate, formattedStartTime, formattedEndTime);
        let form = document.getElementById(`event-form`);
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        },

        eventClassNames: function(arg) {
            if (arg.event.start < new Date()) {
              return ['past-event'];
            } else {
              return ['future-event'];
            }
          },

        allDaySlot: false, // Remove the "all-day" section from the calendar
        slotMinTime: '07:00:00', // Beginning at 7am
        slotMaxTime: '20:00:00', // Ending at 8pm
      });

      calendar.render();
    } else {
      updateToolbarConfig();
    }
  }

  // Initialize the calendar on page load
  initializeCalendar();

  // sets the toolbar and view depending on the width
  function updateToolbarConfig() {
    const config = getToolbarConfig();
    calendar.setOption('headerToolbar', config.toolbar);

  // If the configuration has the "view" key and it's set to "listYear", change the view
    if (config.view === 'listYear') {
      calendar.changeView(config.view);
    }
  }

  // adds a slight delay so that the change only occurs when the resize has been finished
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

  // Add the resize event listener
  window.addEventListener('resize', debounce(function() {
    updateToolbarConfig();
  }, 150)); // Waits for 150ms after the last resize event to re-initialize the calendar

  
  //adjusts the height of the iframe to the height of the calendar or contact form (whatever is higher)
  function adjustHeight() {
      
    var wrapper = document.querySelector('.calendar-wrapper');

    // Initialize default height to 400
    var newHeight = 400;
    var wrapperHeight = 400;

    if (wrapper) {
      wrapperHeight = wrapper.offsetHeight;
    }

    newHeight = wrapperHeight + 10;

    // Directly set the height of the iframe in the parent
    var iframeInParent = window.parent.document.getElementById('calendar');
    if (iframeInParent) {
        iframeInParent.style.height = newHeight + 'px';
    }
  }

  // triggers adjustHeight whenever calendar-wrapper changes height
  var wrapper = document.querySelector('.calendar-wrapper');
    if (wrapper) {
      var resizeObserver = new ResizeObserver(adjustHeight);
      resizeObserver.observe(wrapper);
    }

  // Show/Hide past events
  function handlePastEventsVisibility() {
    var view = calendar.view;
    var displayStyle = view.type.includes('list') ? 'table-row' : 'block';
    var pastEvents = document.querySelectorAll('.past-event');
    pastEvents.forEach(function(eventEl) {
        eventEl.style.display = showPastEvents ? displayStyle : 'none';
    });
    if (view.type.includes('list')) {
        var pastDays = document.querySelectorAll('.fc-day-past');
        pastDays.forEach(function(dayEl) {
            dayEl.style.display = showPastEvents ? 'table-row' : 'none';
        });
    }
    var visibleEvents = calendar.getEvents();
  }
});

// Function to disable the submit button for a certain period
function debounceSubmitButton(buttonId, delay) {
    var button = document.getElementById(buttonId);
    button.disabled = true;

    // Re-enable the button after the delay
    setTimeout(function() {
        button.disabled = false;
    }, delay);
}

// Add an event listener to your form
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('event-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            // Debounce the submit button for 5 seconds
            debounceSubmitButton('submit-button', 5000);
        });
    }
});