
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Event = ({ event }) => {
    const { user } = useContext(AuthContext)
    const { id, event_name, event_image, event_title, booking_price } = event;

    const location = useLocation();
    const navigate = useNavigate();

    const handlePage = () => {
        toast.warning("Login First!", {
            position: toast.POSITION.TOP_CENTER, autoClose: 1500,
        });
        setTimeout(() => {
            navigate(location.state?.from ? location.state.from : '/login');
        }, 2000);
    }

    return (
        <div data-aos="slide-down"
            data-aos-offset="100"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            <div className="card h-[420px] w-full bg-pink-100 shadow-xl shadow-orange-300">
                <figure><img src={event_image} className="w-full h-[200px]" alt="Event Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{event_name}</h2>
                    <p className='font-bold text-blue-500'>{event_title}</p>
                    <div className="card-actions justify-end">
                        <p className="text-xl font-bold text-orange-600">Price: {booking_price} tk</p>
                        {
                            user ?
                                <Link to={`/eventDetails/${id}`} className="btn btn-sm bg-blue-300 hover:bg-orange-600 hover:text-white">Details</Link>
                                :
                                <button onClick={handlePage} className="btn btn-sm bg-blue-300 hover:bg-orange-600 hover:text-white">Details</button>
                        }
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired
}
export default Event;

// import { PropTypes } from 'prop-types';
// import { useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from '../Provider/AuthProvider';


// const Event = ({ event }) => {
//     const { user } = useContext(AuthContext)
//     const { id, event_name, event_image, event_title, booking_price } = event;

//     const location = useLocation();
//     const navigate = useNavigate();

//     const handlePage = () => {
//         toast.warning("Login First!", {
//             position: toast.POSITION.TOP_CENTER, autoClose: 1500,
//           });
//           setTimeout(() => {
//             navigate(location.state?.from ? location.state.from : '/login');
//           }, 2000);
//     }

//     return (
//         <div>
//             <div className="card h-[420px] w-full bg-pink-100 shadow-xl shadow-orange-300">
//                 <figure><img src={event_image} className="w-full h-[200px]" alt="Event Image" /></figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{event_name}</h2>
//                     <p className='font-bold text-blue-500'>{event_title}</p>
//                     <div className="card-actions justify-end">
//                         <p className="text-xl font-bold text-orange-600">Price: {booking_price} tk</p>
//                         {
//                             user ?
//                                 <Link to={`/eventDetails/${id}`} className="btn btn-sm bg-blue-300 hover:bg-orange-600 hover:text-white">Details</Link>
//                                 :
//                                 <button onClick={handlePage} className="btn btn-sm bg-blue-300 hover:bg-orange-600 hover:text-white">Details</button>
//                         }
//                     </div>
//                 </div>
//             </div>
//             <ToastContainer />
//         </div>
//     );
// };

// Event.propTypes = {
//     event: PropTypes.object.isRequired
// }
// export default Event;