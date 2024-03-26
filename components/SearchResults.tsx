import { Movie } from "@lib/types";
import MovieCard from "./MovieCard";
import { fetchSearchMovie } from "@actions/movieData";

const SearchResults = async ({ query }: { query: string }) => {
  let searchedMovies: Movie[] = [];

  searchedMovies = await fetchSearchMovie(query);

  return searchedMovies.length === 0 ? (
    <div className="search-page">
      <h1 className="text-heading2-bold text-white">No results found</h1>
    </div>
  ) : (
    <div className="search-page">
      <h1 className="text-heading2-bold text-white">Results for "{query}"</h1>

      <div className="list">
        {searchedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
