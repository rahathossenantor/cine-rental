import { getAllMovies } from "../data/movies";
import Movie from "./Movie";

export default function Movies() {
    const movies = getAllMovies();

    return (
        <div className="content">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
