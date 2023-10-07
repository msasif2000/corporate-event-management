import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mt-12">
            <img src="https://i.ibb.co/HpCS8fw/error.jpg" alt="" className="w-1/3 flex justify-center mx-auto" />
            <button className="flex justify-center mx-auto mt-8 "><Link to="/" className=" bg-orange-600 text-white">Go to Home</Link></button>
        </div>
    );
};

export default ErrorPage;