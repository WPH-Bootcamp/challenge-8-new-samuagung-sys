type Movie = {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
};

type Props = {
  movie: Movie;
  rank?: number;
};

export default function MovieCard({ movie, rank }: Props) {
  return (
    <div
      className="
        relative
        transition-transform
        duration-300
        hover:scale-105
        hover:z-10
      "
    >
      {rank && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          #{rank}
        </div>
      )}

      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full aspect-[2/3] object-cover rounded-lg"
      />

      <div className="mt-2 space-y-1">
        <h3 className="text-white text-sm font-medium line-clamp-2">
          {movie.title}
        </h3>

        <span className="text-yellow-400 text-sm font-semibold">
          ⭐ {movie.rating}
        </span>
      </div>
    </div>
  );
}
