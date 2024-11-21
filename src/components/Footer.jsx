import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = ()=> {
    const {user} = useContext(UserContext);
    return (
    <div>
    <h5>Footer</h5>
    <h5>{user.name}</h5>
    </div>
    )

  }

  
export default Footer;