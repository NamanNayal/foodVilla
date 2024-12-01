import { IMG_CON_URL } from "../constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
    name, 
    cuisines,
    cloudinaryImageId, 
    avgRating,
    areaName,
    costForTwo,
    
    }) => {
      const {user} = useContext(UserContext);
    return(
      <div className="w-[250px] p-2 m-2 shadow-lg shadow-black bg-c2 text-blacka rounded-md hover:bg-c3">
  
        <img src={IMG_CON_URL+cloudinaryImageId}/>
        <h2 className="font-bold text-2xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
        <h4>{user.name}</h4>
        


      </div>
    )
  }
  
 export default RestaurantCard; 
