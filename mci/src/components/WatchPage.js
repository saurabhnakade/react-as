import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_API_WP } from "../utils/constants";
import VideoCard from "./VideoCard";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [params, setParams] = useSearchParams();
    const [data, setData] = useState([]);
    console.log(params.get("v"));

    const getVideos = async () => {
        const tdata = await fetch(YOUTUBE_VIDEOS_API_WP);
        const jsonData = await tdata.json();

        setData(jsonData.items);
    };

    useEffect(() => {
        dispatch(closeMenu());
        getVideos();
    }, []);

    return (
        <div className="col-span-11 flex">
            <iframe
                className="ml-12 mt-12"
                width="1200"
                height="600"
                src={
                    "https://www.youtube.com/embed/" +
                    params.get("v") +
                    "?autoplay=1"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <div>
                {data.map((item) => (
                    <VideoCard key={item.id} info={item} />
                ))}
            </div>
        </div>
    );
};

export default WatchPage;
