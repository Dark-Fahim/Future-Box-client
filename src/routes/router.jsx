import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import CreateEvent from "../pages/CreateEvent";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import UpcomingEvents from "../pages/UpcomingEvents";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PrivateRoute from "./PrivateRoute";
import EventDetails from "../pages/EventDetails";
import JoinedEvents from "../pages/JoinedEvents";
import ManageEvents from "../pages/ManageEvents";




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
            element: <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
        }, 
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/register',
            Component: Register
        },
        {
          path: '/events',
          Component: UpcomingEvents
        },
        {
          path: '/about',
          Component: About
        },
        {
          path: '/contact',
          Component: Contact
        },
        {
          path: '/events/:id',
          loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`) ,
          Component: EventDetails
        },
        {
          path: '/joined-events',
          element: <PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>
        },
        {
          path: '/manage-events',
          element: <PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>
        }
    ]
  },
  {
    path: '*',
    Component: ErrorPage
  }
]);

export default router;