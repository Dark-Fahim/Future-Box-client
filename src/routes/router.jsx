import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import CreateEvent from "../pages/CreateEvent";
import Login from "../pages/Login";
import Register from "../pages/Register";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        }, 
        {
            path: '/create-event',
            Component: CreateEvent
        }, 
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/register',
            Component: Register
        }
    ]
  },
]);

export default router;