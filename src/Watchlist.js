import React, { useState, useEffect, createContext } from "react";
import "./styles/MainComp.css";
import WatchListSummarizer from "./WatchListSummarizer";
import CloseAndOpenBtn from "./miniComps/CloseAndOpenBtn";
import MovieDetailsDisplayer from "./miniComps/MovieDetailsDisplayer";
import LoadScreener from "./miniComps/LoadScreener";

import MovieListRenderer from "./miniComps/MovieListRenderer";
const KEY = "47167ec0";

export const StarRatingContext = createContext();

export default function Watchlist({
  selectedId,
  selectedIdremover,
  MovieDatas,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [isloading, setIsloading] = useState(true);
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const [watchListMovies, setWatchListMovies] = useState([]);

  const RatingsUpdater = (index) => {
    setRating(index);
    setWatchListMovies((MovieDatas) =>
      MovieDatas.map((movie) =>
        movie.imdbID === selectedMovie
          ? { ...movie, userRating: rating }
          : movie
      )
    );
    console.log(watchListMovies);
  };

  let WatchedMovies;
  const WatchListMovieUpdater = (newWatchedMovie, ratingByUser = 0) => {
    WatchedMovies = {
      ...newWatchedMovie,
      userRating: ratingByUser,
    };

    setWatchListMovies((watchListMovies) => [
      ...watchListMovies,
      WatchedMovies,
    ]);
    selectedIdremover();
  };

  useEffect(() => {
    if (!selectedId) return;
    async function getMovieDetails() {
      setIsloading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      console.log(data);
      setSelectedMovie(data);
      setIsloading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  return (
    <StarRatingContext.Provider
      value={{
        rating,
        setRating,
        tempRating,
        setTempRating,
        RatingsUpdater,
      }}
    >
      <div className="container container-2">
        {selectedId ? (
          isloading ? (
            <LoadScreener />
          ) : (
            <>
              <MovieDetailsDisplayer
                key={selectedId}
                selectedMovie={selectedMovie}
                selectedIdremover={selectedIdremover}
                WatchListMovieUpdater={WatchListMovieUpdater}
              />
            </>
          )
        ) : (
          <>
            <WatchListSummarizer watchListMovies={watchListMovies} />
            <CloseAndOpenBtn isOpen={isOpen} setIsOpen={setIsOpen} />
            <MovieListRenderer MovieDatastoRender={watchListMovies} />
          </>
        )}
      </div>
    </StarRatingContext.Provider>
  );
}
