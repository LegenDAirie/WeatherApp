import React from 'react'

  // https://openweathermap.org/weather-conditions
function WeatherApp(props) {
  const { weatherCode } = props

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


export default WeatherApp
