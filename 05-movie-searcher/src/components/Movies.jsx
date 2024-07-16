function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.poster} alt={movie.Title} />
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>No movies found for this search</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />;
}
