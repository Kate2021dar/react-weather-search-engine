import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedMonth from "./FormattedMonth";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container-weather">
      <div className="date-wind">
        <h2 className="city">
          <em>{props.data.city}</em>,
          <span className="month-day">
            <FormattedMonth date={props.data.date} />
          </span>
        </h2>
        <h3 className="current-datetime">
          <span>
            <FormattedDate date={props.data.date} />
          </span>
          , <span className="current-description">{props.data.description}</span>
        </h3>
        <h4 className="humidity-wind">
          Humidity: <span>{props.data.humidity}</span>%, Wind:
          <span> {props.data.wind}</span> km/h
        </h4>
      </div>

      <div className="celsius-fahreneit">
        <WeatherIcon code={props.data.icon} />
        <div className="temperature">
          <strong className="id-temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </strong>
        </div>
      </div>
    </div>
  );
   
}

