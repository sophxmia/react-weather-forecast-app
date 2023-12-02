import React from "react";
import "./ForecastInfo.css";

export default function ForecastInfo() {
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
