import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Search from "./Search"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <h1>Weather App</h1>
        <Search />
        <a href="https://github.com/KaterynaJ/shecodes-react-app.git" target="_blank" rel="noreferrer">Open-source</a>
  </React.StrictMode>
);


reportWebVitals();
