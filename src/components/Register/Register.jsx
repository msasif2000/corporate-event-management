
import { Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const { googleLogin, createUser } = useContext(AuthContext);

    const handleRegister = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
        
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen  bg-gradient-to-r from-cyan-500 to-indigo-500...">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Your Account!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-l from-indigo-500 ...">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white py-2 rounded-xl font-bold bg-orange-600">Register</button>
                            </div>
                            <div className="text-center">
                                <p>or</p>
                                <p>Register with</p>
                                <div className="flex gap-4 justify-center pt-2">
                                    <FaGoogle onClick={handleGoogleLogin} className="text-4xl p-2 bg-orange-500 rounded-full hover:bg-white"></FaGoogle>
                                    <FaFacebook className="text-4xl p-2 bg-orange-500 rounded-full hover:bg-white"></FaFacebook>
                                    <FaGithub className="text-4xl p-2 bg-orange-500 rounded-full hover:bg-white"></FaGithub>
                                </div>
                            </div>
                            <label className="label">
                                <p>Already have an Account?<Link to="/login" className="underline">Login</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;