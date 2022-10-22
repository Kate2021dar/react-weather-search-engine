import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="meteo">🌧️ MeteoWeather 🌤️</h1>
        <Weather defaultCity="Kharkiv" />
        <footer>
          <a
            href="https://github.com/Kate2021dar/react-weather-search-engine.git"
            target="_blank"
          >
            {" "}
            Open-source code,
          </a>{" "}
          by Kate Rybina
        </footer>
      </div>
    </div>
  );
}
