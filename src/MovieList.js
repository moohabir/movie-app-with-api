import App from "./App";
export default function MovieList({ movie }) {
  return (
    <main>
      <div>
        <img src={movie.Poster} alt={movie.name} />
      </div>
      <div>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </div>
    </main>
  );
}
