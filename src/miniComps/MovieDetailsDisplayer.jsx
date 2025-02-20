import React from "react";
import "../styles/MovieDetailsDisplayer.css";
import "../index.css";
import StarRating from "./StarRating";
export default function MovieDetailsDisplayer({
  selectedMovie,
  selectedIdremover,
  WatchListMovieUpdater,
}) {
  return (
    <div className="movie--displayer" style={{ color: "#000" }}>
      <button onClick={selectedIdremover} className="revert--btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#023047"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>

      <header className="flex al-c j-b">
        <img className="movie--img" src={selectedMovie.Poster} alt="idmf" />

        <div className="flex j-c a-c f-col m-r-md  header--data">
          <div className="f-ml t-c f-bold ">{selectedMovie.Title}</div>
          <div className="f-sm t-c">{selectedMovie.Year}</div>
        </div>
      </header>

      <section className="flex-c ">
        <div className="star--rating-cont">
          <StarRating heightAndwidth={26} maxLength={10} />
          <div className="flex-c mt-sm ">
            <button
              onClick={() => WatchListMovieUpdater(selectedMovie)}
              className="watchlistAdder--btn"
            >
              Add to watchlist
            </button>
          </div>
        </div>
      </section>

      <section>
        <p className="f-xsm line-h">
          <span className="data-movie">Plot:</span>
          {` ${selectedMovie.Plot}`}
        </p>
        <p className="f-xsm line-h">
          <span className="data-movie">Starring:</span>
          {` ${selectedMovie.Actors} etc...`}
        </p>
        <p className="f-sm line-h">
          <span className="data-movie">Directed by</span>
          {` ${selectedMovie.Director}`}
        </p>
      </section>
    </div>
  );
}
