# Borrow Our Equipment

Equipment lending is not our primary responsibility. Please note that the lending of media and devices is typically handled by other departments within the university, such as the [Library](https://www.ub.rub.de/index.html.en) or [IT.Services](https://www.it-services.ruhr-uni-bochum.de/). Nevertheless we are happy to accommodate individual requests to borrow our equipment when possible.

!!! info "The following rules apply to the loan:"

	- Availability of equipment is not guaranteed.
	- For longer loan periods, we reserve the right to request the return of equipment spontaneously if there is an urgent, unforeseen need for it.
	- Equipment loans must be needed for university-related activities, such as teaching, research, or foundation work, and may not be used for private projects.
	- If the equipment you require is available through another department, such as IT.Services, we recommend that you obtain it from that department instead.

## Loan Request

Here you can send us a request to borrow equipment. We will then clarify the possibilities in the team and contact you. 

<form method="post" action="https://feedback.ruhr-uni-bochum.de/formmailer.php" name="Kontaktformular" enctype="multipart/form-data" class="form">
    <input type="hidden" name="subject"       value="Kontaktaufnahme von der Makerspace-Homepage" />     
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
		<label for="vorname"><strong>First Name:</strong></label>
		<input name="vorname" type="text" maxlength="30" required/>
	</div>							

	<div class="form-field">
		<label for="email"><strong>E-Mail:</strong></label>
		<input name="email" type="email" maxlength="60" required/>
	</div>			

	<div class="form-field">
		<label for="tel"><strong>Phone:</strong></label>
		<input name="tel" type="tel" maxlength="40" placeholder="Optional" />
	</div>	
	
	<div class="form-field">
		<label for="nachricht" id="nachricht-text"><strong>Your Message:</strong><span class='large'></span></label>
		<textarea name="nachricht" placeholder="You can describe here what you would like to borrow, for how long and for what. Limit: 2000 characters" rows="10"></textarea>
	</div> 
	<div>
	<label for="von"><strong>From when?</strong></label>
	<input type="date" id="von" name="von" style="font-size:1.1em; color:var(--high-contrast-font); background-color:var(--high-contrast-bg);" required>  
	<label for="bis"><strong>Until when?</strong></label> 
	<input type="date" id="bis" name="bis" style="font-size:1.1em; color:var(--high-contrast-font); background-color:var(--high-contrast-bg);" required>
	</div>	
 	<br>
	<div class="honey">
		<label for="honigtopf"><strong>Bitte dieses Feld nicht ausfüllen:</strong></label>
		<input name="honigtopf" type="text" maxlength="50" value="" />
	</div>	

	<div class="form-field" style="margin-bottom: 10px; font-size: var(--form-note-font-size);">
		<label for="data-privacy" style="font-size: var(--form-note-font-size);">
			<div style="float: left; padding: 0px;">
				<input type="checkbox" id="data-privacy" name="data-privacy" required>
			</div>
			<div style="overflow: hidden; padding-left: 10px;">
				I agree to the collection, processing and storage of the information I have provided here in accordance with your
				<a href="/datenschutz/index.html" target="_blank" style="color: var(--link-color);">Datenschutzvereinbarung</a>. I can revoke my consent at any time by sending you an informal message.
			</div>
		</label>
	</div>

	<div class="form-field">
		<input type="submit" class="md-button" value="Send Request" name="schicken" /> 
	</div>							
</form>
