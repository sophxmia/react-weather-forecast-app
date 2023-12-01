import React from "react";
import axious from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "0fdf1tcb941583e4e4o91cb9b04cef1a";
  let city = "Kyiv";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units={metric}`;
  axious.get(apiUrl).then(handleResponse);
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
        <h2>Kyiv, Ukraine</h2>
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
              <li>
                Description: <strong>Clear</strong>
              </li>
              <li>
                Humidity: <strong>5%</strong>
              </li>
              <li>
                Wind: <strong>2 km/h</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
