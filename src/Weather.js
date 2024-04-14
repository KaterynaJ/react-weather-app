import react from "react";
import scc from "./Weather.css";

export default function Weather() {
  return <div className="weather">
    <form>
      <div className="row">
      <div className="col-9">
      <input type="search" placeholder="Enter a city..." className="searchField"/>
      </div>
      <div className="col-3">
      <input type="submit" value="Search" className="btn btn-primary"/>
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
      <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>6°C
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