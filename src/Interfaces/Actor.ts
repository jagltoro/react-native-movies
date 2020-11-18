export interface ActorProps {
        adult: boolean;
        also_known_as: string[];
        biography: string;
        birthday: string;
        deathday: string | null;
        gender: number;
        homepage: string | null;
        id: number;
        imdb_id: string;
        known_for_department: string;
        name: string;
        place_of_birth: string;
        popularity: number;
        profile_path: string;
        credits: {
          cast: {
            id: number;
            video: false;
            vote_count: number;
            vote_average: number;
            title: string;
            release_date: string;
            original_language: string;
            original_title: string;
            genre_ids: number[];
            backdrop_path: string;
            adult: boolean;
            overview: string;
            poster_path: string;
            popularity: number;
            character: string;
            credit_id: string;
            order: number
          }[]
        };
        external_ids: {
          freebase_mid: string | null;
          freebase_id: string | null;
          imdb_id: string | null;
          tvrage_id: string | null;
          facebook_id: string | null;
          instagram_id: string | null;
          twitter_id: string | null
        }
}