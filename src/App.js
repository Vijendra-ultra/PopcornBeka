import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Watchlist from "./Watchlist";
import Movielist from "./Movielist";

const KEY = "47167ec0";

export default function App() {
  const [searchMovies, setSearchMovies] = useState("");
  const [query, setQuery] = useState("Inception");
  const [MovieDatas, setMovieDatas] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function movieLoader() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovieDatas(data.Search);
      setIsLoading(false);
    }
    movieLoader();
  }, [query]);

  const sendQueryFunc = () => {
    setQuery(searchMovies);
  };
  return (
    <>
      <div className="header">
        <Navbar
          sendQueryFunc={sendQueryFunc}
          searchMovies={searchMovies}
          setSearchMovies={setSearchMovies}
        />
      </div>
      <div className="flexCont gap-sm">
        {<Movielist isLoading={isLoading} MovieDatas={MovieDatas} />}
        <Watchlist />
      </div>
    </>
  );
}
