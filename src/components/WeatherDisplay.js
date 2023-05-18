import React from 'react'
import "../styles/weather.css"




const WeatherDisplay = ({data, inf}) => {


    const newar = inf.split(",")

    return (
    <div className='weather'>
        <div className='main'>
            
            <p className='city'>{data.name}, {newar[0]}</p>
            <div className='desc'>
            <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>
            <p className='temperature'>{Math.round(data.main.temp)} °C</p>
            </div>
            <p className='weather-description'>{data.weather[0].description}</p>
            <p className='feels-like'>Feels Like {Math.round(data.main.feels_like)} °C</p>

        </div>




    </div>
  )
}

export default WeatherDisplay