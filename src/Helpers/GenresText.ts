import { GenresProps } from "../Interfaces";

export const getTextGenres = (genresIds: number[], genres:GenresProps[]) => {
    return genres.filter((genre: GenresProps) => {
      return genresIds.includes(genre.id);
    });
  }