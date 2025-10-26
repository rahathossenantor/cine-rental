import { useContext, useState } from "react";
import tag from "../assets/tag.svg";
import MovieContext from "../contexts/movieContext";
import { getMovieUrl } from "../utils/cine-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function Movie({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { state, dispatch } = useContext(MovieContext);

    const handleShowModal = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
        setShowModal(false);
    };

    const handleAddToCart = (movie) => {
        const isExists = state.cartItems.find((item) => item.id === movie.id);
        if (!isExists) {
            dispatch({ type: "ADD_TO_CART", payload: movie });
        }
    };

    return (
        <>
            {showModal && (
                <MovieDetailsModal
                    movie={selectedMovie}
                    onClose={handleCloseModal}
                    onAddToCart={handleAddToCart}
                />
            )}
            <figure className="p-4 border border-black/10 shadow-sm rounded-xl">
                <a href="#" onClick={() => handleShowModal(movie)}>
                    <img
                        className="w-full object-cover"
                        src={getMovieUrl(movie.cover)}
                        alt={movie.title}
                    />
                </a>
                <figcaption className="pt-4">
                    <h3 className="text-xl text-black mb-1">{movie.title}</h3>
                    <p className="text-black/50 text-sm mb-2">{movie.genre}</p>
                    <div className="flex items-center space-x-1 mb-5">
                        <Rating rating={movie.rating} />
                    </div>
                    <a
                        className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#"
                        onClick={() => handleAddToCart(movie)}
                    >
                        <img src={tag} alt="tag" />
                        <span>${movie.price} | Add to Cart</span>
                    </a>
                </figcaption>
            </figure>
        </>
    );
}
