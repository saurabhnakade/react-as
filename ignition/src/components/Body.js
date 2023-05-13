import { useState } from "react";
// import resList from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [
        restaurants,
        filteredRestaurants,
        setRestaurants,
        setFilteredRestaurants,
    ] = useRestaurantList();

    return restaurants.length === 0 ? (
        <h1 className="text-center font-bold text-3xl">Shimmer UI loading</h1>
    ) : (
        <div className="p-5 m-5 bg-pink-50 rounded-lg shadow-lg justify-between">
            <div className="flex items-center mb-6 justify-between">
                <div>
                    <button
                        className="hover:bg-purple-300 bg-purple-200 p-2 rounded-lg mr-3"
                        onClick={() => {
                            filteredRes = restaurants.filter(
                                (res) => res.data.avgRating > 4
                            );
                            setRestaurants(filteredRes);
                        }}
                    >
                        Top Rated
                    </button>
                </div>
                <div className="filterName">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                                const data = filterData(
                                    searchText,
                                    restaurants
                                );
                                setFilteredRestaurants(data);
                            }}>
                        <input
                            className="mr-5 rounded-lg py-1 px-4"
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <button
                            className="hover:bg-purple-300 bg-purple-200 p-2 rounded-lg mr-3"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center flex-wrap">
                {filteredRestaurants.length === 0 ? (
                    <h1 className="text-center">
                        No restaurants for that filter
                    </h1>
                ) : (
                    <></>
                )}
                {filteredRestaurants.map((res) => {
                    return (
                        <Link
                            key={res?.data.id}
                            to={`/restaurants/${res?.data.id}`}
                        >
                            <RestaurantCard resData={res?.data} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
