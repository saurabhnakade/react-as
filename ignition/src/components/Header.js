import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>Home</li>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <li>About-Us</li>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <li>Contact-Us</li>
                    </Link>
                    <Link to="/instamart" style={{ textDecoration: "none" }}>
                        <li>Instamart</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            {isOnline ? <h1>✅</h1> : <h1>🔴</h1>}
            {!isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            ) : (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            )}
        </div>
    );
};

export default Header;
