import React, { useEffect, useState } from "react";
import Search from "./Search";
import WeatherDisplay from "./WeatherDisplay";
import { CURRENT_WEATHER_API, WEATHER_API_KEY } from "../api";
import ForcastBox from "./ForcastBox";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

const FirstPage = () => {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [inf, setInf] = useState(null)





  const getFirstData = async () => {
    const data = await axios.get(`${CURRENT_WEATHER_API}/weather?lat=32.0803&lon=34.7805&appid=${WEATHER_API_KEY}&units=metric`)
    .then((response)=> (response.data))
    const foreData = await axios.get(`${CURRENT_WEATHER_API}/forecast?lat=32.0803&lon=34.7805&appid=${WEATHER_API_KEY}&units=metric`)
    

    .then((response)=> (response.data))
    .catch((err)=> console.log(err));
    setCurrentWeather(data)
    setForecast(foreData)
    setInf("Israel, Tel Aviv District, 460613")
    
  };

  useEffect(() => {
    getFirstData();

  }, [])

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")
    const inf = searchData.inf

    const currentWeatherFetch = fetch(`${CURRENT_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${CURRENT_WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherRespone = await response[0].json();
        const forecastRespone = await response[1].json();
        setCurrentWeather({city: searchData.label,  ...weatherRespone});
        setForecast({city: searchData.label, ...forecastRespone});
        setInf(inf)
        
      })
      .catch((err)=> console.log(err))


      
  }
  return (
    <>
    



    
    <div className="container">
      <div className="serachWrap">
    <Search onSearchChange={handleOnSearchChange} />
    </div>
      <div className="weather">
{  currentWeather && <WeatherDisplay data={currentWeather} inf={inf}/>}
{forecast && <ForcastBox data={forecast} />}
    </div>
    {currentWeather && <WeatherInfo data={currentWeather} inf={inf} />}
    </div>
    </>
  );
}

export default FirstPage;
