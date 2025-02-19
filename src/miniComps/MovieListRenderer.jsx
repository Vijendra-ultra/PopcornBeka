import React from "react";
import MovieHolder from "../MovieHolder";
export default function MovieListRenderer({ MovieDatas }) {
  return (
    <>
      {MovieDatas.map((MovieData) => (
        <MovieHolder MovieData={MovieData} key={MovieData.imdbID}>
          <span className="movie--name" style={{ fontSize: "1.9rem" }}>
            {MovieData.Title}
          </span>
          <div>
            <p className="director--name">{MovieData.Year}</p>
          </div>
        </MovieHolder>
      ))}
    </>
  );
}
