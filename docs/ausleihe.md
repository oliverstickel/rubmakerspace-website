# Unsere Geräte ausleihen

Geräteausleihe ist nicht unsere Kernaufgabe. Das Ausleihen von Medien und Geräten liegt eher im Bereich anderer Fachabteilungen an der Universität, zum Beispiel der [Bibliothek](https://www.ub.ruhr-uni-bochum.de/) oder [IT.Services](https://www.it-services.ruhr-uni-bochum.de/). Trotzdem ist es in Einzelfällen möglich, unsere Geräte zu entleihen.


!!! info "Für die Ausleihe gelten folgende Regeln:"

	- Es gibt keinen Anspruch auf die Verfügbarkeit von Dingen.
	- Gerade bei längeren Ausleihen behalten wir uns vor, Dinge auch spontan zurückzufordern - das tun wir aber nur, sofern sich ein dringender, unvorhergesehener Bedarf ergibt.
	- Es muss sich um einen Bedarf im Rahmen der Kernaufgaben der Hochschule handeln (Lehre, Forschung, Gründung und so weiter – keine privaten Projekte).
	- Der Bedarf darf nicht anderweitig deckbar sein; Technik für Videokonferenzen und Ähnliches sollte beispielsweise primär über IT.Services als zuständige Fachabteilung ausgeliehen werden.

## Ausleih-Anfrage

Hier kannst Du uns eine Anfrage zur Ausleihe schicken. Wir klären dann im Team die Möglichkeiten und melden uns bei Dir. 
 
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
		<textarea name="nachricht" placeholder="Hier kannst Du beschreiben, was Du gerne wie lange und wofür ausleihen würdest. Limit: 2000 Zeichen" rows="10"></textarea>
	</div> 
	<div>
	<label for="von"><strong>Von wann?</strong></label>
	<input type="date" id="von" name="von" style="font-size:1.1em; color:var(--high-contrast-font); background-color:var(--high-contrast-bg);" required>  
	<label for="bis"><strong>Bis wann?</strong></label> 
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
				Ich erkläre mich mit der Erhebung, Verarbeitung und Speicherung meiner hier gemachten Angaben gemäß Eurer
				<a href="/datenschutz/index.html" target="_blank" style="color: var(--link-color);">Datenschutzvereinbarung</a> einverstanden. Meine Einwilligung kann ich jederzeit durch formlose Mitteilung an Euch widerrufen.
			</div>
		</label>
	</div>

	<div class="form-field">
		<input type="submit" class="md-button" value="Ausleih-Anfrage abschicken" name="schicken" /> 
	</div>							
</form>
