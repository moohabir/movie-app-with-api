import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import App from "./App";

export default function Movie() {
  const [movies, setMovies] = useState([""]);

  const getApi = () => {
    const url = "http://www.omdbapi.com/?s=war&apikey=c3eb04e2";
    const response = fetch(url);
    const responseJson = response.json();
    setMovies(response.json.Search);
  };
  useEffect(() => {
    getApi();
  }, []);
  getApi();
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
