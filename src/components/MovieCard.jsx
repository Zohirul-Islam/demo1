import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded shadow-md p-3 w-64">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-80 object-cover" />
      <h2 className="font-bold text-lg mt-2">{movie.Title}</h2>
      <p className="text-sm text-gray-600">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;