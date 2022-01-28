import React, {useState,useEffect} from "react";
import axios from "axios";

import Stat from "./Stat";

const Weather = ({city}) =>{
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const[weather, setWeather] = useState({
        main:{temp:0},
        wind:{speed:0,deg:0},
        weather:[{icon:"01d",description:""}]
    });
    const celsius = Math.floor(weather.main.temp) - 273,
          windSpeedMph = (weather.wind.speed * 2.237).toFixed(2),
          windDirection = degToCompass(weather.wind.deg),
          iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
          description = weather.weather[0].description;

    useEffect(getWeather,[]);
        

    function getWeather(){
        axios.get(url).then(res => setWeather(res.data))
    }
    function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
     return (<>
         <h2>Weather in {city}</h2>
         <Stat label={"temperature: "} text={`${celsius} Celsius`}/>
         <div><img src={iconUrl} alt={description}/></div>
         <Stat label={"wind: "} text={`${windSpeedMph} mph direction ${windDirection}`}/>
    </> )
}


export default Weather;