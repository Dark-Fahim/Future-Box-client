import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingRoutes from "./LoadingRoutes";


const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <LoadingRoutes>
                <div className="grow">
                    <Outlet />
                </div>
            </LoadingRoutes>
            <Footer></Footer>
        </div>
    );
};

export default Root;