import { useReducer } from "react";
import Movies from "./components/Movies";
import Sidebar from "./components/Sidebar";
import MovieContext from "./contexts/movieContext";
import { cartReducer, initialState } from "./reducers/CartReducer";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

export default function App() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <>
            <MovieContext.Provider value={{ state, dispatch }}>
                <Header />
                <main>
                    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                        <Sidebar />
                        <Movies />
                    </div>
                </main>
                <Footer />
            </MovieContext.Provider>
        </>
    );
}
