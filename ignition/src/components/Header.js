import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    const user=useContext(UserContext)

    const cartItems=useSelector(store=>store.cart.items);

    return (
        <div className="p-5">
        <div className="flex justify-between bg-pink-50 shadow-lg rounded-lg">
            <div className="logo-container">
                <img className="h-28 p-2" src={LOGO_URL} />
            </div>
            <div>
                <ul className="flex py-11">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li className="px-2">Home</li>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <li className="px-2">About-Us</li>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <li className="px-2">Contact-Us</li>
                    </Link>
                    <Link to="/instamart" style={{ textDecoration: "none" }}>
                        <li className="px-2">Instamart</li>
                    </Link>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                        <li  className="px-2">Cart - {cartItems.length}</li>
                    </Link>
                </ul>
            </div>
            <h1 className="py-11 font-bold text-red-900">{user.user.name}</h1>
            {isOnline ? <h1 className="py-11">✅</h1> : <h1 className="py-11">🔴</h1>}
            {!isLoggedIn ? (
                <button className="pr-10" onClick={() => setIsLoggedIn(true)}>Login</button>
            ) : (
                <button className="pr-10" onClick={() => setIsLoggedIn(false)}>Logout</button>
            )}
        </div>
        </div>
    );
};

export default Header;
