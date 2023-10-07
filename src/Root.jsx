import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


const Root = () => {
    return (
        <div className="md:container mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;