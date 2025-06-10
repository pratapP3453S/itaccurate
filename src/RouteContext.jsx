import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const RouteContext = createContext();

export const RouterProvider = () => {
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState(location.pathname);
    useEffect(()=>{
        setCurrentRoute(location.pathname);
    },[location]);
    return (
        <RouteContext.Provider value={{ currentRoute }}>
            { children }
        </RouteContext.Provider>
    )
}