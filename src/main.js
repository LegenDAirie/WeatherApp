import React from 'react'
import ReactDOM from 'react-dom'
var $ = require('jQuery')

function success (json) {
  render(json.weather[0].id)
}

var site = 'http://api.openweathermap.org/data/2.5/weather?'
var id = '&APPID=c40e96f8fee7a7c8ba301e8a9e9f0347'
var geoLocation

$.getJSON('http://freegeoip.net/json/', function(json) {
geoLocation = 'lat=' + json.latitude + '&lon=' + json.longitude
  $.getJSON(site + geoLocation + id, success)
})

function render(weather) {
  ReactDOM.render(
    // getComponent(weather),
    getComponent(weather),
    document.getElementById('root')
  )
}

  // https://openweathermap.org/weather-conditions
function getComponent(weatherCode) {
  if (weatherCode <= 232 ) {
    // thunder
    return (
      <div className='icon thunder-storm'>
        <div className='cloud'></div>
        <div className='lightning'>
          <div className='bolt'></div>
          <div className='bolt'></div>
        </div>
      </div>
    )

  } else if (weatherCode <= 321) {
    // rain
    return (
      <div className='icon rainy'>
        <div className='cloud'></div>
        <div className='rain'></div>
      </div>
    )

  } else if (weatherCode <= 504) {
    // sun and rain
    return (
      <div className='icon sun-shower'>
        <div className='cloud'></div>
        <div className='sun'>
          <div className='rays'></div>
        </div>
        <div className='rain'></div>
      </div>
    )

  } else if (weatherCode <= 531) {
    // rain
    return (
      <div className='icon rainy'>
        <div className='cloud'></div>
        <div className='rain'></div>
      </div>
    )

  } else if (weatherCode < 622) {
    // snow
    return (
      <div className='icon flurries'>
        <div className='cloud'></div>
        <div className='snow'>
          <div className='flake'></div>
          <div className='flake'></div>
        </div>
      </div>
    )

  } else if (weatherCode < 781) {
    // cloud
    return (
      <div className='icon cloudy'>
        <div className='cloud'></div>
        <div className='cloud'></div>
      </div>
    )

  } else if (weatherCode === 800) {
    //sunny
    return (
      <div className='icon sunny'>
        <div className='sun'>
          <div className='rays'></div>
        </div>
      </div>
    )

  } else {
    return (
      <h1>¯\_(ツ)_/¯</h1>
    )
  }
}
