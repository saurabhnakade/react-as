import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((res) => {
                    return <RestaurantCard key={res?.data.id} resData={res?.data} />;
                })}
            </div>
        </div>
    );
};

const RestaurantCard = ({ resData }) => {
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={`https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/${cloudinaryImageId}`}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>₹400{avgRating} FOR TWO</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
