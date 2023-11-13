import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1 className="text-end mb-4">Weather App</h1>
      <form>
        <div className="row">
          <div className="col-sm-7">
            <input
              type="search"
              placeholder="Enter your city:"
              className="form-control mb-3"
            />
          </div>
          <div className="col-sm-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <h2>Kyiv, Ukraine</h2>
        <ul>
          <li>Local time: 18:01</li>
          <li>Monday 11/13/2023</li>
        </ul>
        <div className="col-sm-8">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Clear"
          />
          6°C
        </div>
        <div className="col-sm-4">
          <ul>
            <li>Description: Clear</li>
            <li>Humidity: 5%</li>
            <li>Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
