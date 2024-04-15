import react from "react";
import scc from "./Weather.css";

export default function Weather() {
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
    <h1>Kyiv, Ukraine</h1>

  <ul>
      <li>Thursday 12:00AM</li>
      <li>Mostly Cloudy</li>
  </ul>
  <div className="row">
    <div className="col-6">
  <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"className="weather-emoji"/>
  <div className="temperature-block">
      <span className="temperature-degree">6</span>
      <span className="temperature-unit">°C|°F</span>
      </div>
      </div>
    <div className="col-6">
      <ul>
        <li>Precipitation:</li>
        <li>Humidity:</li>
        <li>Wind:</li>
    </ul>
    </div>
  </div>
  </div>
}