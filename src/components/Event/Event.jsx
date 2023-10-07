
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const Event = ({ event }) => {
    const { id, event_name, event_image, event_title, booking_price } = event;

    return (
        <div>
            <div className="card h-[420px] w-full bg-pink-100 shadow-xl shadow-orange-300">
                <figure><img src={event_image} className="w-full h-[200px]" alt="Event Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{event_name}</h2>
                    <p className='font-bold text-blue-500'>{event_title}</p>
                    <div className="card-actions justify-end">
                        <p className="text-xl font-bold text-orange-600">Price: {booking_price} tk</p>
                        <Link to={`/eventDetails/${id}`} className="btn btn-sm bg-blue-300 hover:bg-orange-600 hover:text-white">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired
}
export default Event;