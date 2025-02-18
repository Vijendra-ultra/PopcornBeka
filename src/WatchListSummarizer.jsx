import React, { useContext } from "react";
import "./styles/WatchListSummarizer.css";
import "./index.css";
import { WatchListContext } from "./Watchlist";

export default function WatchListSummarizer() {
  const WatchedMovies = useContext(WatchListContext);

  return (
    <div className="WatchListSummarize--cont br-c ">
      <h1>You have watched {WatchedMovies.length} movies</h1>
      <div className="flexCont-simple mtb-sm ">
        <span className="f-xsm">
          ⭐
          {Math.round(
            WatchedMovies.reduce((sum, movie) => sum + movie.vote_average, 0) /
              3
          )}
        </span>
        <span className="data f-xsm">Languages</span>
      </div>
    </div>
  );
}
