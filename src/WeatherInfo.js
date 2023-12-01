import React from "react";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h2>
          {props.infoData.city}, {props.infoData.country}
        </h2>
        <FormatedDate date={props.infoData.time} />
        <div className="col-sm-8">
          <div className="d-flex temperature">
            <img
              src={props.infoData.iconUrl}
              alt={props.infoData.icon}
              className="img-fluid"
            />
            <div>
              <strong>{Math.round(props.infoData.temperature)}</strong>
              <span className="units"> °C | °F</span>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="description">
            <ul>
              <li>
                Feels like:{" "}
                <strong>{Math.round(props.infoData.feelsLike)}°</strong>
              </li>
              <li>
                Description: <strong>{props.infoData.description}</strong>
              </li>
              <li>
                Humidity: <strong>{props.infoData.humidity}%</strong>
              </li>
              <li>
                Wind: <strong>{Math.round(props.infoData.wind)} km/h</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
