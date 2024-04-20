import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherLowerInfo from "./WeatherLowerInfo";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({});
const [loaded, setLoaded] = useState(false);
const [cityInput, setCityInput] = useState(props.defaultCity);

function handleResponse(response) {
  setWeatherData({
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    date: new Date (response.data.dt * 1000),
    city: response.data.name
  });
console.log(response.data)


  setLoaded(true);
}


function search() {
const apiKey = "ed8ae435e1581343295b91b83d4ecef4";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;


axios.get(apiUrl).then(handleResponse);
}


function handleSubmit(event) {
  event.preventDefault();
  search(cityInput);
    }


    function handleCityChange(event) {
      setCityInput(event.target.value);

    }

if (loaded) {

  return <div className="weather">
  <form onSubmit={handleSubmit}>
    <div className="row">
    <div className="col-8"> 
    <input 
    type="search" 
    placeholder="Enter a city..." 
    className="searchField" 
    autoFocus="on"
    onChange={handleCityChange}/>
    </div>
    <div className="col-4">
    <input type="submit" value="Search" className="btn btn-primary w-100"/>
    </div>
    </div>
  </form>


  
<WeatherLowerInfo data={weatherData}/>


</div>
} else {

search();

return "Loading..."

}
}