import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Plants from "../Pages/Plants";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";

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
                }
            ]
        }
    ]
)
