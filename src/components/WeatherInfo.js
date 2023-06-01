import React from 'react'
import "../styles/weatherInfo.css"


const WeatherInfo = ({data , inf}) => {

    const sunrise = new Date(data.sys.sunrise * 1000)
    const sunset  = new Date(data.sys.sunset * 1000)  
    
    const newar = inf.split(",")
    
    
    

  return (
    
    <>
        <p className='headerInfo'>More Information</p>
        <div className='infoBox'>
           
        <div className='info'>
                
                
                <p className='humidity'>
                <img alt='icon' src='icons/humidity.png' className='icon' /> <br />
                    Humidity <br /> <span className='sec'>{data.main.humidity} %</span> 
                </p>
                

                <p className='humidity'>
                <img alt='icon' src='icons/wind.png' className='icon' /> <br />
                    wind <br /> <span className='sec'>{Math.round(data.wind.speed * 2.23694)} mph</span>
                </p>
                
                
                <p className='humidity'>
                <img alt='icon' src='icons/sunrise.png' className='icon' /> <br />
                Sunrise <br /> <span className='sec'>{sunrise.toLocaleTimeString()}</span>
                </p>

                <p className='humidity'>
                <img alt='icon' src='icons/sunset.png' className='icon' /> <br />
                Sunset <br /> <span className='sec'>{sunset.toLocaleTimeString()}</span>
                </p>

           
        </div >

            

            <div className='info'>
                

                    <p className='humidity'>
                    <img alt='icon' src='icons/population.png' className='icon' /> <br />
                    Population <br /> <span className='sec'>{newar[2]}</span>

                    </p>

                    <p className='humidity'>
                    <img alt='icon' src='icons/region.png' className='icon' /> <br />
                    Region <br /> <span className='thrid'>{newar[1]} </span>
                    </p>

                    <p 
                    className='humidity'>
                        <img alt='icon' src='icons/pressure.png' className='icon' /> <br />
                    Atmospheric pressure <br /> <span className='sec'>{data.main.pressure} </span>
                    </p>

                    <p className='humidity'>
                    <img alt='icon' src='icons/globe.png' className='icon' /> <br />
                    Coordinate <br /> <span className='thrid'>lat: {data.coord.lat}, lon: {data.coord.lon}</span>
                    
                    </p>

               
            </div >
        </div>
        
    </>  
  )
}

export default WeatherInfo