import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resData;

    return (
        <div className="overflow-hidden h-[450px] w-52 rounded-lg bg-purple-200 mr-14 my-6 p-6">
            <img
                className="rounded-sm mb-4"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="mb-3">{name}</h3>
            <h4 className="mb-3">{cuisines.join(" , ")}</h4>
            <h4 className="mb-3">₹400{avgRating} FOR TWO</h4>
            <h4 className="mb-3">{costForTwo / 100}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

export default RestaurantCard