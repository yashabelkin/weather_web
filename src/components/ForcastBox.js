import React from 'react'
import '../styles/forcastbox.css'



const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const ForcastBox = ({data}) => {

  const dayInAWeek = new Date().getDay();

    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  

  return (
   
   <div className='week-forcast'>  
   {console.log(data)}
      {data.list.splice(0, 7).map((item, i) => (
        <div key={i} className='box'>
          <div className='icon'>
            <img alt='weather' className='icon' src={`icons/${item.weather[0].icon}.png`} />
          </div>
        <p className='day'>{forecastDays[i]}</p>
        <p className='temp'>
          {Math.round(item.main.temp_min)}°C 

          </p>
           </div>
      ))}
    </div>
  )
}

export default ForcastBox