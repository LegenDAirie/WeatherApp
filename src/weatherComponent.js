import React from 'react'
import Sunny  from './weather_icons/sunny'
import Rainy  from './weather_icons/rainy'
import Cloudy  from './weather_icons/cloudy'
import Thunder  from './weather_icons/thunder'
import Snow  from './weather_icons/snow'
import RainAndSun  from './weather_icons/rainAndSun'

const WeatherApp = React.createClass({

  getInitialState() {
    return {tempScale: 'Celsius'}
  },

  switchTempScale () {
    var { tempScale } = this.state
    if (tempScale === 'Celsius') {
      this.setState({tempScale: 'Fahrenheit'})
    } else {
      this.setState({tempScale: 'Celsius'})
    }
  },

  render() {
    const { weatherCode, userLocation, tempKelvin } = this.props
    const Icon = getIcon(weatherCode)
    const temp = this.state.tempScale === 'Celsius' ? convertToCelsius(tempKelvin) : convertToFahrenheit(tempKelvin)
    const style = { color: '#0cf' }
    return (
      <div>
        <h1>{ userLocation }</h1>
        <h1 style={ style } onClick={ this.switchTempScale }> { temp } </h1>
        { Icon }
      </div>
    )
  }
})




export default WeatherApp

function convertToCelsius(tempKelvin) {
  // [°C] = [K] − 273.15
  var tempCelsius = tempKelvin - 273.15
  return Math.floor(tempCelsius) + ' C°'
}

function convertToFahrenheit(tempKelvin) {
  // [°F] = [K] × 9/5 − 459.67
  var tempFahrenheit = tempKelvin * 9/5 - 459.67
  return Math.floor(tempFahrenheit) + ' F°'
}

function getIcon(weatherCode) {
  // https://openweathermap.org/weather-conditions
  if (weatherCode <= 232 ) {
    // thunder
    return <Thunder/>

  } else if (weatherCode <= 321) {
    // rain
    return <Rainy/>

  } else if (weatherCode <= 504) {
    // sun and rain
    return <RainAndSun/>

  } else if (weatherCode <= 531) {
    // rain
    return <Rainy/>

  } else if (weatherCode < 622) {
    // snow
    return <Snow/>

  } else if (weatherCode < 781) {
    // cloud
    return <Cloudy/>

  } else if (weatherCode === 800) {
    //sunny
    return <Sunny/>

  } else if (weatherCode <= 804) {
    //cloudy
    return <Cloudy/>

  } else {
    return <h1>¯\_(ツ)_/¯</h1>
  }
}
