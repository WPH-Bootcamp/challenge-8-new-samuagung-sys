import { useQuery } from "@tanstack/react-query";
import { tmdb } from "../api/tmdb";

export type TMDBMovie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

export function useTrendingMovies() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: async () => {
      const res = await tmdb.get("/trending/movie/week");
      return res.data.results as TMDBMovie[];
    },
  });
}
