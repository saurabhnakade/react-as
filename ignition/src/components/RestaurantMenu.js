import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const { id } = useParams();

    const resData = useRestaurant(id);

    const dispatch = useDispatch();

    const handleAddItem = (cuisine) => {
        dispatch(addItem(cuisine));
    };

    return (
        <div className="p-5 m-5 bg-pink-50 rounded-lg shadow-lg flex justify-around items-center">
            <div className="pb-14">
                <h2 className="font-bold mb-2">RestaurantId: {id}</h2>
                <h2 className="font-bold mb-14">
                    RestaurantName: {resData?.name}
                </h2>
                {resData?.cuisines?.map((cuisine) => (
                    <div className="flex justify-around mb-6">
                        <h2
                            className="font-bold mb-2"
                            key={
                                Math.floor(Math.random() * 100) +
                                27 * Math.floor(Math.random() * 100)
                            }
                        >
                            {cuisine}
                        </h2>
                        <button
                            key={
                                Math.floor(Math.random() * 100) +
                                27 * Math.floor(Math.random() * 100)
                            }
                            className="p-4 rounded-lg font-bold bg-green-100 border"
                            onClick={() => handleAddItem(cuisine)}
                        >
                            Add Item
                        </button>
                    </div>
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
