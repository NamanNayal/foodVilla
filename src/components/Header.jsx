import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Logo from "../assets/foodVillaLogo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title = () => {
    return(
    <a href="/">
    <img className = "h-28 p-2" alt="logo" src = {Logo} />
    </a>
    )
  };
   
const Header = () =>{

  const isOnline = useOnline();  // Importing custom hook from utils folder to check if the device is online or offline.

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
  

  return (
    <div className="flex justify-between bg-c4 text-white px-4 py-4 s">
      <Title />
      <div className="flex justify-self space-x-8">
        <ul className="flex items-center space-x-8 font-semibold fontsize">
          <Link to="/">
            <li className="hover:text-c2 hover:text-lg">Home</li>
          </Link>
          <Link to="/About">
            <li className="hover:text-c2 hover:text-lg">About</li>
          </Link>
          <Link to="/Contact">
            <li className="hover:text-c2 hover:text-lg">Contact</li>
          </Link>
          <Link to="/Instamart">
            <li className="hover:text-c2 hover:text-lg">Instamart</li>
          </Link>
          <Link to="/Cart">
            <li className="hover:text-c2 hover:text-lg">Cart-{cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
        <span className="font-bold">{user.name}-{user.email}</span>
        
        <h2>{isOnline ? "🟢" : "🔴"}</h2>
      </div>
    </div>
  );
  }

export default Header;