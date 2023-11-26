## Registration for General Safety Instruction {: #anmeldung-siu }
<form method="post" action="https://feedback.ruhr-uni-bochum.de/formmailer.php" name="Kontaktformular" enctype="multipart/form-data" class="form">
    <input type="hidden" name="subject"       value="Anmeldung Allgemeine Sicherheitsunterweisung von der Makerspace-Homepage" />     
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
		<input name="nachname" type="text" size="40" maxlength="30" required/>
	</div>							
    
	<div class="form-field">
		<label for="vorname"><strong>First Name:</strong></label>
		<input name="vorname" type="text" size="40" maxlength="30" required/>
	</div>							

	<div class="form-field">
		<label for="email"><strong>E-Mail:</strong></label>
		<input name="email" type="email" size="40" maxlength="60" required/>
	</div>			

	<div class="form-field">
		<label for="tel"><strong>Phone:</strong></label>
		<input name="tel" type="tel" size="40" maxlength="40" placeholder="Optional" />
	</div>							
	<div class="form-field">
	<label for="wunschdatum"><strong>Select preferred date</strong></label>
	<input type="date" id="wunschdatum" name="wunschdatum" required> (Only Tuesdays and Thursdays are allowed)
	</div>

	<div class="form-field">
		<label for="nachricht" id="nachricht-text"><strong>What are you planning to do?</strong><span class='large'></span></label>
		<br><textarea name="nachricht" placeholder="Feel free to briefly describe what you plan to do and if you already know if you need further instruction on working with certain equipment. (Limit: 2000 characters)" rows="6" cols="10" style="width: 100%;" required></textarea>
	</div> <br>

	<div class="honey">
		<label for="honigtopf"><strong>Please do not fill in this field:</strong></label>
		<input name="honigtopf" type="text" maxlength="50" value="" />
	</div>	

	<div class="form-field">
		<input type="submit" class="md-button" value="Submit Application" name="schicken" /> 
	</div>							
</form> 

<script type="text/javascript">
// Everything except weekend days
const validate = dateString => {
  const day = (new Date(dateString)).getDay();
  if (day==2 || day==4) {
    return true;
  }
  return false;
}

// Sets the value to '' in case of an invalid date
document.getElementById('wunschdatum').onchange = evt => {
  if (!validate(evt.target.value)) {
    evt.target.value = '';
  }
}
</script>

!!! info "Registrations by e-mail or form will be valid only after a confirmation e-mail from our team"