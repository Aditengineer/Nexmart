import React from "react";
import "./Rating.css";

export const Rating = ({
  value = 0,
  max = 5,
  size = "md",
  count = null,
  clickable = false,
  onChange,
}) => {
  return (
    <div className="rating">
      {Array.from({ length: max }).map((_, i) => (
        <button
          key={i}
          className={`rating-star rating--${size} ${
            i < value ? "rating-star--filled" : ""
          }`}
          onClick={() => clickable && onChange && onChange(i + 1)}
          disabled={!clickable}
          aria-label={`Rate ${i + 1} out of ${max} stars`}
        >
          ★
        </button>
      ))}
      {count !== null && <span className="rating-count">({count})</span>}
    </div>
  );
};
