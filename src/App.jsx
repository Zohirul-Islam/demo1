import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

const API_KEY = "YOUR_OMDB_API_KEY"; // Replace with your OMDb API Key

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
    );
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchMovies();
    }
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie Search App</h1>
      <form onSubmit={handleSearch} className="mb-6 flex justify-center gap-2">
        <input
          className="border p-2 rounded w-72"
          type="text"
          placeholder="Search for movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <p className="text-center col-span-full">No movies found. Try searching!</p>
        )}
      </div>
    </div>
  );
}

export default App;

