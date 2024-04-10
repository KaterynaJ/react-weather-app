import React, { useState } from "react";
import Weather from "./Weather";

export default function Search() {
  let [city, setCity] = useState("");
  let [inputValue, setinputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCity(inputValue);
  }

  function showCity(event) {
    setinputValue(event.target.value);
  }

  return (
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={showCity} />
        <input type="submit" value="Search" />
      </form>
      <Weather inputCity={city} />
    </div>
  );
}
