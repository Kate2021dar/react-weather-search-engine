import React from "react";

export default function FormattedMonth(props) {
  let date = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let day = date.getDate();

  return `${month} ${day}`;
}
