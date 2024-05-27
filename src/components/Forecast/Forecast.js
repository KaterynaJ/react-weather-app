import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastDay from "../ForecastDay/ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  const apiURLBase = process.env.REACT_APP_API_URL_FORECAST;

  useEffect(() => {
    setLoaded(false);
  }, [props.longitude]);

  function getForecastData(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = process.env.REACT_APP_API_KEY_FORECAST;
    let apiUrl = `${apiURLBase}${props.longitude}&lat=${props.latitude}&key=${apiKey}`;

    axios.get(apiUrl).then(getForecastData);
    console.log(apiUrl);

    return null;
  }
}
