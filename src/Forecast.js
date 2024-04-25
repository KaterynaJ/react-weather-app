import React from "react";
import "./Forecast.css"
import WeatherIcon from "./WeatherIcon"

export default function Forecast(props) {
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