import { fetchGenresMovie } from "@actions/movieData";
import CategoryList from "@components/CategoryList";
import Hero from "@components/Hero";
import { Genre } from "@lib/types";

const Home = async () => {
  const genres = await fetchGenresMovie();
  const slicedGenres = genres.slice(0, 5);

  return (
    <div>
      <Hero />
      <div className="all-movies">
        {slicedGenres.map((genre: Genre) => (
          <CategoryList
            key={genre.id}
            title={genre.name}
            movies={genre.movies}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
