import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Forecast.css"
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);

    useEffect(() => {
setLoaded(false)
    }, [props.longitude]);

    function getForecastData(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
      
return (
        <div className="Forecast">
            <div className="row">

    {forecastData.map(function(dailyForecast, index) {
        return    (
                    <div className="col" key={index}>
            <ForecastDay data={dailyForecast}/>
                    </div>
        )
                })}

             
     
            </div>
        </div>
);
       

    } else {

        let apiKey = "57cdf82e2de3o0146tca4739b468cac4";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.longitude}&lat=${props.latitude}&key=${apiKey}`


        axios.get(apiUrl).then(getForecastData);
        console.log(apiUrl)
   

        return null;

    }
}

