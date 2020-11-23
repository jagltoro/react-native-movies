export interface BookmarkProps {
  [id:number] : BookmarkMovie
}

export interface BookmarkMovie {
  id:number;
  title: string;
  vote_average: number;
  poster_path: string;
  genres_ids: number[]
}