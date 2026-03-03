import MovieCard from "./MovieCard";

type Movie = {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
};

type Props = {
  title: string;
  movies: Movie[];
  showRanking?: boolean;
};

export default function MovieSection({
  title,
  movies,
  showRanking = false,
}: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-white text-lg font-semibold">{title}</h2>

      <div
        className="
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
      >
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            rank={showRanking ? index + 1 : undefined}
          />
        ))}
      </div>
    </section>
  );
}
