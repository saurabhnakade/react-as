import { useState } from "react";
import resList from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restaurants,setRestaurants]=useState(resList);

    let listOfRestaurantsJS = [
        {
            data: {
                id: "334475",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food",
                ],
                costForTwo: 40000,
                avgRating: "3.8",
            },
        },
        {
            data: {
                id: "334476",
                name: "Dominos",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food",
                ],
                costForTwo: 40000,
                avgRating: "4.5",
            },
        },
    ];

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        filteredRes=restaurants.filter(res=>res.data.avgRating>4)
                        setRestaurants(filteredRes);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="res-container">
                {restaurants.map((res) => {
                    return (
                        <RestaurantCard
                            key={res?.data.id}
                            resData={res?.data}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
