import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>₹400{avgRating} FOR TWO</h4>
            <h4>{costForTwo / 100}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard