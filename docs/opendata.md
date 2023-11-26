---
hide:
  - toc
---

# Sensordaten aus dem Makerspace

Wir haben im Makerspace an verschiedenen Stellen (Umwelt-)Sensoren ausgebracht beziehungsweise arbeiten daran. Es handelt sich hauptsächlich um Luftdatensensoren nach [sensor.community](https://sensor.community) (Partikelbelastung, Luftfeuchtigkeit, Temperatur).

!!! important "Zur Datenqualität"
	Es handelt sich hier um automatisiert erfasste, nicht bereinigte Daten auf Basis von Do-It-Yourself-Lösungen, nicht um geprüfte Messwerte! Ein Beispiel: Die angezeigten Temperaturmesswerte sind grundsätzlich etwas höher als die tatsächliche Raumtemperatur, was vermutlich an der Abwärme der verbauten Elektronik liegt.

## Dashboards der Luftdatensensoren

### Designlabor (Ecke Teeküche)

??? info "Temperatur und Luftfeuchtigkeit" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-13861846&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-13861846&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Partikelbelastung" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-13861846&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe> 

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-13861846)


Im Designlabor ist außerdem ein Eigenbau-Multifunktionssensor ausgebracht (Partikelbelastung, CO, Temperatur, Luftfeuchtigkeit, Helligkeit, Geräuschpegel). Messdaten gibt es [hier über die Arduino IoT-Cloud](https://create.arduino.cc/iot/dashboards/507eadcf-834f-43e2-840b-7aa5938c01a0) (leider ist ein Zugriff jedoch nur mit Account und Einladung durch uns möglich).


### Holzwerkstatt

??? info "Temperatur und Luftfeuchtigkeit" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3532227&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3532227&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Partikelbelastung" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3532227&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  	

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3532227)

### Metallbauwerkstatt (Schweißecke)

??? info "Temperatur und Luftfeuchtigkeit" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3502148&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3502148&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Partikelbelastung" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3502148&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  	

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3502148)

### Kunststoffwerkstatt

??? info "Temperatur und Luftfeuchtigkeit" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-651719&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-651719&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Partikelbelastung" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-651719&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-651719)

### Außenbereich Innenhof

??? info "Temperatur und Luftfeuchtigkeit" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-5431914&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-5431914&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Partikelbelastung" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-5431914&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe> 

	[Link zu diesem Dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-5431914)