import React, {useState} from "react";

export default function WeatherConversion(props) {
const [unit, setUnit] = useState("celsius");


function showFahreinheit(event) {
    event.preventDefault();
    setUnit("fahreinheit");
}


function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius") {

    return (
    <div>
        <span className="temperature-degree">
                {Math.round(props.celsius)}
        </span>
        <span className="temperature-unit">
        °C|{" "}<a href="/" onClick={showFahreinheit}>°F</a>
        </span>
    </div>
    )

} else {
    let fahreinheit = (9/5 * props.celsius) + 32;
    return (
    <div>
    <span className="temperature-degree">
  {Math.round(fahreinheit)}
    </span>
    <span className="temperature-unit">
    <a href="/" onClick={showCelsius}>°C{" "}</a>|°F
    </span>
</div>
    )
}
}