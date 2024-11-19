import { useEffect, useState } from "react";
const useOnline = () => {

    const [isOnline, setIsOnline] =  useState(true);

    useEffect(()=>{

    const handleOnline = ()=>{
        setIsOnline(true);

    };
    const handleOffline = ()=>{
        setIsOnline(false);
    };

    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);
     
    //we want to make sure that once we are not in the component where eventlistener is being called, we should remove the event listener or it will blow up

    return () =>{
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    } 
},[]);


    return isOnline; //which a boolean at the end of the day

}

export default useOnline;