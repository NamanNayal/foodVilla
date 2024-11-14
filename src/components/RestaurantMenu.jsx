import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IMG_CON_URL } from '../constant';
import Shimmer from './Shimmer';
import { MENU_API } from '../constant';

function RestaurantMenu() {
  //how to read a dynamic url
    const [restaurant, setRestaurant] = useState(null);

    
    const {resId} = useParams(); 


    
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
    }

    if (restaurant === null) return <Shimmer />;


   //here we are destructring a deeply nested object and hence we used optional chaining so that in case of an error it will return us a undefined value instead of throwing an error and we gave an empty object at the end to  {} ensures that if restaurant?.cards?.[2]?.card?.card?.info is undefined, it falls back to an empty object ({}). This prevents destructuring errors by providing a safe object with no properties.
   const { name, cuisines, costForTwoMessage, cloudinaryImageId, areaName, city, avgRating} =
    restaurant?.cards[2]?.card?.card?.info || {};

  // here we are accessing a deeply nested array of objects and not objects itself hence no { itemCards} but itemCards and an empty array at the end for fallback This is necessary because .map() cannot operate on undefined—it requires an array. By providing an empty array, .map() can run safely even if there’s no data.
    const  itemCards  =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];





    return (
      <div className="menu">
        <div >
          <h2>{name}</h2>
          <img className="menu-image" src={IMG_CON_URL + cloudinaryImageId} alt="Image" />
          <h3>{areaName}</h3>
          <h3>{city}</h3>
          <h3>{avgRating} stars</h3>
          <h3>
            {cuisines.join(", ")}-{costForTwoMessage}
          </h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {itemCards.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -{" Rs."}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default RestaurantMenu;