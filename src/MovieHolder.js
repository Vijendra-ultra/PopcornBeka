import React from "react";
import "./styles/MovieHolder.css";
export default function MovieHolder({ MovieData, children, func = null }) {
  return (
    <div
      onClick={func}
      style={MovieData.id % 2 === 0 ? { backgroundColor: "#ff8fab" } : {}}
      className="MovieHolder-cont"
    >
      <div className="img--cont">
        <img
          className="movie-poster"
          src={`${MovieData.Poster}`}
          alt="Bahubali poster"
        />
      </div>
      <div style={{ padding: "0.8rem 1.2rem" }}>{children}</div>
    </div>
  );
}
