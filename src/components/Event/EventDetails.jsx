import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightSidebar from "../RightSidebar/RightSidebar";
import { ImLocation2 } from "react-icons/im";

const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const currentEvent = events.find(currentEvent => currentEvent.id == id)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="md:flex">
                <div className="lg:w-2/3 lg:flex p-4 gap-4 items-center">
                    <div className="grid w-3/5 grid-cols-2 justify-center  border-2 border-blue-600 rounded mb-4">
                        <img src={currentEvent.prev_image1} alt="" className="w-full h-[150px]" />
                        <img src={currentEvent.prev_image2} alt="" className="w-full h-[150px]" />
                        <img src={currentEvent.prev_image3} alt="" className="w-full h-[150px]" />
                        <img src={currentEvent.prev_image4} alt="" className="w-full h-[150px]" />
                    </div>
                    <div className="bg-pink-100 p-4 rounded space-y-1 mb-4">
                        <h2 className="text-center font-bold text-xl">{currentEvent.event_name}</h2>
                        <p className="italic font-bold text-center text-xl">Event Type: <span className="text-purple-700">{currentEvent.event_title}</span></p>
                        <p className="text-center flex items-center justify-center text-xl"><ImLocation2 className=" text-blue-700"></ImLocation2>{currentEvent.address}</p>
                        <div className="flex justify-between py-2">
                            <button className="text-xl font-bold">Price: {currentEvent.booking_price} tk</button>
                            <button className="bg-orange-500 py-1 px-2 rounded text-white">Book Now</button>
                        </div>

                        <div className="bg-purple-300 rounded p-2">
                            <h2 className="font-bold">Manager Information</h2>
                            <div className="md:flex lg:flex-col  gap-3 items-center">
                                <img src={currentEvent.manager.image} alt="" className="h-[120px] rounded-3xl" />
                                <div>
                                    <p>Name: <span className="font-bold">{currentEvent.manager.name}</span></p>
                                    <p>Email: <span className="font-bold">{currentEvent.manager.email}</span></p>
                                    <p>Cell: <span className="font-bold">{currentEvent.manager.mobile}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="md:w-1/3">
                    <RightSidebar></RightSidebar>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;