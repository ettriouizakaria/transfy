import React from "react";
import { Link } from "react-router-dom";

export default function ColumnItem(props) {
  let columnItemStyle = {
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    textDecoration: "none",
    margin: "0.5rem",
  };

  return (
    <Link style={columnItemStyle} to={props.link}>
      {props.value}
    </Link>
  );
}
