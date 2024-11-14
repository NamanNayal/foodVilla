import { useState } from "react";
import { Link } from "react-router-dom";

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
            </ul>
        </div>
        {isLoggedIn ?<button onClick = {()=> setIsLoggedIn(false)}>Logout</button>:<button onClick = {()=> setIsLoggedIn(true)}>Login</button> }
        
        
      </div>
    )
  }

export default Header;