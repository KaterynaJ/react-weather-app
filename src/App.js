
import './App.css';
import React from "react";
import Weather from "./Weather.js"

export default function App() {
  return (
    <div className="App">

<Weather defaultCity="Sydney"/>
     <footer>
      This project is coded by{" "}<a href="https://www.linkedin.com/in/kateryna-bezpalko-746b0a244/" target='_blanc'>Kate</a>{" "}and is{" "} 
      <a href="https://github.com/KaterynaJ/shecodes-react-app.git" target="_blanc">open-sourced</a></footer>
    </div>
  );
}


