import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Watchlist from "./Watchlist";
import Movielist from "./Movielist";

const KEY = "47167ec0";
export const MovieDataContext = createContext();
export default function App() {
  const [searchMovies, setSearchMovies] = useState("");
  const [query, setQuery] = useState("Inception");
  const [MovieDatas, setMovieDatas] = useState("");
  const [Message, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function movieLoader() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        console.log(res);
        if (!res.ok) {
          throw new Error("Are you hiding behind something");
        }
        const data = await res.json();
        console.log(data);
        if (data.Response === "False") {
          throw new Error("No movies found");
        }
        setMovieDatas(data.Search || []);
      } catch (err) {
        setMovieDatas([]);
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    movieLoader();
  }, [query]);

  const sendQueryFunc = () => {
    setQuery(searchMovies);
    setSearchMovies("");
  };

  const MovieIdSelector = (id) => {
    setSelectedId(id);
  };
  const selectedIdremover = () => {
    setSelectedId(null);
  };
  return (
    <>
      <div className="header">
        <Navbar
          sendQueryFunc={sendQueryFunc}
          searchMovies={searchMovies}
          setSearchMovies={setSearchMovies}
          MovieDatas={MovieDatas}
        />
      </div>
      <div className="flexCont gap-sm ">
        <MovieDataContext.Provider value={{ MovieDatas, MovieIdSelector }}>
          <Movielist
            isLoading={isLoading}
            ErrorMessage={Message}
            MovieDatas={MovieDatas}
          />

          <Watchlist
            MovieDatas={MovieDatas}
            selectedId={selectedId}
            selectedIdremover={selectedIdremover}
          />
        </MovieDataContext.Provider>
      </div>
    </>
  );
}
