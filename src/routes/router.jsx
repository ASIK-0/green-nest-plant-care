import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import PlantsDetails from "../Pages/PlantsDetails";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root/>,
            children: [
                {
                    index: true,
                    element: <Home/>
                },
                {
                    path: '/plants',
                    element: <Plants/>
                },
                {
                    path: '/profile',
                    element: <Profile/>
                },
                {
                    path: '/signin',
                    element: <Signin/>
                },
                {
                    path: '/signup',
                    element: <Signup/>
                },
                {
                    path: '/*',
                    element: <h2 className="font-bold text-4xl md:text-7xl text-center my-[100px]">Page Not Fount</h2>
                },
                {
                    path: "/plantsDetails/:id",
                    element: <PlantsDetails></PlantsDetails>
                }
            ]
        }
    ]
)
