# FDM-Druck

### Workshop und Sicherheitsunterweisung

![](https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/rub-makerspace-logo.svg)

---

## Umgang mit den Folien

- Navigiere mit den blauen Pfeilen rechts unten oder über das Menü links unten
- Tastatur: "Escape" für Folienübersicht, "f" für Fullscreen; "s" für "Speaker Notes", Pfeiltasten zur Navigation, u.v.m. (mehr: "?" für Hilfe)
- Mobilgerät: Navigation per Swipe-Gesten möglich
- Es gibt horizontale und vertikale Folien (erkennst Du an den blauen Pfeilen oder in der Folienübersicht)

---

## Überblick

- Allgemeine Infos rund ums Thema FDM-Druck
- FDM-Drucker im RUB-Makerspace
- Sicherheitshinweise für den FDM-Druck
- Theorie: Anlegen einer Druckdatei
- Praxis: Druckdatei anlegen und den Druck starten

---

## Grundlagen 

|||

### FDM - Fused Deposition Modeling

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/prozesskette-fdm.png" class="r-stretch"/>

|||

### FDM - Fused Deposition Modeling

- Auch bekannt als Fused Filament Fabrication (FFF) oder Fused Layer Modeling(FLM)
- Häufigstes Verfahren im Bereich der Privatanwender*innen
- Filamentstrang wird in einer Düse aufgeschmolzen und in Schichten übereinandergelegt
- Vergleichsweise kostengünstiges Verfahren
- Materialien: Kunststoffe, Clay, Lebensmittel, Stammzellen…
- Benötigt wird eine CAD-Datei, bzw. ein NC-Code (Slicer)
- Geeignet eher für Kleinserien, da energie- und zeitintensiv!

<img align="right" data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/fdm.png" width="15%">

|||

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/beispiele.jpg" class="r-stretch"/>

|||

### Ein Vergleich

Eigenschaften | Herkömmlicher Büro-Drucker | Magischer 3D-Drucker
-------- | -------- | -------- 
Preis | 100 - 10.000 € | 250 - 1.000.000 €
Datei-Input | Texte, Tabellen, Fotos... | CAD-Dateien
Datei-Format | .pptx, .pdf, .jpg usw. | .stl, .obj, .3mf ggf. weitere
Voreinstellungen | Papierformat, Papierstärke, Anzahl... | Schichtdicke, Material, Stützen, Düsendurchmesser, Temperaturen...
Erfolgsquote | ungewiss | ungewiss

|||

### Aufbau einer Druckdatei

- Selbstkonstruiert oder per Datenbank (Thingiverse o.Ä.)
- Bei Selbstkonstruktion: CAD-Programm notwendig (bspw. Inventor, FreeCAD, TinkerCAD, Fusion360, Rhino, SolidWorks…)
- CAD-Modelle meistens entweder flächen- oder volumenbasiert, je nach individuellem Anwendungsfall (Export in Volumen nötig!)
- Dateiformat für die Slicer: am besten .stl oder .obj
- Auf Schichtverlauf und Stützmaterial achten!
- Bei Anlegen der Datei auf Größe, Einheit und Slicer für das jeweilige Endgerät achten!

|||

### Tutorials zum Erstellen von CAD-Dateien

