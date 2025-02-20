import React from "react";
import "./styles/WatchListSummarizer.css";
import "./index.css";

export default function WatchListSummarizer({ watchListMovies }) {
  let averageRating = Math.abs(
    watchListMovies.reduce(
      (totalRating, watchListMovies) =>
        totalRating + watchListMovies?.imdbRating,
      0
    )
  );
  return (
    <div className="WatchListSummarize--cont br-c ">
      <h1>You have watched {watchListMovies.length} movies</h1>
      <div className="flexCont-simple mtb-sm ">
        <span className="f-xsm">{`⭐${averageRating}`}</span>
        <span className="data f-xsm">Languages</span>
      </div>
    </div>
  );
}
