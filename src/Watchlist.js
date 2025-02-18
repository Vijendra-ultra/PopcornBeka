import React, { useState, createContext } from "react";
import "./styles/MainComp.css";
import MovieDatas from "./data/Moviedata";
import MovieHolder from "./MovieHolder";
import WatchListSummarizer from "./WatchListSummarizer";

export const WatchListContext = createContext();

export default function Watchlist() {
  const watchedList = MovieDatas.filter(
    (MovieData) => MovieData.watched === true
  );
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="container">
      <WatchListContext.Provider value={watchedList}>
        <WatchListSummarizer />

        <div className="BtnContainer">
          <button
            style={isOpen ? { fontSize: "2.5rem" } : {}}
            className="close--btn"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {!isOpen ? "+" : "-"}
          </button>
        </div>
        {isOpen &&
          watchedList.map((MovieData) => (
            <MovieHolder MovieData={MovieData} key={MovieData.imdbID}>
              <span className="movie--name" style={{ fontSize: "1.9rem" }}>
                {MovieData.Title}
              </span>
              <div className="flexCont-simp">
                <p className="director--name lang">{MovieData.Year}</p>
                <p className="director--name ml-sm">
                  ⭐{MovieData.vote_average}
                </p>
              </div>
            </MovieHolder>
          ))}
      </WatchListContext.Provider>
    </div>
  );
}
