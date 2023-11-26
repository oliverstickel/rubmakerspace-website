# Symbole und Icons

Mkdocs-Material kann beliebige Icons, die als SVG vorliegen, einbinden (neben den [vielen, die standardmäßig mit dabei sind](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/))

---

Beispiele für Standard-Icons und -Emojis:  

``` 
:face_with_monocle: :peace: :fontawesome-solid-peace: :material-hand-peace-variant: :material-peace: 
```  

ergibt: 

:face_with_monocle: :peace: :fontawesome-solid-peace: :material-hand-peace-variant: :material-peace:

---

## Sicherheits-Symbole

Wir haben bereits die [ISO 7010-Symbole](https://de.wikipedia.org/wiki/ISO_7010) eingebunden. Sie können über ihre Nummer und eine CSS-Klasse, die sie etwas größer macht als normale Icons, in folgendem Format aufgerufen werden: 


---


```
:sicherheit- W056:{ .sicherheitszeichen }
```

ergibt:

:sicherheit-W056:{ .sicherheitszeichen }

---

```
:sicherheit-W024:{ .sicherheitszeichen }
:sicherheit-F001:{ .sicherheitszeichen }
:sicherheit-M002:{ .sicherheitszeichen }
:sicherheit-E003:{ .sicherheitszeichen }
```

ergibt:

:sicherheit-W024:{ .sicherheitszeichen }
:sicherheit-F001:{ .sicherheitszeichen }
:sicherheit-M002:{ .sicherheitszeichen }
:sicherheit-E003:{ .sicherheitszeichen } 

---


[Quelle](https://www.bravecroc.de/en/sicherheitszeichen-nach-iso-7010/) - ist Public Domain, d.h. auch ohne Quellenangabe verwendbar. 