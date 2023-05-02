import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { CDN_URL, RES_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { id } = useParams();

    const [resData, setResData] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            `${RES_URL}${id}`
        );
        const json = await data.json();
        setResData(json?.data?.cards?.[0]?.card?.card?.info);
    }

    return (
        <div>
            <h2>RestaurantId: {id}</h2>
            <h2>RestaurantName: {resData?.name}</h2>
            {resData?.cuisines?.map((cuisine) => (
                <h2 key={Math.floor(Math.random()*100)+27*Math.floor(Math.random()*100)}>{cuisine}</h2>
            ))}
            <img className="individual-img" src={`${CDN_URL}${resData?.cloudinaryImageId}`}/>
        </div>
    );
};

export default RestaurantMenu;
