import React from "react";
import "./styles/Navbar.css";
export default function Navbar({
  setSearchMovies,
  searchMovies,
  sendQueryFunc,
}) {
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
    </nav>
  );
}
