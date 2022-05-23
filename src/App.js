import { useEffect, useState } from "react";
import Search from "./Search";
import MovieList from "./MovieList";

import "./styles.css";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
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

  async function Getapi(searchValue) {
    const url = `"http://www.omdbapi.com/?s=${searchValue}&apikey=c3eb04e2"`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  }
  useEffect(() => {
    Getapi(searchValue);
  }, [searchValue]);
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
