import { useState } from "react";
// import resList from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants,filteredRestaurants,setRestaurants,setFilteredRestaurants]=useRestaurantList();

    // const isOnline=useOnline();

    // if(!isOnline){
    //     return <h1>🔴 Offline</h1>
    // }

    return restaurants.length === 0 ? (
        <h1>Shimmer UI loading</h1>
    ) : (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
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
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        const data = filterData(searchText, restaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.length === 0 ? (
                    <h1>No restaurants for that filter</h1>
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
