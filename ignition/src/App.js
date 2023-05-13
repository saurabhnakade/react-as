import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";


// import Instamart from "./components/Instamart";
const Instamart=lazy(()=>import("./components/Instamart"))


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
                children:[{
                    path:"profile",
                    element:<ProfileClass name="Saurabh"/>
                }]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantMenu/>
            }
            ,{
                path:"/instamart",
                element:<Suspense fallback={<h1>Shimmer is Loading</h1>}><Instamart/></Suspense>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter }/>);
