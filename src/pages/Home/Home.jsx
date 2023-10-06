import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="lg:flex gap-6">
                <LeftSidebar className="lg:w-1/4"></LeftSidebar>
                <div className="lg:w-2/4">
                    home
                </div>
                <RightSidebar className="lg:w-1/4"></RightSidebar>
            </div>
        </div>
    );
};

export default Home;