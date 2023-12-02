import React from "react";
import "./ForecastInfo.css";
import axios from "axios";

export default function ForecastInfo(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "0fdf1tcb941583e4e4o91cb9b04cef1a";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="ForecastInfo">
      <div className="row">
        <div className="col">
          <div className="ForecastInfo-day">Sat</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt="few clouds"
            className="ForecastInfo-img"
          />
          <div className="ForecastInfo-temperatures">
            <span className="ForecastInfo-temperature-max">19°</span>
            <span className="ForecastInfo-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
