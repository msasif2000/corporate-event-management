import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const TermsCondition = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-2xl font-bold">Terms and Conditions for Registering an Account</h2>
            <div className="lg:mx-16">
                <p className="text-xl"><span className="font-bold">Acceptance of Terms: </span>By registering an account on the Corporate Event Management website, you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please do not proceed with registration.</p>
                <p className="text-xl"><span className="font-bold">Account Information: </span>You are responsible for providing accurate and up-to-date information during the registration process. This includes your name, contact information, and any other required details.

                </p>
                <p className="text-xl"><span className="font-bold">Account Security: </span>You are solely responsible for maintaining the security of your account credentials (username and password). You must not share your account details with others. Notify us immediately if you suspect any unauthorized access to your account.</p>
                <p className="text-xl"><span className="font-bold">Termination of Account: </span>We reserve the right to suspend or terminate your account at our discretion, especially if we believe you have violated these terms and conditions.</p>
                <p className="text-xl"><span className="font-bold">Privacy Policy: </span>Your use of this website is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
                <p className="text-xl"><span className="font-bold">Prohibited Activities: </span></p>
                <p className="text-xl"><span className="font-bold">Liability: </span>We are not liable for any loss or damage that may occur as a result of your use of our website or services. You use our services at your own risk.

                </p>
                <p className="text-xl"><span className="font-bold">Governing Law: </span>These terms and conditions are governed by the laws of [Your Jurisdiction]. Any disputes arising from the use of our website or services will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>
            </div>
            <div className="flex justify-center my-8">
                <Link to="/register" className="text-white"><button className="bg-orange-600 py-1 px-2 rounded font-bold">Back to Register</button></Link>
            </div>
        </div>
    );
};

export default TermsCondition;