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
          <div className="col-sm-2 mb-4">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <h2>Kyiv, Ukraine</h2>
        <div>
          <ul>
            <li>Local time: 18:01</li>
            <li>Monday 11/13/2023</li>
          </ul>
        </div>
        <div className="col-sm-8">
          <div className="d-flex temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Clear"
              className="img-fluid"
            />
            <div>
              <strong>6</strong>
              <span className="units"> °C | °F</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="description">
            <ul>
              <li>Description: Clear</li>
              <li>Humidity: 5%</li>
              <li>Wind: 2 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
