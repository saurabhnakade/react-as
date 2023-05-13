import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";

const useRestaurant=(id)=>{
    const [resData, setResData] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            RES_URL+id
        );
        const json = await data.json();
        setResData(json?.data?.cards?.[0]?.card?.card?.info);
    }

    return resData
}

export default useRestaurant