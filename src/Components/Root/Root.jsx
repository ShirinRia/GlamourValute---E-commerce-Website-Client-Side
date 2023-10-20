import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { useContext } from "react";
import { Authcontext } from "../../Provider/Provider";

const Root = () => {
    const {theme} = useContext(Authcontext)
    return (
        <div className={`font-display  ${theme ? "bg-black" : ""}`}>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;