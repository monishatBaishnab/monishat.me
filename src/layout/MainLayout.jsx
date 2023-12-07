import { useEffect } from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import Home from "../pages/Home";
import AOS from 'aos';

const MainLayout = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    );
};

export default MainLayout;