import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axious from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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

  function search() {
    const apiKey = "0fdf1tcb941583e4e4o91cb9b04cef1a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axious.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <h1 className="text-end mb-4">Weather App</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-7">
              <input
                type="search"
                placeholder="Enter your city..."
                className="form-control mb-3"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-2 mb-4">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo infoData={weather} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
