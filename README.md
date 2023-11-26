
**THIS IS A (DEV-)FORK OF [https://git.noc.ruhr-uni-bochum.de/makerspace/homepage](https://git.noc.ruhr-uni-bochum.de/makerspace/homepage)**


# Was ist das hier?  

Die Website des RUB-Makerspace. Online-Ansicht unter [https://makerspace.rub.de](https://makerspace.rub.de)

## Aufbau / Funktionsweise der Website

### Mkdocs & Markdown

Die typischen Web-"Programmier-Sprachen" sind HTML, CSS und Javascript. Da die wenigsten diese drei Sprachen eben mal so beherrschen, benutzt diese Website ein Tool namens mkdocs, um die Arbeit an der Website für alle zu ermöglichen. 

Mkdocs und seine diversen Plugins (wie mkdocs material) sind Tools, die aus einfachem Text und einigen Sonderzeichen HTML, CSS und Javascript bauen. Die Sprache, die mkdocs erkennt und umsetzen kann, heißt Markdown. 

Markdown ist eine vereinfachte Auszeichnungssprache, die es ermöglicht, Texte mit einfacher Syntax zu formatieren. Entwickelt wurde sie, um die Lesbarkeit zu maximieren und gleichzeitig zu ermöglichen, dass der Text als HTML veröffentlicht werden kann. 

#### Markdown-Beispiele

- **Überschriften**: Mit `# ` können Überschriften erzeugt werden. Umso mehr `#` genutzt werden, desto kleiner wird die Überschrift. Die erste Überschrift `Was ist das hier?` sieht in Markdown z.B. so aus `# Was ist das hier?`.
Weitere Beispiele der vorherigen Überschriften:
`## Aufbau / Funktionsweise der Website`  
`### Mkdocs & Markdown`   
`#### Markdown-Beispiele`   

- **Zeilenumbruch**: Zwei Leerzeichen am Ende einer Zeile erzeugen einen Zeilenumbruch.

- **Textformatierung**: Text kann als *kursiv* (`*kursiv*`), **fett** (`**fett**`) oder `monospace` (\``monospace`\`) formatiert werden.

- **Listen**: Listen können mit `- ` (nicht nummerierte Listen) oder `1. ` (nummerierte Listen) zu Beginn eines jeden Listenpunktes erstellt werden.

- **Links**: Dieser Link [Makerspace-Website](https://makerspace.ruhr-uni-bochum.de), der zu unserer Website führt, sieht in Markdown so aus: `[Makerspace-Website](https://makerspace.ruhr-uni-bochum.de)`. Also der Name des Links, der auf der Website erscheinen soll, in eckigen Klammern und die Link-Adresse direkt dahinter in runden Klammern.

- **Markdown ignorieren**: Manchmal ist es notwendig, dass die Zeichen, die Markdown-technisch Dinge auslösen, dies nicht tun, da Ihr sie so anzeigen möchtet. Z.B beim Gendern mit `*` kann es vorgekommen, dass das Sternchen als kursiv-Marker verstanden wird. Dies könnt Ihr vermeiden, indem Ihr ein `\` vor andere Zeichen setzt. Also z.B. `Mitarbeiter\*innen` wird angezeigt als Mitarbeiter\*innen. Was wenn Ihr nun aber `\` als Zeichen braucht? Dann könnt Ihr das so lösen `\\`. Das wird angezeigt als \\.

#### Website-spezifisches Markdown

Während das Markdown weiter oben "gängiges" Markdown ist, gibt es auch Markdown, das entweder nur über mkdocs oder über eigene Einstellungen von uns funktioniert. 

- **Bilder**: Bilder könnt Ihr ähnlich wie Links einbinden: `![BILD-BESCHREIBUNG](medien/NAME.jpg)`. `BILD-BESCHREIBUNG` ist der alternativ-Text, der angezeigt wird, wenn das Bild nicht angezeigt werden kann, oder von Screen-Readern für Menschen mit Sehbeeinträchtigung vorgelesen wird. `medien` ist der Ordner unserer Website, in dem wir alle Bilder und Videos speichern, die auf der Website angezeigt werden. Der `/` zeigt an, das wir eine Datei meinen, die in dem medien-Ordner liegt. `NAME.jpg` muss dann natürlich durch den eigentlichen Dateinamen ersetzt werden. 

- **Copyright bei Bildern angeben**: Um das Copyright bei Bildern anzugeben, habe ich unserer Website eine extra Funktion gebaut. Dafür habe ich das Markdown für Bilder "erweitert": `![BILD-BESCHREIBUNG @COPYRIGHT](medien/NAME.jpg)`. Um einem Bild Copyright hinzuzufügen, kann NACH der Beschreibung ein `@` gesetzt werden. Alles, was NACH dem `@` steht, wird als Copyright-Text unten rechts dem Bild hinzugefügt. Ein Beispiel könnte dann z.B. so aussehen: `![Ein Foto des Makerspaces von Außen. @RUB-Makerspace: Makerspace-Foto (CC BY-SA 4.0)](medien/makerspace-foto.jpg)`  

- **Einbinden anderer Pages**: An verschiedenen Stellen binden wir andere unserer Seiten ein. Zum Beispiel bei unseren Werkstatt-Seiten, wo die Ansprechpersonen nicht als Markdown jeweils ausgeschrieben sind, sondern deren eigene markdown-Seite dort eingebunden ist. Damit kann sie an mehreren Stellen unserer Website auftauchen (z.B. auch unter Organisation und Team), es gibt sie allerdings nur 1x und kann daher einfach gepflegt werden. Wie sieht das in Markdown aus:  
`--8<--`  
`NAME.md`  
`--8<--`   
Also `--8<--` gefolgt in einer neuen Zeile von dem Namen der Seite, die eingebunden werden soll, also `NAME` entsprechend ersetzen, und geschlossen mit einem weiteren  `--8<--` in einer neuen Zeile bindet eine unserer .md-Seiten auf einer anderen .md-Seite ein.

- **Verlinkungen auf Unterpunkte einer Seite**: Sagen wir Ihr möchtet auf einer Seite, die sehr lang ist, direkt auf einen Unterpunkt dieser Seite verweisen, dann geht das folgendermaßen:  
`## UNTERPUNKT {: #SINNVOLLERNAME }`
Die Anzahl der `#` spielt hier keine Rolle. `UNTERPUNKT` ist hier die Überschrift, zu der Ihr direkt verlinken möchtet. `{: #SINNVOLLERNAME }` setzt Ihr hinter die entsprechende Überschrift und ersetzt `SINNVOLLERNAME` durch einen intuitiven Titel. Vermeidet dabei wie immer Sonderzeichen, Umlaute oder Leerzeichen. Dadurch habt Ihr nun sozusagen mkdocs erklärt, dass es dort einen Ankerpunkt setzen soll, auf den Ihr von überall her verlinken könnt. 
Verlinkungen von der selbe Seite sehen dann so aus: `[LINKNAME](#SINNVOLLERNAME)`
Verlinkungen von anderen Seiten: `[LINKNAME](SEITENNAME.md#SINNVOLLERNAME)`  
`LINKNAME`: Name des Links der angezeigt werden soll.  
`#SINNVOLLERNAME`: Der Name, den ihr Eurem "Anker" gegeben habt.  
`SEITENNAME`: Name der .md-Datei auf deren Unterpunkt Ihr verlinken möchtet. 

- **Weitere Möglichkeiten**: Weitere Möglichkeiten, die Website mit Markdown zu gestalten, findet Ihr in der Dokumentation von [Mkdocs Material](https://squidfunk.github.io/mkdocs-material/reference/).  
Hier z.B. die [hervorgehobenen Infoblöcke](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)  


## Ordnerstruktur der Website

### Für den Alltag wichtig

/docs = Quelldateien der Website. Hier liegen die einzelnen "Pages" oder "Seiten" unserer Website. `team.md` z.B. ist unsere [Team-Seite](https://makerspace.ruhr-uni-bochum.de/team/). `team.en.md` ist unsere [englische Version der Team-Seite](https://makerspace.ruhr-uni-bochum.de/en/team/). Und nach diesem Schema ist die Website größtenteils aufgebaut. Hier werden die meisten von Euch wenn überhaupt arbeiten. Verlinkungen von einer .md-Datei auf eine andere funktionieren so: `[LINKNAME](DATEINAME.md)`.

/docs/medien = Hier werden Fotos und Videos gespeichert. Verlinkungen von den .md-Dateien aus /docs funktioniert so: `![LINKNAME](medien/DATEINAME.jpg)` 

/docs/news und /docs/news-entwuerfe: In Ordner `news` finden sich unsere veröffentlichten News. Hier dürfen nur News rein, die fertig sind. In `news-entwuerfe` können noch nicht fertige `news`gespeichert werden. 

/slides = Ordner für alle Foliensätze

mkdocs.yml = Konfigurationsdatei für Mkdocs. Hier werden allgemeine Optionen für die Website festgelegt, Plugins geladen und - wichtig für den Alltag - die **Navigation** der Website konfiguriert. 


### Weitere Unterordner unter /docs

/docs/javascripts = Hier sind unsere meist selbstgeschriebenen Javascript-Dateien. Am besten nur nach Absprache mit tb dort irgendetwas tun.

/docs/stylesheets = CSS für gestalterische Anpassungen. Auch hier erst mit tb absprechen!

/docs/overrides = [Overrides](https://squidfunk.github.io/mkdocs-material/customization/#overriding-blocks) an mkdocs-material. Einfach ignorieren

/docs/sicherheit = Tests zum Thema Sicherheit. Hier werden z.Z. Betriebsansweisungen gesammelt. 

### Weitere Ordner

/tables = Test-Ordner für Experimente mit Tabellen. Für den Alltag unwichtig. 

/public = HTML-Version, gehostet über GitLab Pages. Das sind die Dateien, die von mkdocs aus unserem Markdown erzeugt werden. Also in HTML übersetzt werden, damit die Browser damit arbeiten können. An diesen Dateien solltet Ihr **nie** etwas ändern. 

### Einzelne Dateien

.gitlab-ci.yml = Konfigurationsdatei für unsere Gitlab-CI. CI = Continuous Integration = Tools, mit denen (zum Beispiel nach Änderungen von Dateien, nach Zeit, usw.) automatisierte Prozesse losgetreten werden können. Wir nutzen das, um verschiedene Prozesse (z.B. Kalender-Updates) zu automatisieren. Diese Datei bitte auch nicht verändern.

.gitignore = Git-Konfiguration. Für den Alltag unwichtig

LICENSE.md = Lizenz-Informationen

README.md = Diese Datei

## Hinweise zum Stil

- Dass wir einheitlich schreiben, ist essentiell für einen professionellen Auftritt. 
- Wir haben uns auf das großgeschriebene `Du` geeinigt, wenn wir die Besucher*innen unserer Website ansprechen. (Als Kompromiss zwischen dem sehr formalen "Sie" und dem zu lockeren "du".)
- Wir haben uns darauf geeinigt zu gendern. Falls ein Sonderzeichen notwendig ist, weil es keine geschickte Umschreibung (wie z.B. Studierende) gibt, nutzen wir das Sternchen `*`.
- Wir versuchen möglichst fehlerfrei zu schreiben. Nutzt dazu gerne Hilfsmittel wie [DeepL Write](https://www.deepl.com/de/write)
- TODO



## Bei Fragen
- tb steht als erster Ansprechpartner zu Verfügung.
- th kann auch angesprochen werden.


## Die Website tiefergehend verändern/mit mkdocs "bauen"

Hier eine Anleitung, wie Ihr Euren Computer so einrichtet, dass Ihr die Website lokal auf Eurem Rechner bearbeiten und v.a. die Website über mkdocs bauen könnt, sodass Änderungen online sichtbar werden.  
**Achtung:  Das macht bitte niemand aus eigenem Antrieb, sondern nur nach entsprechender Anweisung.**  
Bei Fragen wendet Euch bitte an tb. 


### Mkdocs und Notwendiges bei Euch einrichten
**Anleitung basiert auf Windows-Erfahrungen. Mac kann abweichen.**

- Git installieren. Empfehlung: Einfach [Github Desktop](https://desktop.github.com/) verwenden und für die Verwendung mit unserem Gitlab-Projekt [konfigurieren](https://itnext.io/how-to-use-github-desktop-with-gitlab-cd4d2de3d104). Am besten noch mit einer IDE verknüpfen (wie Visual Studio Code).
- Python 3 installieren: https://www.python.org/downloads/ (Empfehlung für Menschen mit Mac: Erst Homebrew - https://brew.sh/ - installieren, dann darüber Python)
- Um die sogenannte Python-Dependency-Hell\* zu vermeiden, empfiehlt es sich Python-Packages pro Anwendungsfall statt global auf dem eigenen Rechner zu installieren. Dies funktioniert mit virtuellen Umgebungen. 
	- meine Empfehlung ist hier: Im Ordner über dem Homepage-Ordner, den Ihr über Github Desktop gecloned habt, ein Terminal öffnen (Windows: entweder shift+Rechtsklick -> Powershell hier öffnen oder Terminal öffnen und per commands dahin navigieren), und dort mit `python -m venv name` (`name` ist hier der Name, den Ihr Eurer virtuellen Umgebung gebt, ich hab `website` gewählt) eine neue virtuelle Umgebung erstellt. Diese Umgebung wird nun in einem Ordner mit dem von Euch gewählten Namen in dem Ordner erstellt, in dem sich das Terminal gerade befindet. 
	- Anschließend müsst Ihr die virtuelle Umgebung in eurem Terminal aktivieren. Wenn Ihr meiner Empfehlung gefolgt seid, was die Ordnerstruktur angeht, sollte diese so aussehen:  
	`ORDNER/homepage`  
	`ORDNER/VENV`  
	`ORDNER`kann hier ein beliebig von Euch benannter Ordner sein. `VENV` ist der Ordner Eure virtuellen Umgebung und heißt so, wie ihr die Umgebung benannt habt. `homepage` und `VENV` sollte nun im selben Ordner liegen.
	- Wenn Eure Ordnerstruktur so aussieht, solltet Ihr folgendes tun können: 
		1. Über Github Desktop das repository `homepage` entweder im Terminal öffnen oder in einer IDE (wie Visual Studio Code) mit eingebauten Terminal. 
		1. Die virtuelle Umgebung aktivieren. Um die zu aktivieren, müsst Ihr im Terminal dorthin navigieren. Da Ihr nun im Ordner `homepage` sein solltet, funktioniert das aktivieren folgendermaßen: `../VENV/Scripts/activate` (VENV ist hier natürlich wieder der Name Eurer virtuellen Umgebung, `../` sagt dem Terminal, dass es zunächst 1 Ordner hochgehen muss.
		2. Mit der aktivierten virtuellen Umgebung könnt Ihr nun mkdocs und die Plugins installieren. Dies funktioniert nach dem folgenden Schema: `pip install mkdocs`. Für die einzelnen Plugins entsprechend `mkdocs` mit dem Titel des Plugins ersetzen. 
		3. Das von tb selbst erstellte Plugin installieren, das Probleme des rss-plugins fixed. Zufinden in Sciebo: [Link](https://ruhr-uni-bochum.sciebo.de/f/1926184964). Die .zip hat auch eine Anleitung. Denkt daran, falls ihr die virtuelle Umgebung nutzt, dass sie auch für die Installation dieses Plugins aktiv sein muss. 
- Erforderliche Software rund um mkdocs:
    - https://www.mkdocs.org/
    - https://squidfunk.github.io/mkdocs-material/
    - Folgende Mkdocs-Plugins installieren:
        - table-reader: https://timvink.github.io/mkdocs-table-reader-plugin/
        - footermatter: https://github.com/sondregronas/mkdocs-footermatter/
        - glightbox: https://blueswen.github.io/mkdocs-glightbox/
        - mkdocs-video: https://github.com/soulless-viewer/mkdocs-video
        - rss: https://guts.github.io/mkdocs-rss-plugin/
        - git-revision-date-localized: https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/index.html
        - i18n: https://github.com/ultrabug/mkdocs-static-i18n
- Falls noch nicht vorhanden: Vernünftigen Text-Editor installieren - https://www.sublimetext.com/ / https://code.visualstudio.com/ (oder besser: https://vscodium.com/ ) / https://kate-editor.org/ u.v.m. ...


\* Dependency-Hell: Während es gut funktioniert, Python und alle python packages global auf dem eigenen Rechner zu installieren, solange nur 1 einzelne Anwendung auf Python angewiesen ist, wird es schnell sehr anstrengend, wenn mehrere Anwendungen auf Python und entsprechende Packages angewiesen sind. Wenn Ihr also vielleicht nicht nur mkdocs benutzen, sondern auch noch mit stable-diffusion arbeiten möchtet, könnte es schnell passieren, dass eines der beiden nicht mehr funktioniert, wenn die packages auf die beide angewiesen sind, updaten, aber jede Anwendung eine andere Version dieser packages haben möchte, aber nur 1 Version gleichzeitig installiert werden kann. (Ich weiß nun tatsächlich nicht, ob es zwischen den beiden genannten Probleme gäbe, aber spätestens bei verschiedenen stable-diffusion UIs (wie EasyDiffsion und ComfyUI) hört der Spaß schnell auf.

Nach Runterladen / Fetch / Pull via Git, kann man nun in der Kommandozeile im runtergeladenen Ordner mit dem Befehl `mkdocs serve` lokal an der Website arbeiten. Jede Änderung an *.md-Dateien wird dann live im Browser angezeigt. Zu finden ist diese lokale Arbeitsversion dann unter `localhost:8000` (im Browser-Adressfeld eingeben). 

Per "mkdocs build" wird die Seite neu gebaut. Bevor man nach dem Bauen der Seite zurück nach Git committed, muss der (alte) Unterordner /public gelöscht werden und der (neue) von mkdocs für den Build neu erzeugte Ordner "site" in "public" umbenannt werden.

Anders als früher angedacht werden wir eine weitere Automatisierung des build-Prozesses vorerst nicht weiter verfolgen. Der manuelle Workflow erscheint uns sinnvoller und sicherer. Wer schnelle Änderungen an der Website braucht, spricht tb an.


## To-Dos

- Datenschutz
- mehr zum Stil
- mehr zur mkdocs.yml
- mehr zu den eigenen javascript dateien