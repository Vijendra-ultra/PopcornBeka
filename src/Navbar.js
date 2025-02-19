import React from "react";
import "./styles/Navbar.css";

export default function Navbar({
  setSearchMovies,
  searchMovies,
  sendQueryFunc,
  MovieDatas,
}) {
  const ResultTextStyles = {
    color: "#fff",
    fontSize: "2rem",
  };
  return (
    <nav className="Navbar">
      <h1>🍿PopcornBeka</h1>
      <div className="Input--cont">
        <input
          spellCheck={false}
          value={searchMovies}
          onChange={(e) => setSearchMovies(e.target.value)}
          type="text"
          placeholder="Search here..."
        />
        <button onClick={sendQueryFunc} className="submit--btn br-c">
          submit
        </button>
      </div>
      <h2 style={ResultTextStyles}>Found {MovieDatas.length} results</h2>
    </nav>
  );
}
