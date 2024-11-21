import { createContext} from "react";

const UserContext = createContext({
    user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
    }
});
// react does not track the name of the context, so we give it a unique name to make debugging easier
UserContext.displayName = "UserContext";

export default UserContext;