import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Event from "./Event";
import { AiOutlineArrowLeft } from "react-icons/ai";

const EventCategory = () => {
    const events = useLoaderData();
    const { category_id } = useParams();
    const currentCategory = events.filter(event => event.category_id == category_id)
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-12 my-12">
                {
                    currentCategory.map(event => <Event key={event.id} event={event}></Event>)
                }
                <div>
                    <button className="btn btn-sm bg-orange-600 mt-4"><Link to="/" className="text-white flex "><AiOutlineArrowLeft></AiOutlineArrowLeft> See All Category</Link></button>
                </div>
            </div>
        </div>
    );
};

export default EventCategory;