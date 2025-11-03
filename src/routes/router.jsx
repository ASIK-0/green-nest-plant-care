import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

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
                }
            ]
        }
    ]
)
