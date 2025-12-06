import React from "react";
import "./Button.css";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${
        fullWidth ? "btn--full-width" : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
