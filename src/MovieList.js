export default function MovieList({ Poster, Title, Year }) {
  return (
    <main>
      <div>
        <img src={Poster} alt={Title} />
      </div>
      <div>
        <h4>Name: {Title}</h4>
        <p>Year: {Year}</p>
      </div>
    </main>
  );
}
