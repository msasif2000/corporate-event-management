import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Event from "./Event";


const EventCategory = () => {
    const events = useLoaderData();
    const {category_id} = useParams();
    const currentCategory = events.filter(event => event.category_id == category_id)
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-12 my-12">
            {
                currentCategory.map(event => <Event key={event.id} event={event}></Event>)
            }
            <div>
                <button></button>
            </div>
            </div>
        </div>
    );
};

export default EventCategory;