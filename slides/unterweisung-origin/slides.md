# Shaper Origin

### Workshop: Einstieg CNC-Oberfräse

![](https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/rub-makerspace-logo.svg)

Notes:
Hier kann man Speaker-Notes hinterlassen

---

## Umgang mit den Folien

- Navigiere mit den blauen Pfeilen rechts unten oder über das Menü links unten
- Tastatur: "Escape" für Folienübersicht, "f" für Fullscreen; "s" für "Speaker Notes", Pfeiltasten zur Navigation, u.v.m. (mehr: "?" für Hilfe)
- Mobilgerät: Navigation per Swipe-Gesten möglich
- Es gibt horizontale und vertikale Folien (erkennst Du an den blauen Pfeilen oder in der Folienübersicht)

---

## Grundlagen 

|||

### Shaper Origin
__Handgeführte CNC-Oberfräse__

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/cnc_oberfraese_origin.jpg" width="50%"/>

__Materialien__
- Holz
- Weichmetalle - Kupfer, Messing, Aluminium...
- Kunststoffe - Acryl, PVC, Linoleum...

|||

### Shaper Origin

- Orientierung der Maschine mittels Kamera auf der Rückseite
- Berechnung der Position mittels Dominomuster in Form von ShaperTape
- Workstation zum Einspannen von Bauteilen

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/RUB-Makerspace_Origin1_CC-BY-SA-40.jpg" class="r-stretch"/>

|||

<!-- .slide: data-background-iframe="https://www.shapertools.com/de-de/tutorials" -->

Notes:
Video-Tutorials von ShaperTools vorstellen

|||

<!-- .slide: data-background-iframe="https://hub.shapertools.com/" -->

Notes:
ShaperHub vorstellen

|||

### Vorgehen

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/vorgehen.png" class="r-stretch"/>

---

## Vorbereitung - Datenerzeugung mit Inkscape

|||

### Datei -> Dokumenteneinstellungen

- Anzeige- und Dokumenteneinheit müssen übereinstimmen
- Speichern der SVG als „Normales SVG“. Inkscape speichert die Grafiken standardmäßig als „Inkscape-SVG“, welche Daten enthalten die von Origin nicht verarbeitet werden können.

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/inkscape_dokumenteneinstellungen.jpg" class="r-stretch"/>

|||

### Bearbeiten -> Einstellungen -> Werkzeuge

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/inkscape_objektrahmen.png" width="60%"/>
<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/inkscape_objektrahmen-einstellungen.jpg" width="40%">

|||

### Pfadformatierung

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/inkscape_formatierung.PNG" class="r-stretch"/>

|||

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/inkscape_gitarre.png" class="r-stretch"/>

|||

### Datenerzeugung mit Fusion 360

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/autodesk_fusion.png" class="r-stretch">

---

## Scannen

|||

### ShaperTape

- Maximal 90 cm lange Streifen
- Abstand 5 – 8 cm
- Streifen müssen nicht parallel verlaufen dürfen sich aber nicht kreuzen oder überlappen
- Tape auf Fräsebene anbringen
- Das Tape darf nach dem Scan nicht mehr bewegt werden
- Tape als Gerade und nicht als Kurve anbringen
- Keine Tape-Reste oder Tape-Rollen im Sichtfeld der Kamera (Arbeitsbereich)
- ShaperTape darf mit dem Fräser durchfahren werden

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/RUB-Makerspace_Origin2_CC-BY-SA-40.jpg" class="r-stretch"/>

|||

### Scan

- Scan mit geringer Auflösung
    - Nicht genügend ShaperTape vorhanden
    - ShaperTape ist falsch angebracht
    - Beleuchtung des Arbeitsbereiches – Flimmern durch LEDs oder Arbeitsbereich zu hell
    - Spiegelungen oder Reflexionen im Arbeitsbereich – Materialoberfläche 
- Gescannte Arbeitsflächen werden von Origin abgespeichert und können aufgerufen werden, sobald die Kamera auf das ShaperTape gerichtet wird
- Arbeitsflächen können erweitert werden

---

## Gestalten

|||

### Raster

