export default function Search({ searchValue, setSearchValue }) {
  return (
    <form>
      <input
        type="text"
        //name = {searchValue}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button onClick={() => setSearchValue(searchValue.target.value)}>
        Search Movie
      </button>
    </form>
  );
}
