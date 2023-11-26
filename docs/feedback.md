# Feedback 

Wir sind sehr bemüht, den Makerspace stets besser zu machen und als Ort zu erhalten, an dem Du Dich wohlfühlst. 
Wenn Du Dir kurz Zeit nimmst, uns Dein Feedback oder Deine Wünsche [mitzuteilen](kontakt.md), ist das eine große Hilfe! Vielen Dank, dass Du aktiver Teil unserer Maker-Community bist!

## Wissen teilen ist das schönste Feedback

Neben allgemeinem Feedback freuen wir uns ganz besonders darüber, wenn Du uns und der Allgemeinheit Material darüber [zur Verfügung stellst](kontakt.md), was Du an Projekten mit Hilfe des Makerspaces umgesetzt hast – und wie Du es getan hast.

!!! question "Zum Beispiel?"

	Ob Fotos, Videos, technische Dokumentationen, Erfahrungsberichte, gesprochenes Wort, Quelldateien, spezielle Erkenntnisse zu Maschinen und Materialien, ganze Abschlussarbeiten oder auch ein paar Stichworte, Skizzen, Werke oder andere Beiträge – **wir nehmen alles gerne und freuen uns auf [Deine Einsendung](kontakt.md)**. Auch ganze Projekte, Prototypen und andere Artefakte, die nicht mehr benötigt werden, können nach Absprache ihren Heimat- und Ausstellungsort sehr gern im Makerspace finden.  

	Ganz besonders freut uns, wenn Du Dein Projekt beziehungsweise seine Dokumentation entweder selbst irgendwo veröffentlichst und/oder uns die Erlaubnis gibst, Dein eingesendetes Material zu veröffentlichen. Das kann in vielen Formen passieren – zum Beispiel hier auf der Website, in Sozialen Medien, in Lehrmaterialien, als Ausdruck im Makerspace…

## Feedback-Formular 

Hier geht es um Informationen, die uns bei der Weiterentwicklung des Makerspaces helfen. Alle Felder im Folgenden Formular sind optional. 

<form method="post" action="https://feedback.ruhr-uni-bochum.de/formmailer.php" name="Kontaktformular" class="form">
    <input type="hidden" name="subject"       value="Feedback von der Homepage" />     
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

	<div class="form-field"
		<label for="email"><strong>E-Mail:</strong></label>
		<input name="email" type="email" size="40" maxlength="60" required/>
	</div>	

	<div class="form-field">
		<label for="freitext"><strong>Freitextfeld:</strong><span class='large'></span></label>
		<textarea name="freitext" placeholder="Hier kannst Du Freitext schreiben (optional, Limit: 1000 Zeichen)." rows="8" cols="10" style="width: 100%;"></textarea>
	</div>						

	<div class="form-field">
		<label for="warum"><strong>Warum warst Du im RUB-Makerspace? (Welches Projekt / Welche Veranstaltung)</strong><span class='small'></span></label>
		<textarea name="warum" placeholder="(optional, Limit: 1000 Zeichen)" rows="4" cols="10" style="width: 100%;"></textarea>
	</div>

	<div class="form-field">
		<label for="abstimmung"><strong>Wie war für Dich die Abstimmung/Kommunikation/Planung mit uns?</strong><span class='small'></span></label>
		<textarea name="abstimmung" placeholder="(optional, Limit: 1000 Zeichen)" rows="4" cols="10" style="width: 100%;"></textarea>
	</div>		

	<div class="form-field">
		<label for="wuensche"><strong>Was hättest Du Dir zusätzlich oder anders (zum Beispiel bezüglich vorhandener Hardware) gewünscht?</strong><span class='small'></span></label>
		<textarea name="wuensche" placeholder="(optional, Limit: 1000 Zeichen)" rows="4" cols="10" style="width: 100%;"></textarea>
	</div>		

	<div class="form-field">
		<label for="erwartungen"><strong>Hat der RUB-Makerspace insgesamt Deine Erwartungen erfüllt? Und falls nicht, woran hat es gelegen?</strong><span class='small'></span></label>
		<textarea name="erwartungen" placeholder="(optional, Limit: 1000 Zeichen)" rows="4" cols="10" style="width: 100%;"></textarea>
	</div>									
	
	<div class="form-field">
		<label for="angebote"><strong>Welche Art von Veranstaltungen oder Angeboten sollte es zukünftig im RUB-Makerspace geben? (egal, ob durch uns oder Dich organisiert)</strong><span class='small'></span></label>
		<textarea name="angebote" placeholder="(optional, Limit: 1000 Zeichen)" rows="4" cols="10" style="width: 100%;"></textarea>
	</div>		

	<div class="form-field">
		<label for="aufmerksam"><strong>Wie bist Du auf den RUB-Makerspace aufmerksam geworden?</strong><span class='small'></span></label>
		<textarea name="aufmerksam" placeholder="(optional, Limit: 1000 Zeichen)" rows="4" cols="10" style="width: 100%;"></textarea>
	</div>			

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

	<br>
	<div class="form-field">
		<input type="submit" class="md-button" value="Formular absenden" name="schicken" /> 
	</div>							
</form>

Falls Du uns lieber direkt eine [E-Mail](kontakt.md) schicken möchtest, gibt's unsere Leitfragen für Feedback hier auch noch als Kopiervorlage: 

    1. Warum warst Du im RUB-Makerspace? (Welches Projekt / Welche Veranstaltung)
    2. Wie war für Dich die Abstimmung/Kommunikation/Planung mit uns?
    3. Was hättest Du Dir zusätzlich oder anders (zum Beispiel bezüglich vorhandener Hardware) gewünscht?
    4. Hat der RUB-Makerspace insgesamt Deine Erwartungen erfüllt? Und falls nicht, woran hat es gelegen?
    5. Welche Art von Veranstaltungen oder Angeboten sollte es zukünftig im RUB-Makerspace geben? (egal, ob durch uns oder euch organisiert)
    6. Wie bist Du auf den RUB-Makerspace aufmerksam geworden?