[FreeCAD](https://www.youtube.com/watch?v=rTvgCcOXfuw)

[Autodesk Fusion360](https://help.autodesk.com/view/fusion360/ENU/courses/)

[Rhino CAD](https://www.youtube.com/watch?v=5jguvBRZsFk)

|||

### Filamente

Filamente | Eigenschaften
-------- |  --------
PLA | einfach zu drucken
PETG | chemische Beständigkeit gegen Öle, Alkohole, Säuren und Laugen
ABS | temperaturbeständig bis ~85°C
TPU |  gummiartig, flexibel

Sowohl die Filamente als auch die Eigenschaften stellen nur eine Auswahl dar.

|||

### Slicer

- Slicer von engl: in Scheiben schneiden
- Zu wählen je nach Drucker-Hersteller
- Im Slicer richtigen Drucker auswählen
- Gewünschtes Material inkl. Parameter (Temperaturen) einstellen
- Schichtdicke und Nozzle-Durchmesser nach Wunsch festlegen
- Supportstrukturen und Infill festlegen
- Optional: Weitere Parameter nutzen
- Modell slicen und kontrollieren
- Auf USB-Stick bzw. SD-Karte unter aussagekräftigem Namen speichern

|||

### FDM-Drucker

- Zugehöriges Handbuch und Gefährdungsbeurteilung beachten!
- Geräte auf Schäden überprüfen, dann FDM-Drucker einschalten und Initialisierung abwarten
- Mit dem Scrollrad steuern und zunächst altes Material entladen und dann das gewünschte Filament platzieren
- Datenträger in den Drucker stecken und Druckauftrag wählen
- Druck starten und zunächst einige Minuten beobachten. Danach regelmäßig Sichtkontrolle durchführen
- Bei Unsicherheiten Hilfe durch Handbuch oder Personal holen!

---

## FDM-Drucker im RUB-Makerspace

|||

### Ultimaker

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/ultimaker.jpg" width="30%"/>

- Bauräume bis 33x24x30cm
- Filament: 2,85mm dick
- Nozzles von 0,25mm – 0,8mm
- Vorteile: Einfach und übersichtlich, zwei Extruder, z.T. Kamera- und Wifi-Überwachung möglich
- Nachteile: Teuer, wartungsintensiv

|||

### Raise 3D

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/raise3d.jpg" width="30%"/>

- Bauraum bis 30×30×60 cm 
- Filament: 1,75mm dick
- Nozzles von 0,25mm – 1mm
- Vorteile: Großer Bauraum, Dual-Extruder, Große Hitze (bis 300°C an der Nozzle; 110°C am Printbett)
- Nachteile: Schlecht verarbeitet

|||

### Zortrax

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/zortrax.jpg" width="30%"/>

- Bauräume bis 20x20x18cm
- Filament: 1,75mm dick
- Nozzles von 0,3mm – 0,6mm
- Vorteile: Sehr gut haftendes, magnetisches Druckbett
- Nachteile: z.T. Cloud-abhängig

|||

### Prusa

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/prusa.jpg" width="30%"/>

- Bauräume bis 25x20x20cm
- Filament: 1,75mm dick
- Vorteile: Open-Source Entwicklung! Sehr gute quelloffene Dokumentation, breite Community! Günstig und zuverlässig
- Nachteile: Keine ;-)

|||

### Thinkbot

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/slides/unterweisung-fdm/thinkbot.jpg" width="30%"/>

- Von Firma ThinkIng aus Bochum
- Bauraum 100x100x100 cm
- Filament: 1,75 mm dick
- Nozzles von 0,8mm – 2mm
- Vorteile: Großer, vollständig beheizter Bauraum, WiFi- und Kamera-Überwachung, z.T. Open-Source
- Nachteile: bisher n.n. in Betrieb

---

## Arbeitssicherheit

|||

### Allgemein

- Nutzung der FDM-Drucker nur mit gültiger Schulung!
- Vor der Benutzung auf Schäden prüfen und die jeweilige Betriebsanleitungen und Betriebsanweisung lesen. (Diese sind in unmittelbarer Nähe des Geräts zu finden).
- Reparaturen und/oder Wartungsarbeiten werden nur vom RUB-Makerspace-Personal durchgeführt!
- Mitgebrachtes Material darf nur mit zugehörigem Sicherheitsdatenblatt und nach Absprache mit dem RUB-Makerspace-Personal genutzt werden!
- <span style="color:red"> Achten auf Abluft, Strom, Hitze und Klemmgefahr! </span>
- <span style="color:red"> FDM-Drucke über Nacht vermeiden! Druckvorgang regelmäßig überprüfen! </span>
- Arbeitsplatz sauber vorfinden und auch sauber zurücklassen!
- Nur das drucken, was sich auch zu drucken lohnt!

|||

### Im Notfall

<img data-src="https://git.noc.rub.de/makerspace/website/-/raw/main/docs/medien/sicherheitszeichen/E003.svg" width="15%"/>

- Verletzte*n retten und Erste Hilfe leisten (z. B. Schockbekämpfung, Blutungen stillen, verletzte Gliedmaßen ruhigstellen).
- Bei Stromunfall unter Selbstschutz die Anlage abschalten. Bei Atem- bzw. Herzstillstand Wiederbelebung einleiten.
- Ersthelfer*in benachrichtigen und Unfallstelle sichern.
- Unfall unverzüglich dem RUB-Makerspace-Personal melden.
- Durchgangsärzt*innen aufsuchen und ggf. Sicherheitsdatenblatt zeigen. 
- Achten Sie darauf, dass über jede Erste Hilfe-Leistung Aufzeichnungen, zum Beispiel in einem Verbandbuch, gemacht werden. Unterlagen im Erste-Hilfe-Raum nutzen!

---

## Anhang

|||

### Übung

- Sucht euch bei https://www.thingiverse.com ein 3D-druckbares CAD-Modell aus und ladet es herunter.
- Importiert das Modell (.stl/.obj) in den jeweiligen Slicer (drag&drop)
- Nehmt nun die gewünschten Einstellungen im Slicer vor und speichert eure Datei mit aussagekräftigem Namen auf dem jeweiligen Datenträger
- Prüft den FDM-Drucker auf Schäden. Schaltet ihn ein und ladet das Material
- Wählt am Drucker eure Datei vom Datenträger aus und startet den Auftrag
- Füllt den Unterweisungsschein aus und lasst ihn unterschreiben!
- Druckt ab jetzt voller Begeisterung eure eigenen Modelle!

|||

### Wichtige Hinweise

- Sicherheitsdokumente beachten!!! (Betriebsanweisung, Sicherheitsunterweisung, Gefahrenhinweise, Sicherheitsdatenblätter, diese Schulungsunterlagen, Anleitung)
- Bei Schäden, Wartungsbedarf oder Unsicherheiten immer an das Makerspace-Personal wenden!
- FDM-Drucker niemals ohne gültige Schulung benutzen!
- Informieren bzgl. der verwendbaren Materialien! (ggf. Sicherheitsdatenblatt)
- Arbeitsplatz sauber vorfinden und auch sauber zurücklassen!
- Nur das drucken, was sich auch zu drucken lohnt!

---

## Fragen? Danke! :-) 

- [makerspace@rub.de](mailto:makerspace@rub.de)  
- [instagram.com/rubmakerspace](https://instagram.com/rubmakerspace)
- [twitter.com/rubmakerspace](https://twitter.com/rubmakerspace)
- [makerspace.rub.de](https://makerspace.rub.de)

