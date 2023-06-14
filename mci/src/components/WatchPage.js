import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEO_COMMENTS } from "../utils/constants";
import VideoCardWatchPage from "./VideoCardWatchPage";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [params, setParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [comments,setComments]=useState([]);

    const getVideos = async () => {
        const tdata = await fetch(YOUTUBE_VIDEOS_API(6));
        const jsonData = await tdata.json();

        setData(jsonData.items);
    };

    const getVideoComments=async()=>{
        const tComments=await fetch(YOUTUBE_VIDEO_COMMENTS(params.get("v")));
        const json=await tComments.json();

        console.log(json.items);
        
        setComments(json.items);
    }

    useEffect(() => {
        dispatch(closeMenu());
        getVideos();
        getVideoComments();
    }, []);

    return (
        <div className="col-span-11 flex">
            <div>
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
                    <ul className="ml-12 mt-14">
                    {comments.map(({snippet})=><li className="px-3 py-8 text-lg">{snippet.topLevelComment.snippet.textOriginal}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                {data.map((item) => (
                    <VideoCardWatchPage key={item.id} info={item} size={"h-66 w-110"} />
                ))}
            </div>
        </div>
    );
};

export default WatchPage;
