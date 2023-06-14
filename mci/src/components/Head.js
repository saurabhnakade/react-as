import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import { YOUTUBE_SEARCH_RESULTS, YOUTUBE_SUGGESTION_API } from "../utils/constants";

const Head = () => {
    const dispatch = useDispatch();

    const [searchQuery,setSearchQuery]=useState("");
    const [searchResults,setSeatchResults]=useState([]);

    const getSearchSuggestions=async()=>{
        const data =await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
        const json =await data.json();
        setSeatchResults(json[1]);
    }

    const getSearchVideoResults=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_RESULTS("iphone 14"))
        const json=await data.json();
        console.log(json);
    }

    useEffect(()=>{
        // make an api call after every keyPress
        // but if the difference between two api calls is <200ms - decline the api call
        const timer=setTimeout(getSearchSuggestions,200)

        getSearchVideoResults();

        // every time component unmounts this gets called
        return ()=>{
            clearTimeout(timer);
        }

    },[searchQuery]);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-1 m-1 shadow-lg">
            <div className="flex col-span-1 justify-around items-center">
                <img
                    onClick={toggleMenuHandler}
                    className="h-10 cursor-pointer"
                    alt="menu"
                    src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
                />
                <img
                    className="h-16"
                    alt="yotube-logo"
                    src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
                />
            </div>
            <div className="col-span-10 pl-44 relative">
                <div className="flex items-center w-full mt-3">
                    <input
                        className="w-1/2 p-2 pl-6 border border-gray-400 rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    <button className="border border-gray-400 p-2 rounded-r-full">
                        Search
                    </button>
                </div>
                {searchResults.length!==0 &&<div className="absolute z-10 bg-white mt-1 py-2 px-5 w-[40rem] rounded-lg drop-shadow-2xl">
                    <ul className="">
                        {searchResults.map((item,idx)=><li className="py-2 px-2 hover:bg-gray-100" key={idx}>
                            🔍 {item}
                        </li>)}
                    </ul>
                </div>}
            </div>
            
            <div className="col-span-1 flex items-center">
                <img
                    className="h-10 border border-gray-600 rounded-full"
                    alt="user-icon"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
            </div>
        </div>
    );
};

export default Head;
