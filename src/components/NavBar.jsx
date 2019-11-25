import React from "react";
import "./components.css";

const DefaultStyle = {};

const NavBar = props => (
  <div>
    <button style={props.style ? props.style : DefaultStyle}>HOME</button>
    <button style={props.style ? props.style : DefaultStyle}>WORKS</button>
    <button style={props.style ? props.style : DefaultStyle}>BIOGRAPHY</button>
    <button style={props.style ? props.style : DefaultStyle}>INTERVIEW</button>
  </div>
);

export default NavBar;
