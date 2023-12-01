import React from "react";

export default function FormatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours <= 9) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes <= 9) {
    minutes = `0${minutes}`;
  }
  let month = props.date.getMonth() + 1;
  if (month <= 9) {
    month = `0${month}`;
  }
  let date = props.date.getDate();
  if (date <= 9) {
    date = `0${date}`;
  }
  let year = props.date.getFullYear();
  return (
    <div>
      <ul>
        <li>
          Local time:{" "}
          <strong>
            {hours}:{minutes}
          </strong>
        </li>
        <li>
          {weekDay} {month}/{date}/{year}
        </li>
      </ul>
    </div>
  );
}
