import { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../components/Provider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:p-12 p-4">
                <p className="flex justify-center mx-auto">
                    {
                        user?.photoURL ? <img src={user.photoURL} alt="" /> : <img src="https://i.ibb.co/R3PnR7z/user.png" alt=""/>
                    }
                </p>
                <p className="text-center font-bold">Name:  {user?.displayName}</p>
                <p className="text-center font-bold">Email: {user.email}</p>

            </div>
        </div>
    );
};

export default Profile;