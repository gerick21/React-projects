import "./App.css";
import { useState, useCallback } from "react";
import { useMovies } from "./hooks/useMovies.js";
import { Movies } from "./components/Movies.jsx";
import { useSearch } from "./hooks/useSearch";
import { debounce } from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
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
          <input type="checkbox" onChange={handleSort} />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
