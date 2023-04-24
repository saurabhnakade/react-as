import resList from "../utils/data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((res) => {
                    return <RestaurantCard key={res?.data.id} resData={res?.data} />;
                })}
            </div>
        </div>
    );
};

export default Body