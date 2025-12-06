import React from "react";
import "./Input.css";

export const Input = React.forwardRef(
  (
    { label, error, helperText, type = "text", className = "", ...props },
    ref
  ) => {
    return (
      <div className="input-wrapper">
        {label && <label className="input-label">{label}</label>}
        <input
          ref={ref}
          type={type}
          className={`input ${error ? "input--error" : ""} ${className}`}
          {...props}
        />
        {helperText && (
          <p className={`input-helper ${error ? "input-helper--error" : ""}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
