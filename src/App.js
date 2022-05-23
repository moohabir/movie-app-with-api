import { useEffect, useState } from "react";
import Search from "./Search";
import MovieList from "./MovieList";

import "./styles.css";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const Getapi = async () => {
    const url = "http://www.omdbapi.com/?s=war&apikey=c3eb04e2";
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };
  useEffect(() => {
    Getapi();
  }, []);
  return (
    <div className="App">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
  );
}
