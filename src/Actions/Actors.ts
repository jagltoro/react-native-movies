import { API_KEY } from "@env";

export const getDetails = async (id:number) => {
  let response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&append_to_response=credits%2Cexternal_ids`
  );
  return await response.json();
};