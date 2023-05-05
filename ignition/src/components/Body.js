import { useEffect, useState } from "react";
// import resList from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { RES_LIST_URL } from "../utils/constants";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name
            ?.toLowerCase()
            ?.includes(searchText.toLowerCase())
    );

    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // let listOfRestaurantsJS = [
    //     {
    //         data: {
    //             id: "334475",
    //             name: "KFC",
    //             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //             cuisines: [
    //                 "Burgers",
    //                 "Biryani",
    //                 "American",
    //                 "Snacks",
    //                 "Fast Food",
    //             ],
    //             costForTwo: 40000,
    //             avgRating: "3.8",
    //         },
    //     },
    //     {
    //         data: {
    //             id: "334476",
    //             name: "Dominos",
    //             cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    //             cuisines: [
    //                 "Burgers",
    //                 "Biryani",
    //                 "American",
    //                 "Snacks",
    //                 "Fast Food",
    //             ],
    //             costForTwo: 40000,
    //             avgRating: "4.5",
    //         },
    //     },
    // ];

    useEffect(() => {
        // API Call
        getRes();
    }, []);

    async function getRes() {
        try {
            const data = await fetch(`${RES_LIST_URL}`);
            const json = await data.json();

            setRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
        } catch (err) {
            console.log(err);
        }
    }

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
                        console.log(searchText);
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
