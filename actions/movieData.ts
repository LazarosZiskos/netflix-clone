import { getApiResponse } from "@lib/requests";

export const fetchTrending = async () => {
  const data = await getApiResponse("/trending/all/week");

  const trending = data.results;

  return trending;
};

export const fetchGenresMovie = async () => {
  const data = await getApiResponse("/genre/movie/list");
  const genres = data.genres;

  for (const genre of genres) {
    const data = await getApiResponse(
      `/discover/movie?with_genres=${genre.id}`
    );
    genre.movies = data.results;
  }
  return genres;
};

export const fetchSearchMovie = async (query: string) => {
  const data = await getApiResponse(`/search/movie?query=${query}`);
  const searchedMovies = data.results;

  return searchedMovies;
};
