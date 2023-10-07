import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaYoutube, FaWhatsapp, FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const RightSidebar = () => {
    return (
        <div className="pr-2 rounded bg-gradient-to-r from-orange-100 from-10% via-sky-100 via-30% to-emerald-100 to-90% ...">

            <div className="text-2xl font-bold ml-2 mt-2">Follow us on</div>
            <div className="my-2 pb-8">
                <a href="https://www.facebook.com/" className="flex items-center gap-3 mx-2 border rounded-t-lg p-4">
                    <FaFacebook className="text-xl text-blue-500"></FaFacebook>
                    Facebook
                </a>
                <a href="https://twitter.com/" className="flex items-center gap-3 mx-2 border-x p-4">
                    <FaTwitterSquare className="text-xl text-blue-500"></FaTwitterSquare>
                    Twitter
                </a>
                <a href="https://www.instagram.com/" className="flex items-center gap-3 mx-2 border rounded-b-lg p-4">
                    <FaInstagramSquare className="text-xl text-orange-600"></FaInstagramSquare>
                    Instagram
                </a>
                <a href="https://www.youtube.com/" className="flex items-center gap-3 mx-2 border rounded-b-lg p-4">
                    <FaYoutube className="text-xl text-red-600"></FaYoutube>
                    Youtube
                </a>
            </div>

            <div className="text-2xl font-bold ml-2 mt-2">Contact with us</div>
            <div className="my-2 pb-8">
                <a href="+1 (456) 789-0123" className="flex items-center gap-3 mx-2 border rounded-t-lg p-4">
                    <FaWhatsapp className="text-xl text-green-500"></FaWhatsapp>
                    Whatsapp
                </a>
                <a href="" className="flex items-center gap-3 mx-2 border-x p-4">
                    <FaMobileAlt className="text-xl text-blue-500"></FaMobileAlt>
                    +1 (456) 789-0123
                </a>
                <a href="https://corporate.e.m.@gmail.com/" className="flex items-center gap-3 mx-2 border rounded-b-lg p-4">
                    <AiOutlineMail className="text-2xl font-bold text-red-600"></AiOutlineMail>
                    corporate.e.m.@gmail.com
                </a>
            </div>

            <div className="bg-slate-200 rounded">
                
            </div>
        </div>
    );
};

export default RightSidebar;