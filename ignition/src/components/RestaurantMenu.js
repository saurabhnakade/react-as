import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { id } = useParams();

    const resData = useRestaurant(id);

    return (
        <div className="p-5 m-5 bg-pink-50 rounded-lg shadow-lg flex justify-around items-center">
            <div className="pb-14">
                <h2 className="font-bold mb-2">RestaurantId: {id}</h2>
                <h2 className="font-bold mb-2">RestaurantName: {resData?.name}</h2>
                {resData?.cuisines?.map((cuisine) => (
                    <h2 className="font-bold mb-2"
                        key={
                            Math.floor(Math.random() * 100) +
                            27 * Math.floor(Math.random() * 100)
                        }
                    >
                        {cuisine}
                    </h2>
                ))}
            </div>
            <div className="p-4">
                <img
                    className="rounded-lg mb-4 h-[600px]"
                    alt="restaurant-image"
                    src={`${CDN_URL}${resData?.cloudinaryImageId}`}
                />
            </div>
        </div>
    );
};

export default RestaurantMenu;
