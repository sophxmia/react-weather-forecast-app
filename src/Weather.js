import React, { useState } from "react";
import axious from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      time: response.data.time,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  if (ready) {
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
          <div>
            <ul>
              <li>
                Local time: <strong>18:01</strong>
              </li>
              <li>Monday 11/13/2023</li>
            </ul>
          </div>
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
    let city = "Kyiv";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axious.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
