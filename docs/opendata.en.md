---
hide:
  - toc
---

# Sensor Data from the Makerspace

We have deployed or are working on (environmental) sensors in various places in the Makerspace. These are mainly air data sensors according to [sensor.community](https://sensor.community) (particle load, humidity, temperature).

!!! important "About data quality"
	This is automated, not cleaned data based on do-it-yourself solutions, not verified measured values! An example: The displayed temperature readings are always slightly higher than the actual room temperature, which is probably due to the waste heat of the installed electronics.

## Air Data Sensor Dashboards

### Design Lab (Tea Kitchen)

??? info "Temperature and Humidity" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-13861846&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-13861846&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Particle Pollution" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-13861846&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe> 

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-13861846)


In the design lab there is also a self-made multifunction sensor (particle pollution, CO, temperature, humidity, brightness, noise level). Measurement data is available [here via the Arduino IoT cloud](https://create.arduino.cc/iot/dashboards/507eadcf-834f-43e2-840b-7aa5938c01a0) (unfortunately, access is only possible with an account and invitation from us).


### Wood Workshop

??? info "Temperature and Humidity" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3532227&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3532227&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Particle Pollution" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3532227&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  	

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3532227)

### Metal Workshop (Welding Corner)

??? info "Temperature and Humidity" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3502148&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-3502148&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Particle Pollution" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3502148&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  	

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-3502148)

### Plastics Workshop

??? info "Temperature and Humidity" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-651719&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-651719&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Particle Pollution" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-651719&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-651719)

### Courtyard

??? info "Temperature and Humidity" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/q87EBfWGk/temperature-humidity-pressure?var-chipID=esp8266-5431914&var-type=DHT22&var-query0=sensors&orgId=1&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe>  

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-5431914&var-type=DHT22&var-query0=sensors&orgId=1)

??? info "Particle Pollution" 
	<iframe src="https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-5431914&kiosk=tv" width="100%" height="430px" frameBorder="0"></iframe> 

	[Link to this dashboard](https://api-rrd.madavi.de/grafana/d/GUaL5aZMz/pm-sensors?orgId=1&theme=light&var-chipID=esp8266-5431914)