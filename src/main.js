import React from 'react'
import ReactDOM from 'react-dom'
import Lib from './getJSON'
import Weather from './weatherComponent'


function success (json) {
  var weatherData = JSON.parse(json)
  render(weatherData.weather[0].id)
}

var site = 'http://api.openweathermap.org/data/2.5/weather?'
var id = '&APPID=c40e96f8fee7a7c8ba301e8a9e9f0347'
var geoLocation

Lib.ajax.getJSON({url: 'http://freegeoip.net/json/'}, function(jsonString) {
  var locationInfo = JSON.parse(jsonString)
  geoLocation = 'lat=' + locationInfo.latitude + '&lon=' + locationInfo.longitude
  Lib.ajax.getJSON({url: site + geoLocation + id}, success)
})

function render(weatherCode) {
  ReactDOM.render(
    <Weather weatherCode={weatherCode}/>,
    document.getElementById('root')
  )
}
