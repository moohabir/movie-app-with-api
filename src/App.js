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
    },
    {
      Title: "World War Z",
      Year: "2013",
      imdbID: "tt0816711",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      Title: "War of the Worlds",
      Year: "2005",
      imdbID: "tt0407304",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
      Title: "War for the Planet of the Apes",
      Year: "2017",
      imdbID: "tt3450958",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg"
    }
  ]);

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
