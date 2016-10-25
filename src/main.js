import React from 'react'
import ReactDOM from 'react-dom'
// var $ = require('jQuery')
// console.log($)










    var Lib = {
        ajax: {
            xhr: function() {
                var instance = new XMLHttpRequest()
                return instance
            },
            // code continues
            getJSON: function(options, callback) {
                            var xhttp = this.xhr()
                            options.url = options.url || location.href
                            options.data = options.data || null
                            callback = callback ||
                            function() {}
                            options.type = options.type || 'json'
                            var url = options.url

                            if (options.type == 'jsonp') { // JSONP
                                window.jsonCallback = callback // Now our callback method is globally visible
                                var urlZ = url.replace('callback=?', 'callback=jsonCallback')
                                var script = document.createElement('script')
                                script.src = urlZ
                                document.body.appendChild(script)
                            }


                            xhttp.open('GET', options.url, true)
                            xhttp.send(options.data)
                            xhttp.onreadystatechange = function() {
                                if (xhttp.status == 200 && xhttp.readyState == 4) {
                                    callback(xhttp.responseText)
                                }
                            }
            }
        }
    }

    window.Lib = Lib














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
