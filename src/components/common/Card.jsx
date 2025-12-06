import React from "react";
import "./Card.css";

export const Card = ({ children, className = "", hoverable = false }) => {
  return (
    <div className={`card ${hoverable ? "card--hoverable" : ""} ${className}`}>
      {children}
    </div>
  );
};
