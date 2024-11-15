import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Title = () => {
    return(
    <a href="/">
    <img 
    className = "logo"
    src="./1.jpg" alt="logo" />
    </a>
    )
  };
 
const Header = () =>{

  const isOnline = useOnline();  // Importing custom hook from utils folder to check if the device is online or offline.

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div className="header">
          <Title />
          <div className="nav-items">
            <ul>
              <Link to="/">
              <li> Home </li>
              </Link>
              <Link to="/About">
              <li> About </li>
              </Link>
              <Link to="/Contact">
              <li> Contact </li>
              </Link>
              <Link to= "/Cart">
              <li> Cart </li>
              </Link>
              <Link to="/Instamart">
              <li>InstaMart</li>
              </Link>
            </ul>
        </div>
        <h2>{isOnline ? "🟢": "🔴" }</h2>
        {isLoggedIn ?<button onClick = {()=> setIsLoggedIn(false)}>Logout</button>:<button onClick = {()=> setIsLoggedIn(true)}>Login</button> }
        
        
      </div>
    )
  }

export default Header;