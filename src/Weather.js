import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherLowerInfo from "./WeatherLowerInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [cityInput, setCityInput] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      longitude: response.data.coordinates.longitude,
      latitude: response.data.coordinates.latitude,
    });

    setLoaded(true);
  }

  function search() {
    const apiKey = process.env.REACT_APP_API_KEY_CURRENT;
    const apiUrlBase = process.env.REACT_APP_API_URL_CURRENT;
 
  
    let units = "metric";
    let apiUrl = `${apiUrlBase}${cityInput}&key=${apiKey}&units=${units}`;

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
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="searchField"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <WeatherLowerInfo data={weatherData} />
        <Forecast
          data={weatherData}
          latitude={weatherData.latitude}
          longitude={weatherData.longitude}
        />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
