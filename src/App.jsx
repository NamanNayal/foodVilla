import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";  
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";  
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
const Instamart = lazy(()=> import("./components/Instamart"));
const About =  lazy(() => import("./components/About"));
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store";

// Define the layout of your application
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Naman Nayal",
    email: "naman@example.com",
  });
  return (
      <Provider store = {store}> 
      <UserContext.Provider
      value = {{
        user : user,
        setUser: setUser,
      }}>
      <Header />
      <Outlet/>
      <Footer />
      </UserContext.Provider>
      </Provider>
  );
};

// Set up routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>,
        children:[
          {
            path: "profile",
            element: <Profile/>
            
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/instamart",
        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
      }
    ] 
  },

]);

// Main App component that provides the router
const App = () => {
  return (
    <RouterProvider router={appRouter} />  // Provide router configuration here
  ); 
};

export default App;
