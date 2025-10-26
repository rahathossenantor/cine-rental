import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import Cart from "../components/Cart";
import MovieContext from "../contexts/MovieContext";

export default function Header() {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useContext(MovieContext);

    const handleCartOpen = () => {
        setShowCart(true);
    };

    return (
        <header>
            {showCart && <Cart onClose={() => setShowCart(false)} />}
            <nav className="container flex items-center justify-between space-x-10 py-6">
                <a href="index.html">
                    <img src={logo} width="139" height="26" alt="logo" />
                </a>

                <ul className="flex items-center space-x-5">
                    <li>
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img
                                src={ring}
                                width="24"
                                height="24"
                                alt="notification ring"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                        >
                            <img src={moon} width="24" height="24" alt="moon" />
                        </a>
                    </li>
                    <li>
                        <a
                            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                            href="#"
                            onClick={handleCartOpen}
                        >
                            <img
                                src={shoppingCart}
                                width="24"
                                height="24"
                                alt="shopping cart"
                            />
                            <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                                {cartItems.length}
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
