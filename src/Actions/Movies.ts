import { API_KEY } from "@env";

export const getMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?&api_key=${API_KEY}`
  );
  return await response.json();
};

export const getGenres = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?&api_key=${API_KEY}`
  );
  return await response.json();
};
