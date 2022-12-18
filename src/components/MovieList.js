import React from "react";
import MovieCard from "./MovieCard";
import "../AppHook.css";
const MovieList = ({ list, handleDelete }) => {
  return (
    <div className="Card">
      {list.map((e, i) => (
        <MovieCard
          handleDelete={handleDelete}
          elem={e}
          key={i}
          className="Card"
        />
      ))}
    </div>
  );
};

export default MovieList;
