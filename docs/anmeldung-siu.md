## Anmeldung zur allgemeinen Sicherheitsunterweisung {: #anmeldung-siu }

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
		<label for="vorname"><strong>Vorname:</strong></label>
		<input name="vorname" type="text" size="40" maxlength="30" required/>
	</div>							

	<div class="form-field">
		<label for="email"><strong>E-Mail:</strong></label>
		<input name="email" type="email" size="40" maxlength="60" required/>
	</div>			

	<div class="form-field">
		<label for="tel"><strong>Telefonnummer:</strong></label>
		<input name="tel" type="tel" size="40" maxlength="40" placeholder="Optional" />
	</div>							
	<div class="form-field">
	<label for="wunschdatum"><strong>Wunschdatum auswählen</strong></label>
	<input type="date" id="wunschdatum" name="wunschdatum" required> (Erlaubt sind nur Dienstage und Donnerstage)
	</div>

	<div class="form-field">
		<label for="nachricht" id="nachricht-text"><strong>Was hast Du vor?</strong><span class='large'></span></label>
		<br><textarea name="nachricht" placeholder="Beschreib uns gerne kurz was Du vorhast und ob Du schon weißt, ob Du weitere Unterweisungen zur Arbeit mit bestimmten Geräten benötigst. (Limit: 2000 Zeichen)" rows="6" cols="10" style="width: 100%;" required></textarea>
	</div> <br>

	<div class="honey">
		<label for="honigtopf"><strong>Bitte dieses Feld nicht ausfüllen:</strong></label>
		<input name="honigtopf" type="text" maxlength="50" value="" />
	</div>	

	<div class="form-field">
		<input type="submit" class="md-button" value="Anmeldung absenden" name="schicken" /> 
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

!!! info "Die Anmeldung wird erst nach einer persönlichen Bestätigung per E-Mail verbindlich"