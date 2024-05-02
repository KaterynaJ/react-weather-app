import React from "react";
import axios from "axios";
import "./Forecast.css"
import WeatherIcon from "./WeatherIcon"

export default function Forecast(props) {

    function getForecastData(response) {
  
    }
    


    let apiKey = "57cdf82e2de3o0146tca4739b468cac4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=50&lat=30&key=${apiKey}`


    axios.get(apiUrl).then(getForecastData);

    return (
        <div className="Forecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Thur</div> 

                    <div className="forecast-icon">
                        <WeatherIcon 
                            code={props.data.icon} 
                            width={30} 
                            height={30}/>
                    </div>

                    <div className="forecast-temperatures">
                        <span className="forecast-temp-max">
                            19°
                            </span>
                        <span className="forecast-temp-min">
                            10°
                            </span>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
