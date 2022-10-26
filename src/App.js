import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="meteo">🌧️ MeteoWeather 🌤️</h1>
        <Weather defaultCity="Kharkiv" />
        <footer>
          <a
            href="https://github.com/Kate2021dar/react-weather-search-engine.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code on GitHub
          </a>{" "}
          and
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          > hosted on Netlify
            {" "}
          </a>
            by Kate Rybina
        </footer>
      </div>
    </div>
  );
}
