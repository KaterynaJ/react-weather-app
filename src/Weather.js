import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({});
const [loaded, setLoaded] = useState(false);

function handleResponse(response) {
  setWeatherData({
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    date: "Thursday 12:00AM",
    city: response.data.name
  });
  console.log(response.data)


  setLoaded(true);
}


if (loaded) {

  return <div className="weather">
  <form>
    <div className="row">
    <div className="col-8"> 
    <input type="search" placeholder="Enter a city..." className="searchField" autoFocus="on"/>
    </div>
    <div className="col-4">
    <input type="submit" value="Search" className="btn btn-primary w-100"/>
    </div>
    </div>
    </form>
  <h1>{props.defaultCity}, Ukraine</h1>

<ul>
    <li>{weatherData.date}</li>
    <li className="text-capitalize">{weatherData.description}</li>
</ul>
<div className="row">
  <div className="col-6">
<img src={weatherData.icon} alt={weatherData.description} className="weather-emoji"/>
<div className="temperature-block">
    <span className="temperature-degree">{Math.round(weatherData.temperature)}</span>
    <span className="temperature-unit">°C|°F</span>
    </div>
    </div>
  <div className="col-6">
    <ul>
      <li>Humidity: {weatherData.humidity}%</li>
      <li>Wind {Math.round(weatherData.wind)}km/h</li>
  </ul>
  </div>
</div>
</div>
} else {

const apiKey = "ed8ae435e1581343295b91b83d4ecef4";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;


axios.get(apiUrl).then(handleResponse);

return "Loading..."

}
}