import React from 'react'
import ReactDOM from 'react-dom'
import Lib from './getJSON'
import Weather from './weatherComponent'


function success (json) {
  var weatherData = JSON.parse(json)
  var tempKelvin = weatherData.main.temp
  var weatherCode = weatherData.weather[0].id
  var userLocation = weatherData.name
  render({ weatherCode, userLocation, tempKelvin })
}

var site = 'http://api.openweathermap.org/data/2.5/weather?'
var id = '&APPID=c40e96f8fee7a7c8ba301e8a9e9f0347'
var geoLocation

Lib.ajax.getJSON({url: 'http://freegeoip.net/json/'}, function(jsonString) {
  var locationInfo = JSON.parse(jsonString)
  geoLocation = 'lat=' + locationInfo.latitude + '&lon=' + locationInfo.longitude
  Lib.ajax.getJSON({url: site + geoLocation + id}, success)
})

function render({ weatherCode, userLocation, tempKelvin }) {
  ReactDOM.render(
    <Weather
      weatherCode={ weatherCode }
      userLocation={ userLocation }
      tempKelvin={ tempKelvin }
    />,
    document.getElementById('root')
  )
}
