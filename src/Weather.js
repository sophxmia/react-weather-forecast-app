import React, { useState } from "react";
import FormatedDate from "./FormatedDate";
import axious from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      time: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <h1 className="text-end mb-4">Weather App</h1>
        <form>
          <div className="row">
            <div className="col-sm-7">
              <input
                type="search"
                placeholder="Enter your city..."
                className="form-control mb-3"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-2 mb-4">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="row">
          <h2>
            {weather.city}, {weather.country}
          </h2>
          <FormatedDate date={weather.time} />
          <div className="col-sm-8">
            <div className="d-flex temperature">
              <img
                src={weather.iconUrl}
                alt={weather.icon}
                className="img-fluid"
              />
              <div>
                <strong>{Math.round(weather.temperature)}</strong>
                <span className="units"> °C | °F</span>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="description">
              <ul>
                <li>
                  Feels like: <strong>{Math.round(weather.feelsLike)}°</strong>
                </li>
                <li>
                  Description: <strong>{weather.description}</strong>
                </li>
                <li>
                  Humidity: <strong>{weather.humidity}%</strong>
                </li>
                <li>
                  Wind: <strong>{Math.round(weather.wind)} km/h</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0fdf1tcb941583e4e4o91cb9b04cef1a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axious.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
