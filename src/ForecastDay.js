import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>

      <div className="forecast-icon">
        <WeatherIcon code={props.data.condition.icon} width={30} height={30} />
      </div>

      <div className="forecast-temperatures">
        <span className="forecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="forecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
