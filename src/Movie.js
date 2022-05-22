import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import "./App";

export default function Movie() {
  const [movies, setMovies] = useState([
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      Title: "Captain America: Civil War",
      Year: "2016",
      imdbID: "tt3498820",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
  ]);

  const Getapi = async () => {
    const url = "http://www.omdbapi.com/?s=war&apikey=c3eb04e2";
    const response = await fetch(url);
    const responseJson = await response.Json();
    setMovies(responseJson.Search);
  };
  // Getapi();

  return (
    <div>
      <div>
        {movies.map((movie) => {
          return (
            <MovieList
              Poster={movie.Poster}
              Title={movie.Title}
              Year={movie.Year}
            />
          );
        })}
      </div>
    </div>
  );
}
