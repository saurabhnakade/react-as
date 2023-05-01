import { useEffect, useState } from "react";
// import resList from "../utils/data";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filterData;
}

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
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

    useEffect(()=>{
        // API Call
        getRes();
    },[])

    async function getRes(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    }

    return restaurants.length===0 ? <h1>Shimmer UI loading</h1>:(
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
                        console.log(searchText)
                        const data = filterData(searchText, restaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.length===0 ? (<h1>No restaurants for that filter</h1>):(<></>)}
                {filteredRestaurants.map((res) => {
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
