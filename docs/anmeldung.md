## Anmeldung zum Open Makerspace {: #anmeldung }

<form method="post" action="https://feedback.ruhr-uni-bochum.de/formmailer.php" name="Kontaktformular" enctype="multipart/form-data" class="form">
    <input type="hidden" name="subject"       value="Anmeldung zu einem Open Makerspace" />     
	<input type="hidden" name="recipients"    value="makerspace@ruhr-uni-bochum.de"/>
    <!-- 
	<input type="hidden" name="mail_options" value="CharSet=UTF-8, 
													PlainTemplate=template.txt, 
													TemplateMissing='', 
													Exclude=realname;honigtopf;schicken;FromAddr"/> 
	-->
	<input type="hidden" name="mail_options" value="charset=UTF-8,Exclude=realname;honigtopf;schicken;FromAddr"/>
	<input type="hidden" name="good_url"      value="https://makerspace.ruhr-uni-bochum.de/danke/"  />
	
	<!-- required am Ende der Felddefinition bedeutet: Eingabe ist erforderlich> -->
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

	<div style="margin-bottom:4px; margin-top:4px;">
		<label for="wunschdatum"><strong>Wunschdatum auswählen</strong></label>
		<input type="date" id="wunschdatum" name="wunschdatum" style="font-size:1.1em; color:var(--high-contrast-font); background-color:var(--high-contrast-bg);" required>
		<div id="dateFeedback" style="color: red; display: none;"></div>
	</div>	

	<div class="form-field">
		<label for="nachricht" id="nachricht-text"><strong>Deine Nachricht:</strong><span class='large'></span></label>
		<textarea name="nachricht" placeholder="Beschreib uns bitte kurz, was Du gern machen möchtest und gegebenenfalls auch, welches Gerät oder welchen Bereich Du benötigst, wie viel Unterstützung Du brauchst oder möchtest und ob Du eine bestimmte Uhrzeit (im Rahmen der Öffnungszeiten) bevorzugst. (Limit: 2000 Zeichen)" rows="10"></textarea>
	</div> 

	<div class="honey">
		<label for="honigtopf"><strong>Please do not fill this field:</strong></label>
		<input name="honigtopf" type="text" maxlength="50" value="" />
	</div>	

	<div class="form-field">
		<input type="submit" class="md-button" value="Kontaktformular absenden" name="schicken" /> 
	</div>							
</form>


<script type="text/javascript">
	/**
	 * Check if the given date object is a valid date.
	 * @param {Date} d - Date object to validate.
	 * @returns {boolean} - Returns true if the date object is valid, false otherwise.
	 */
	const isValidDate = d => {
		return d instanceof Date && !isNaN(d);
	};

	/**
	 * Check if the given date is in the past.
	 * @param {Date} date - Date object to check.
	 * @returns {boolean} - Returns true if the date is in the past, false otherwise.
	 */
	const isPastDate = (date) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0);  // Set the time to midnight for a correct comparison
		return date < today;
	};

	/**
	 * Validate the given date string to ensure it is a valid date, not in the past,
	 * and is either a Tuesday or a Thursday.
	 * @param {string} dateString - The date string in format YYYY-MM-DD.
	 * @returns {boolean} - Returns true if the date string meets the conditions, false otherwise.
	 */
	const validate = dateString => {
		const date = new Date(dateString);

		// Check for valid date
		if (!isValidDate(date)) return false;

		// Check if date is in the past
		if (isPastDate(date)) return false;

		// Check if date is a Tuesday (2) or Thursday (4)
		const day = date.getDay();
		return (day == 2 || day == 4);
	};

	// Reference to the feedback message DOM element
	const dateFeedback = document.getElementById('dateFeedback');

	/**
	 * Event listener for input changes on the date field.
	 * Validates the input and provides immediate feedback to the user.
	 */
	document.getElementById('wunschdatum').addEventListener('input', evt => {
		const dateInput = evt.target.value;

		// Ensure we have a complete date in format YYYY-MM-DD before validating
		if (dateInput && dateInput.length === 10) {
			if (isPastDate(new Date(dateInput))) {
				evt.target.setCustomValidity('Bitte wähle ein zukünftiges Datum.');
				dateFeedback.textContent = 'Bitte wähle ein zukünftiges Datum.';
				dateFeedback.style.display = 'block';  // Show the feedback message
			} else if (!validate(dateInput)) {
				evt.target.setCustomValidity('Bitte wähle einen Dienstag oder Donnerstag.');
				dateFeedback.textContent = 'Bitte wähle einen Dienstag oder Donnerstag.';
				dateFeedback.style.display = 'block';  // Show the feedback message
			} else {
				evt.target.setCustomValidity('');  // Clear any previous error message
				dateFeedback.style.display = 'none';  // Hide the feedback message
			}
		}
	});
</script>

!!! warning "Anmeldungen per E-Mail oder Formular werden erst nach einer Bestätigungs-Mail durch das Team gültig."