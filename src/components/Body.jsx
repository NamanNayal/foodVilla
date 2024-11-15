import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";

 

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5901519&lng=77.2487773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();

            // Ensure the path to restaurants is correct as per the API response
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        } finally {
            setLoading(false);  // Set loading to false after data is fetched
        }
    }

  
    if (loading) return <Shimmer />;  // Render Shimmer while loading is true

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>

            {filteredRestaurants.length === 0 ? (
                <h2>No restaurant found</h2>
            ) : (
                <div className="restaurant-list">
                    {filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id}  key={restaurant.info.id}>
                        <RestaurantCard {...restaurant.info} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default Body;
