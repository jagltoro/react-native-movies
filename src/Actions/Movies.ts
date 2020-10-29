const apiKey = 'e5db45ddf9c35cbdf6dc447371768281';

export const getMoviesFromApi = async () => {
  let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?&api_key=${apiKey}`);
  return await response.json();
}