- Um Fräspfade besser platzieren zu können muss ein Raster erstellt werden
- Rotation um einen bestimmten Winkel nur mit Raster möglich
- 3 Punkte definieren eine Fläche und den Nullpunkt
- Methoden zur Rastererzeugung
    - Shortcut
    - Physikalisches Abtasten
    - Visuelles Abtasten
    - Hybrides Abtasten

|||

### Raster - Shortcut

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/raster_shortcut.png" width="30%">

- __Ausrichtung des Rasters ist zweitrangig__
- __Das Raster wird als Messwerkzeug verwendet__
- Nullpunkt visuell unter der Frässpitze des V-Nutfräsers platzieren
- Sobald die Origin in Psition ist mit einem __Doppelklick__ auf der <span style="color:green">grünen Taste</span> bestätigen
- Die Achsenorientierung folgt dabei der Ausrichtung der Origin auf der Arbeitsfläche

|||

### Raster - physikalisches Abtasten

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/raster_pysikalisches-abtasten.png" width="30%">

- __Rechtwinkliges Werkstück mit zwei geradlinigen Kanten__
- Die Gravierspitze umgedreht in die Spindel einspannen
- Spindel herunterfahren, die Kanten wie unten dargestellt anfahren und mit <span style="color:green">grüner Taste</span> bestätigen
- Beim Anfahren der Werkstückkante keinen zu großen Druck ausüben

|||

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/RUB-Makerspace_Origin3_CC-BY-SA-40.jpg" width="40%">
<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/RUB-Makerspace_Origin4_CC-BY-SA-40.jpg" width="40%">

|||

### Raster - visuelles Abtasten

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/raster_visuelles-abtasten.png" width="30%">

Keine Kanten zum Abtasten dafür aber Markierungen auf Material

|||

### Raster - hybrides Abtasten

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/raster_hybrides-abtasten.png" width="30%">

Eine Kante zum Abtasten und Markierung auf Material

---

## Fräsen

|||

- 3mm Spiralnutfräser - max Tiefe 10mm
- 6mm Spiralnutfräser - max Tiefe 21mm
- 60° V-Nutfräser - Gravierspitze
- Alle Fräser besitzen eine 8mm Aufnahme

__Es dürfen ausschließlich die beiliegenden (oben genannten) Fräser mit der Origin verwenden werden!__

__Sollten andere Fräser benötigt werden ist dies mit dem Personal des Makerspace zu klären.__ 

|||

- Frästiefe
    - Abhängig von Fräser – max 43mm
    - Gravur: 0,5mm
- Fräsart
    - Innenkontur
    - Außenkontur
    - Zentriert
    - Tasche
- Versatz
    - Schruppen und Schlichten
    - Gleichlauffräsen
- Fräserdurchmesser
- Z Touch
- Vorschub
    - Eintauchen
    - Auto – Vorschub

|||

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/fraesen.png" class="r-stretch">

|||

### Spindeldrehzahl

- 10.000 U/min - 26.000 U/min
- Faktoren
    - Material
    - Fräser - Geometrie und Durchmesser
    - Vorschubgeschwindigkeit

__Maschine schlägt aus?__ Drehzahl zu niedrig
__Verbrennungsgeruch/-spuren?__ Drehzahl zu hoch

Nur Fräser verwenden, die für den jeweiligen Werkstoff geeignet sind und für genannten Drehzahlbereich ausgelegt sind.

|||

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/materialtabelle.png" class="r-stretch"/>

|||

### Gegenlauffräsen

- Dichteänderung im Material (zum Beispiel Astlöcher, Faseränderung usw.) machen sich als Wiederstand bemerkbar.
- Eignet sich für fast alle Fräsvorgänge.
- Die Origin berechnet die Kontouren so, dass möglichst immer im Gegenlauf gefräst wird.

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/gegenlauffraesen.png" class="r-stretch"/>

|||

### Gleichlauffräsen - Nur nach Absprache!

- Dichteänderungen im Material führen dazu, dass der Fräser anders greift was sich wiederum in Form von ruckartigen Bewegungen der Maschine bemerkbar macht.
- Kann in einigen Situationen erforderlich sein um ein Ausreißen von Kanten zu vermeiden oder die Oberflächenqualität zu verbessern. Mit Versatz arbeiten!

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-origin/gleichlauffraesen.png"/>

---

## Reinigung und Transport

|||

