# Präsentationen auf der Website

"Klassische" Foliensätze als PPTX, PDF u.Ä. eignen sich nicht gut für die Integration in eine Website. Es gibt aber Alternativen. Eine Werkzeug dafür ist zum Beispiel [https://revealjs.com/](https://revealjs.com/) - damit lassen sich aus HTML- oder Markdown-Dateien Präsentationen zur Anzeige im Browser erstellen. 

[TL:DR -  direkt zu den Vorlagen "ready to go"](#vorlagen)

## Beispiel-Folien {: #bsp }

<iframe src="../slides/beispiel" width="100%" height="430px" style="border: 0.5px solid #003561"></iframe>  

<small>:material-fullscreen: <a href="../slides/beispiel" target="_blank" >Präsentation in neuem Tab groß anzeigen</a></small>  
:material-printer: <small><a href="../slides/beispiel/?print-pdf" target="_blank">Druck-Ansicht, zum Beispiel für PDF-Export (nur in Chromium-Browsern, ohne externe Inhalte)</a></small>  
<small>:material-square-edit-outline: <a href="https://git.noc.rub.de/makerspace/homepage/-/blob/main/slides/beispiel/slides.md" target="_blank">Quelldatei "slides.md" zu den Folien auf Gitlab bearbeiten</a></small>

--8<--
../howto-slides.md
--8<--

## How-To: Online-Folien erstellen

Um eine Präsentation für die Website mit revealjs zur erstellen, muss man im Gitlab-Projekt der Webseite folgendes tun: 

1. Unterordner mit den erforderlichen Daten für die Präsentation unter [/slides](https://git.noc.ruhr-uni-bochum.de/makerspace/homepage/-/tree/main/slides) erstellen (am einfachsten als Kopie des Ordners [/slides/beispiel](https://git.noc.ruhr-uni-bochum.de/makerspace/homepage/-/tree/main/slides/beispiel)). ==**Keine Leer-/Sonderzeichen oder Umlaute im Ordnernamen!**==
2. In Datei "slides.md" im (kopierten) Ordner den Inhalt der Präsentation schreiben
3. Unter [docs/medien](https://git.noc.ruhr-uni-bochum.de/makerspace/homepage/-/tree/main/docs/medien) die Bilder oder Videos zur Präsentation ablegen und von dort in slides.md verlinken ([s.u.](#wie-ist-das-mit-den-bildern) für mehr Infos zu Bildern)

### Unterordner für eine Präsentation

Die Ordner sehen alle so aus: 

```
/slides
  /name-des-foliensatzes
    slides.md
    index.html
``` 

- Ordnername = Name der Präsentation
- slides.md = Inhalt der Präsentation. Darf nicht umbenannt werden (bzw. nur dann, wenn in der index.html-Datei auch die nötigen Anpassungen vorgenommen werden)
- index.html = HTML-Seite, die dafür sorgt, dass reveal.js aufgerufen wird und dass damit die Konvertierung der slides.md-Datei in die Folienansicht passiert. In dieser Datei kann man reveal.js auch konfigurieren, wenn man das möchte.  Man muss diese Datei aber überhaupt nicht anfassen, wenn man einfach nur einen Foliensatz erzeugen möchte (dafür einfach den Ordner "beispiel" kopieren und nur mit "slides.md" arbeiten)
- Es können wenn nötig weitere zur Präsentation gehörende Dateien hier abgelegt werden. Fotos/Videos, die sehr spezifisch sind, können z.B. hierher. Alternativ können sie auch zentral für alle unter /docs/medien abgelegt werden (s.u.), falls sie für einen größeren Personenkreis nützlich sein könnten.

### Wie schreibe ich Inhalt? 

Grundsätzlich erstmal genau wie für die Website: In [Markdown](https://t3n.de/news/eigentlich-markdown-478610/). Wenn Du Dir einfach die [Beispiel-Folien](#bsp) und die [Sandkästen](#vorlagen) weiter unten auf dieser Seite als Vorlage nimmst, kannst Du damit einfach mal loslegen und experimentieren. 

Für gestalterische Eingriffe braucht man unter Umständen ein wenig (Grundlagen-)HTML. Aber man kann sich ja auch erstmal auf den Content konzentrieren. :-) 

### Wie ist das mit den Bildern? 

Bilder lassen sich im Prinzip von überall aus dem Netz mit ihrer URL einbinden. Eigene Bilder zur zentralen Verwendung speichern wir in Gitlab unter [/docs/medien](https://git.noc.rub.de/makerspace/homepage/-/tree/main/docs/medien). Sehr spezifische Bilder können auch in anderen Ordnern abgelegt werden (z.B. im Ordner einer Präsentation). Neue Bilder können über das "+"-Symbol und dann "Upload File" hochgeladen werden. Man kann sie dann über folgendes Link-Schema abrufen: 

```
https://git.noc.rub.de/makerspace/homepage/-/raw/main/docs/medien/DATEINAME
```

DATEINAME = Dateiname des in Gitlab hochgeladenen Bilds. 

Alternativ kann man den Link zum Bild nach dem Upload in Gitlab auch über einen Rechtsklick auf das nun angezeigte Bild und dann "Grafikadresse kopieren" (o.Ä.) bekommen.

!!! warning "Umgang mit Bildern"

    - **Keine** Umlaute, Sonderzeichen, Punkte, Kommata im Dateinamen. 
    - **Nur** Buchstaben, Zahlen und Unter- oder Bindestriche im Dateinamen.
    - Bilder **komprimieren** und bei hochauflösenden Bildern die Auflösung reduzieren. Bitte ein Beispiel an den vorhandenen Dateigrößen nehmen! Empfehlenswert als Werkzeug ist zum Beispiel [ImageOptim](https://imageoptim.com/versions.html) und/oder [Irfanview](https://www.irfanview.com/)
    - Es gilt wie immer, dass Lizenzen beachtet werden müssen (insbesondere falls externe Bilder geladen werden sollen). Eigene Lizenz am besten gleich im Dateinamen unterbringen (s. existierende Dateien im docs/medien-Ordner)
    - Nach dem Upload in Gitlab nicht versuchen, den Link aus der Adresszeile des Browsers als Link zum Bild zu verwenden (der führt nur zur Vorschau-Ansicht in Gitlab). 


### Neues "Bauen" der Webseite bei Neuerzeugung von Folien

**Entfällt** - Foliensätze, die wie o.g. angelegt werden, sollten direkt online gehen. Es kann allerdings 1-3, vielleicht auch mal 5 Minuten dauern, bis die Änderungen wirklich auf der Website sichtbar werden. Außerdem ggf. im Browser "richtig" neu laden lassen, da sonst evtl. eine alte Ansicht aus dem Browser-Cache angezeigt wird (Strg + F5 bzw. Cmd + Shift + R). 


### Link-Schema der Online-Versionen

Der Link zur Online-Version einer Präsentation hat das Schema: 

```
https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/slides/ORDNERNAME
```

"ORDNERNAME" muss durch den Namen des Unterordners der Folien unter /slides (aus Schritt 1) ersetzt werden. 

Verwendung vgl. [Beispiel-Folien](#bsp).


## Einbetten in die eigentliche Webseite

Das o.g. Vorgehen bringt einen zu einer Ansicht der erstellten Präsentation, die das komplette Browser-Fenster füllt. Möchte man die Folien in die Website einbetten, muss man noch weitere Schritte tun: 

1. Optional: Neue Markdown-Datei unter /docs anlegen (falls die Folien nicht auf einer bestehenden Seite untergebracht werden sollen)
2. Folie über ein "iFrame" einbinden. Das geht so: 


```
<iframe src="../slides/unterweisung-allgemeine" width="100%" height="430px" frameBorder="0"></iframe>  
<a href="../slides/unterweisung-allgemeine" target="_blank" style="font-size: small;" >Präsentation in neuem Tab groß anzeigen</a>
``` 

Der o.g. Code (geschrieben in eine Markdown-Datei unter /docs) ergibt die Ansicht, die im nächsten Abschnitt "Beispiel-Folien" zu sehen ist. 


## PDFs aus Folien machen

Der beste Weg um aus Online-Folien PDFs zu machen, ist ```?print-pdf``` an den Link zu den Folien anzuhängen und die Seite, die man dann sieht, als PDF auszudrucken. 

==ACHTUNG, das funktioniert nur in Chromium-basierten Browsern vernünftig, d.h. dafür Chrome, Chromium, Vivaldi, Brave, Edge o.Ä. benutzen! Ausnahmsweise ist Firefox hier mal nicht die richtige Wahl (und Safari auch nicht).==  

**Link-Schema:**

```
https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/slides/ORDNERNAME/?print-pdf
```

[https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/slides/beispiel/?print-pdf](https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/slides/beispiel/?print-pdf) führt zum Beispiel zur "druckfertigen" Version der o.g. Beispiel-Folien. Hier sieht man auch, dass eingebetteter Content (die Online-Version lädt die Wikipedia-Seite zu "Markdown" auf einer Folie) nicht mit übernommen wird (bzw. werden kann). 

## Fortgeschrittenere Arbeitsmöglichkeiten

Je nach Arbeitsweise kann man die o.g. Schritte unterschiedlich gut und smooth finden - sie funktionieren aber. Wer mehr möchte: 

- Drückt in Gitlab einfach mal auf "Web-IDE". Ihr solltet dann eine deutlich mächtigere Version des einfachen Standard-Texteditors sehen, in dem zum einen alle Dateien zu sehen sind und in dem zum anderen zum Beispiel auch Dateien verschoben, hochgeladen, umbenannt, etc. werden können (IDE = "integrated development environment").
    - [Hier ein Direktlink zur IDE-Ansicht unseres /docs-Ordners](https://git.noc.ruhr-uni-bochum.de/-/ide/project/makerspace/homepage/edit/main/-/docs/)
    - Ganz links hat die IDE drei Buttons, die nacheinander von oben bis unten einen sinnvollen Workflow ergeben: *Editieren*, dann bei Bedarf *Review* (Vergleich vorher-nachher), dann *Commit* (die bearbeiteten Dokumente zurück vom für die Bearbeitung erstellten "Branch" / Zweig des Datenbestandes  nach Gitlab in den Haupt-Datenbestand übertragen)
    - Bitte ggf. bei Commits  "Commit to main branch" wählen
- Das komplette Gitlab-Repository unserer Projekt-Seite kann man natürlich auch lokal auf seinen Rechner spiegeln und von dort aus bearbeiten. So wird in der Welt eigentlich hauptsächlich mit Git gearbeitet. Das lässt sich klassischerweise per Kommandozeile machen - einfacher ist aber ein Werkzeug wie [Github Desktop](https://itnext.io/how-to-use-github-desktop-with-gitlab-cd4d2de3d104), Gitkraken o.Ä. 


## (Kopier-)Vorlagen "Ready to go" {: #vorlagen }

Zum Experimentieren oder um neue Foliensätze schnell anzulegen, gibt es hier drei vorbereitete "Sandkasten"-Präsentationen, mit denen gern gearbeitet werden kann. Sobald Du die jeweilige Quelldatei "slides.md" auf Gitlab bearbeitet hast, solltest Du die Änderungen in der Online-Version der Folien sehen können. 

Oli oder Torben können Dir dann nach Bedarf auf Zuruf den Stand eurer Präsentation in die Webseite integrieren, Namen und Links ändern, etc. 

### Sandkasten 1 

<iframe src="../slides/sandkasten1" width="100%" height="430px" style="border: 0.5px solid #003561"></iframe>  
<a href="../slides/sandkasten1" target="_blank" style="font-size: small;" >Präsentation in neuem Tab groß anzeigen</a>

:material-square-edit-outline: [Quelldatei "slides.md" zu Sandkasten1 auf Gitlab bearbeiten](https://git.noc.rub.de/makerspace/homepage/-/blob/main/slides/sandkasten1/slides.md)


### Sandkasten 2

<iframe src="../slides/sandkasten2" width="100%" height="430px" style="border: 0.5px solid #003561"></iframe>  
<a href="../slides/sandkasten2" target="_blank" style="font-size: small;" >Präsentation in neuem Tab groß anzeigen</a>


:material-square-edit-outline: [Quelldatei "slides.md" zu Sandkasten2 auf Gitlab bearbeiten](https://git.noc.rub.de/makerspace/homepage/-/blob/main/slides/sandkasten2/slides.md)

### Sandkasten 3

<iframe src="../slides/sandkasten3" width="100%" height="430px" style="border: 0.5px solid #003561"></iframe>  
<a href="../slides/sandkasten3" target="_blank" style="font-size: small;" >Präsentation in neuem Tab groß anzeigen</a>

:material-square-edit-outline: [Quelldatei "slides.md" zu Sandkasten3 auf Gitlab bearbeiten](https://git.noc.rub.de/makerspace/homepage/-/blob/main/slides/sandkasten3/slides.md)


