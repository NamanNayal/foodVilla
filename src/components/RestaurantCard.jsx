import { IMG_CON_URL } from "../constant";

const RestaurantCard = ({
    name, 
    cuisines,
    cloudinaryImageId, 
    avgRating,
    id
    }) => {
    return(
      <div className="card">
        <img src={IMG_CON_URL+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
        <h4>#{id}</h4>


      </div>
    )
  }
  
 export default RestaurantCard; 