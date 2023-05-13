import { useEffect, useState } from "react";
import { RES_LIST_URL } from "./constants";

const useRestaurantList=()=>{
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

    return [restaurants,filteredRestaurants,setRestaurants,setFilteredRestaurants];
}

export default useRestaurantList;