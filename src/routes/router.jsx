import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../layout/Root";
import Home from "../pages/Home";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);

export default router;