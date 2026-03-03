import { useQuery } from "@tanstack/react-query";
import { tmdb } from "../api/tmdb";

export type TMDBMovie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export function useNewReleaseMovies() {
  return useQuery({
    queryKey: ["new-release-movies"],
    queryFn: async () => {
      const res = await tmdb.get("/movie/now_playing");
      return res.data.results as TMDBMovie[];
    },
  });
}
