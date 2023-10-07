import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Navbar from "../../components/Navbar/Navbar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Event from "../../components/Event/Event";


const Home = () => {
    const [events, setEvents] = useState([]);
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('Events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    // console.log(events);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="lg:flex gap-6">
                <LeftSidebar className="lg:w-1/4"></LeftSidebar>
                <div className="lg:w-2/4 mb-8">
                    <h2 className="text-2xl font-bold mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            events.slice(0, dataLength).map(event => <Event key={event.id} event={event}></Event>)
                        }
                        <div className={dataLength >= events.length && 'hidden'}>
                           <button onClick={() => setDataLength(events.length)} className="btn btn-sm bg-orange-600 text-white m-4">See All</button>
                        </div>
                    </div>
                </div>
                <RightSidebar className="lg:w-1/4"></RightSidebar>
            </div>
        </div>
    );
};

export default Home;