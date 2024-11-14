import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";  
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";  
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

// Define the layout of your application
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
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
        element: <About />,
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
