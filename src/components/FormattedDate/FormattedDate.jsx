import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    " Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  let formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedHours = hours.toString().padStart(2, "0");

  return (
    <div className="italic">
      Last updated: {day} {formattedHours}:{formattedMinutes}
    </div>
  );
}
