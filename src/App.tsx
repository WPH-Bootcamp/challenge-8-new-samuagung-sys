import MovieSection from "./components/MovieSection";
import { useTrendingMovies } from "./hooks/useTrendingMovies";
import { useNewReleaseMovies } from "./hooks/useNewReleaseMovies";

export default function App() {
  const trending = useTrendingMovies();
  const newRelease = useNewReleaseMovies();

  if (trending.isLoading || newRelease.isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <span className="animate-pulse">Loading movies…</span>
      </div>
    );
  }

  if (trending.isError || newRelease.isError) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
        Failed to load movies
      </div>
    );
  }

  const trendingMovies =
    trending.data?.map((movie) => ({
      id: movie.id,
      title: movie.title,
      posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: Number(movie.vote_average.toFixed(1)),
    })) ?? [];

  const newReleaseMovies =
    newRelease.data?.map((movie) => ({
      id: movie.id,
      title: movie.title,
      posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: Number(movie.vote_average.toFixed(1)),
    })) ?? [];

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div
        className="
          w-full
          px-4
          py-6
          space-y-10
          sm:max-w-[640px]
          md:max-w-[900px]
          lg:max-w-[1200px]
        "
      >
        <MovieSection
          title="Trending Now"
          movies={trendingMovies}
          showRanking
        />

        <MovieSection
          title="New Release"
          movies={newReleaseMovies}
        />
      </div>
    </div>
  );
}