### Reinigung

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/RUB-Makerspace_Origin8_CC-BY-SA-40.jpg" width="30%">

- Display und Kamera mit Mikrofasertuch sauber halten.
- Spänewanne auf der Rückseite nach jedem Einsatz entleeren!
- Mechaniken sauber halten! Pinsel und/oder Absaugung verwenden!
- Grundplatte und Drucksensor sauber halten!
- Fräser regelmäßig auf Verschleiß (Verfärbungen oder Kerben) prüfen!

|||

### Transport

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/RUB-Makerspace_Origin9_CC-BY-SA-40.jpg" width="30%">

- Fräser aus der Werkzeugaufnahme entfernen und Werkzeugaufnahme in der Spindel belassen.
- Spindel wieder einsetzen und die Transportsicherungen anbringen.
- Die Spindel muss dazu von Hand vorsichtig nach unten in die Transportsicherung gedrückt werden. Anschließend ist der Schaft-Clip wie gezeigt anzubringen.
- Origin ist nun Transportfertig und kann im Koffer verstaut werden.

---

## Arbeitssicherheit

|||

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/sicherheitszeichen/M004.svg" width="150">
<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/sicherheitszeichen/M003.svg" width="150">

- __Schutzbrille__ tragen.
- __Gehörschutz__ tragen.
- Schmuck ist bei der Arbeit mit der Maschine abzulegen.
- Lange Haare zusammenbinden und/oder Haarnetz tragen.
- Keine lockere Kleidung tragen und ggf. Ärmel hochkrempeln.
- Vor dem Fräsen ist der magnetische Fingerschutz anzubringen.
- Es ist eine Staubabsaugung zu verwenden.
- Der Netzstecker vom Shaper darf nicht in die Automatiksteckdose des Staubsaugers gesteckt werden.

|||

- Die Maschine ist ausschließlich beidhändig zu bedienen.
- Nicht zu weit über die Arbeitsfläche lehnen und stets einen festen Stand sowie Gleichgewicht bewahren.
- Die Maschine darf nur auf horizontalen Flächen benutzt werden.
- Der Arbeitsbereich ist sauber und ordentlich zu halten.
- Unmittelbar vor dem Fräsen muss die Arbeitsfläche kontrolliert werden und frei sein.
- Die Maschine nicht in Situationen verwenden in denen das Gerät mit dem eigenen Netzkabel kollidierren könnte.
- Die Frästiefe darf nicht manuell eingestellt werden. 
- Werkstück bei Bearbeitung immer fixieren.
- Stelle vor jedem Einschalten sicher, dass sich keine Werkzeuge (Spannschlüssel o.ä.) in der Maschine befinden.

|||

- Vor dem Werkzeugwechsel ist die Spindel vom Stromnetz zu nehmen. Dazu das Stromkabel der Spindel von der Maschine abziehen.
- Um ein unbeabsichtigtes Starten der Spindel zu vermeiden ist vor dem Anschluss an eine Stromquelle zu prüfen ob der der Spindelschalter in der Position __OFF__ steht.
- Nach Einbau der Spindel die Befestigungsschraube festziehen und vergewissern, dass der Spindelschalter aus ist (Position __OFF__) bevor der Spindelstecker wieder angeschlossen wird. 
- Um die Stromzufuhr komplett vom Gerät zu trennen, muss der Netzstecker gezogen werden. Nicht nur der Spindelstecker!

|||

- Origin ausschließlich mit der SM1 Frässpindel betreiben.
- Spindelaufnahme darf nicht gewaltsam bewegt werden.
- Es dürfen nur Shaper Spannzangen verwendet werden. Der Schaftdurchmesser des Fräsers muss zur Spannzange passen.
- Wenn die Spindel aufgrund von Überlast blockiert ist, muss der Spindelschalter ausgeschaltet werden (Position __OFF__), die Blockade gelöst und erst dann wieder eingeschaltet werden.

---

## Fragen? Danke! :-) 

- [makerspace@rub.de](mailto:makerspace@rub.de)  
- [instagram.com/rubmakerspace](https://instagram.com/rubmakerspace)
- [twitter.com/rubmakerspace](https://twitter.com/rubmakerspace)
- [makerspace.rub.de](https://makerspace.rub.de)

