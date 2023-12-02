import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let weekDay = days[day];
    return weekDay;
  }

  return (
    <div>
      <div className="ForecastInfo-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.icon}
        className="ForecastInfo-img"
      />
      <div className="ForecastInfo-temperatures">
        <span className="ForecastInfo-temperature-max">{maxTemperature()}</span>
        <span className="ForecastInfo-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
