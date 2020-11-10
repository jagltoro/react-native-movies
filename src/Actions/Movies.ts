import { API_KEY } from "@env";

export const getMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?&api_key=${API_KEY}`
  );
  return await response.json();
};

export const getUpcomingMovies = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?&api_key=${API_KEY}`
  );
  return await response.json();
};

export const getGenres = async () => {
  let response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?&api_key=${API_KEY}`
  );
  return await response.json();
};

export const getDetails = async (id:number) => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`
  );
  return await response.json();
};

export const getCredits = async (id:number) => {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?&api_key=${API_KEY}`
  );
  return await response.json();
};
