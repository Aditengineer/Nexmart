import React from "react";
import "./Spinner.css";

export const Spinner = ({ size = "md", color = "primary" }) => {
  return <div className={`spinner spinner--${size} spinner--${color}`} />;
};
