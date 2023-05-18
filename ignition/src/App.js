import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Saurabh Nakade",
        email: "saurabh.nakade23@gmail.com",
    });

    return (
        <Provider store={store}>
        <UserContext.Provider value={
            {user:user,setUser:setUser}
        }>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <ProfileClass name="Saurabh" />,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu />,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<h1>Shimmer is Loading</h1>}>
                        <Instamart />
                    </Suspense>
                ),
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
