import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


const Root = () => {
    return (
        <div className="bg-gradient-to-r from-orange-100 from-10% via-sky-100 via-30% to-emerald-100 to-90% ...">
            <div className="md:container mx-auto">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;