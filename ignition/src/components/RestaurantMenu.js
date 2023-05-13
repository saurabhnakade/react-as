import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { id } = useParams();

    const resData=useRestaurant(id);

    return (
        <div>
            <h2>RestaurantId: {id}</h2>
            <h2>RestaurantName: {resData?.name}</h2>
            {resData?.cuisines?.map((cuisine) => (
                <h2 key={Math.floor(Math.random()*100)+27*Math.floor(Math.random()*100)}>{cuisine}</h2>
            ))}
            <img className="individual-img" alt="restaurant-image" src={`${CDN_URL}${resData?.cloudinaryImageId}`}/>
        </div>
    );
};

export default RestaurantMenu;
