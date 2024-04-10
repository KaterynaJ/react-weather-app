import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  if (props.inputCity) {
    let apiKey = "b35a24906132bc37689e11790af3c759";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.inputCity}&appid=${apiKey}&units=metric`;

    axios.get(url).then(getWeather);
  }
  function getWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
  }
  return (
    <div>
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
      </ul>
    </div>
  );
}
