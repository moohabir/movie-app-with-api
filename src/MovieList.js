import App from "./App";
export default function MovieList({ Poster, Title, Year }) {
  return (
    <main>
      <div>
        <img src={Poster} alt={Title} />
      </div>
      <div>
        <h4>{Title}</h4>
        <p>{Year}</p>
      </div>
    </main>
  );
}
