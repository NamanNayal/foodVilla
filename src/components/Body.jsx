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
        <div className="bg-c1 px-4 ">
          <div className="flex items-center justify-center bg-c1 py-4 px-4 space-x-4">
            <input
              type="text"
              className=" p-2 w-72 rounded-md shadow-lg shadow-black "
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="p-2 bg-c2 text-black rounded-md hover:bg-c3 shadow-lg shadow-black"
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}
            >
              Search 🔍
            </button>
          </div>
    
          {filteredRestaurants.length === 0 ? (
            <h2>No restaurant found</h2>
          ) : (
            <div className=" flex flex-wrap justify-evenly justify-items-center ">
              {filteredRestaurants.map((restaurant) => (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                
                  <RestaurantCard {...restaurant.info} />
                
                </Link>
              ))}
            </div>
          )}
        </div>
      );
};

export default Body;
