import { MENU_API } from "../constant";
import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
    //get data from API
    // if param changes data will aslo change
    //returns restaurnt data
0 
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }
    //return restaurant data
    return restaurant;

};

export default useRestaurant; 