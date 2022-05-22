import { useState } from "react";
import MovieList from "./MovieList";
import App from "./App";

export default function Movie() {
  const [movies, setMovies] = useState([""]);

  const getApi = async () => {
    const url = "http://www.omdbapi.com/?s=war&apikey=c3eb04e2";
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
  };
  getApi();
  return (
    <div>
      <div>
        {movies.map((movie) => {
          return <MovieList movie={movies} />;
        })}
      </div>
    </div>
  );
}
