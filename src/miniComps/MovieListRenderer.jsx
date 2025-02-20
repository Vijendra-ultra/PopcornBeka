import React, { useContext } from "react";
import MovieHolder from "../MovieHolder";
import { MovieDataContext } from "../App";

export default function MovieListRenderer({ MovieDatastoRender }) {
  const { MovieIdSelector } = useContext(MovieDataContext);
  return (
    <>
      {MovieDatastoRender.map((MovieData) => (
        <MovieHolder
          func={() => MovieIdSelector(MovieData.imdbID)}
          style={{ cursor: "pointer" }}
          MovieData={MovieData}
          key={MovieData.imdbID}
        >
          <span className="movie--name" style={{ fontSize: "1.9rem" }}>
            {MovieData.Title}
          </span>
          <div>
            <p className="director--name">{MovieData.Year}</p>
            <p>{MovieData.rating || ""}</p>
          </div>
        </MovieHolder>
      ))}
    </>
  );
}
