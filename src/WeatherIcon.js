import React from "react";

import "./WeatherIcon.css";

import { WeatherSvg } from "weather-icons-animated";


export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "sunny",
        "01n": "clear-night",
        "02d": "partlycloudy",
        "02n": "cloudy",
        "03d": "cloudy",
        "03n": "cloudy",
        "04d": "cloudy",
        "04n": "cloudy",
        "09d": "rainy",
        "09n": "rainy",
        "10d": "pouring",
        "10n": "pouring",
        "11d": "lightning-rainy",
        "11n": "lightning-rainy",
        "13d": "snowy",
        "13n": "snowy",
        "50d": "fog",
        "50n": "fog",
    }

    return (
    <span className="emoji">
        <WeatherSvg state={codeMapping[props.code]} alt={props.alt}/>
    </span>
    )
}
