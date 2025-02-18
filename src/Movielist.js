import React, { useState } from "react";

import MovieHolder from "./MovieHolder";
import "./styles/MovieHolder.css";
import LoadScreener from "./miniComps/LoadScreener";

export default function Movielist({ MovieDatas, isLoading }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="container">
      {isLoading ? (
        <LoadScreener />
      ) : (
        <>
          <div className="BtnContainer">
            <button
              style={isOpen ? { fontSize: "2.5rem" } : {}}
              className="close--btn"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {!isOpen ? "+" : "-"}
            </button>
          </div>

          {isOpen && MovieDatas.length > 1
            ? MovieDatas.map((MovieData) => (
                <MovieHolder MovieData={MovieData} key={MovieData.imdbID}>
                  <span className="movie--name" style={{ fontSize: "1.9rem" }}>
                    {MovieData.Title}
                  </span>
                  <div>
                    <p className="director--name">{MovieData.Year}</p>
                  </div>
                </MovieHolder>
              ))
            : null}
        </>
      )}
    </div>
  );
}
