import "./App.css";

import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";

function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Movie Searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{ border: error ? "1px solid red" : "1px solid black" }}
            value={search}
            onChange={handleChange}
            name="query"
            placeholder="Avengers, Star Wars, Harry Potter..."
          />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
