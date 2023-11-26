### Sandkasten 1! <!-- .element: style="background-color:rgba(255, 255, 255, .7);" -->
<!-- .slide: data-background-color="lavender" -->

## Ich bin ein Foliensatz! 

- Navigiere mit den blauen Pfeilen rechts unten oder über das Menü links unten
- Tastatur: "Escape" für Folienübersicht, "f" für Fullscreen; "s" für "Speaker Notes", Pfeiltasten zur Navigation, u.v.m. (mehr: "?" für Hilfe)
- Mobilgerät: Navigation per Swipe-Gesten möglich
- Es gibt horizontale und vertikale Folien (erkennst Du an den blauen Pfeilen oder in der Folienübersicht)

Notes:
Hier kann man Speaker-Notes hinterlassen

---

### Folie mit Bild-Hintergrund <!-- .element: style="background-color:rgba(255, 255, 255, .7);" -->
<!-- .slide: data-background-image="https://git.noc.rub.de/makerspace/homepage/-/raw/main/docs/medien/RUB-Makerspace_Veranstaltungen_CC-BY-SA-40.jpg"-->

Note:
Der Befehl nach der Überschrift sorgt für die Schattierung hinter der Schrift

---

### Ein Bild 

![Die Bühne im Makerspace](https://git.noc.rub.de/makerspace/homepage/-/raw/main/docs/medien/RUB-Makerspace_Veranstaltungen_CC-BY-SA-40.jpg)

Note: 
So kann man beliebige Bilder über ihre URL anzeigen lassen

---

### Noch ein Bild

<img data-src="https://git.noc.rub.de/makerspace/homepage/-/raw/main/docs/medien/2022-05-04c.jpg" class="r-stretch"/>

Note:
Dieses Bild wird wird immer so verkleinert, dass es vollständig angezeigt wird. Dafür ist etwas HTML nötig

---

### Eins nach dem anderen: 

- Lorem<!-- .element: class="fragment" -->
- Ipsum<!-- .element: class="fragment" -->
- Ab hier geht es auch vertikal weiter!<!-- .element: class="fragment" -->

<!-- .slide: data-background-color="DarkViolet" -->

|||

#### Eine Unter-Folie (vertikal)

|||

... und noch eine

|||

## Ende der Unterfolien!<!-- .element: class="r-fit-text" -->
<!-- .slide: data-background-color="Orange" -->

---

Eingebettete Website auf der nächsten Folie

---

<!-- .slide: data-background-iframe="https://en.m.wikipedia.org/wiki/Markdown" -->

---

## Folien-Gesamt-Übersicht

"Esc" oder "o" drücken. 

Mit Pfeiltasten navigieren. Nochmal "Esc"/"o" um auf ausgewählte Folie zu springen (NICHT "Enter").

---

## Speaker Notes

"s" drücken

---

## Weitere Funktionen

"f" für Fullscreen. 

"." für Pause und schwarzes Bild.

"?" für Hilfe / Shortcut-Übersicht.

---

## Ein Timer

"t" drücken = start/stop. "+"/"-"" um Zeit zu verändern.

<countdown/>

---

## Ein Timer 5min mit Autostart

<countdown time="300" autostart="yes" />

---

## Live-Untertitel

"u" drücken, Zugriff auf Mikro erlauben, sprechen. Neu laden zum abschalten.

**Funktioniert nicht in Firefox!**

---

## Spotlight / "Laserpointer"

"l" drücken.

---

<script data-quiz>
    quiz = {
            "info": {
                    "name":    "Ein Quiz",
                    "main":    "Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!",
                    "level1":  "Jeopardy Ready",
                    "level2":  "Jeopardy Contender",
                    "level3":  "Jeopardy Amateur",
                    "level4":  "Jeopardy Newb",
                    "level5":  "Stay in school, kid..." // no comma here
            },
            "questions": [
                    { // Question 1 - Multiple Choice, Single True Answer
                            "q": "What number is the letter A in the English alphabet?",
                            "a": [
                                    {"option": "8",      "correct": false},
                                    {"option": "14",     "correct": false},
                                    {"option": "1",      "correct": true},
                                    {"option": "23",     "correct": false} // no comma here
                            ],
                            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
                            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
                    },
                    // more questions here
            ]
    }
</script>

notes: https://gitlab.com/schaepermeier/reveal.js-quiz

---

## Audio

Slides können vertont werden. Dafür müssen die Plugins RevealAudioSlideshow und RevealAudioRecorder (pro Foliensatz) aktiviert werden. Sind sie in diesen Slides. ;) 

**Aufnahme produzieren:**

"r" drücken um aufzuzeichnen (inkl. Folienwechsel). Nochmal "r" zum Beenden der Aufnahme. 

"z" zum Download der Aufnahmen. In den Ordner der Präsentation in einem Unterordner "audio" ablegen.

notes: https://github.com/rajgoel/reveal.js-plugins/tree/master/audio-slideshow

---

## 3D-Modell

<iframe width="640" height="480" style="border:1px solid #eeeeee;" src="https://3dviewer.net/embed.html#model=https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/medien/cube.stl$camera=-19.93529,36.56334,65.18002,16.48490,10.59657,-12.69236,0.00000,1.00000,0.00000,45.00000$cameramode=perspective$envsettings=fishermans_bastion,off$backgroundcolor=255,255,255,255$defaultcolor=200,200,200$edgesettings=off,0,0,0,1"></iframe>

notes: Akzeptiert obj, 3ds, stl, ply, gltf, 3dm, fbx (einfach URL austauschen). Müsste auch im Content der Website (außerhalb von Slides) funktionieren.

---

Mehr Infos: [https://revealjs.com/](https://revealjs.com/)

---

Weitere Beispiel-Foliensätze: 

- [Workshop Luftdatensensor](https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/ws-luftdaten/)
- [Workshop Shaper Origin](https://makerspace.io.noc.ruhr-uni-bochum.de/homepage/ws-origin/)

---

## Fragen? Danke! :-)

- [makerspace@rub.de](mailto:makerspace@rub.de)  
- [instagram.com/rubmakerspace](https://instagram.com/rubmakerspace)
- [twitter.com/rubmakerspace](https://twitter.com/rubmakerspace)
- [makerspace.rub.de](https://makerspace.rub.de)
