import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css'
import { GrUserManager } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const photoURL = user?.photoURL;
    const handleLogout = () => {
        userLogout()
            .then(result => {
                console.log(result)
                navigate(location.state?.from ? location.state.from : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Recent Blogs</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        {
            user ?
                <li><NavLink to="/profile">Your Profile</NavLink></li>
                :
                ''
        }

    </>
    return (
        <div className="mb-4 ">
            <div className="navbar bg-gradient-to-r from-orange-100 from-10% via-sky-100 via-30% to-emerald-100 to-90% ...">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex md:-ml-[250px]">
                    <ul className="menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end md:gap-2 gap-1">
                    {
                        user ?
                            <h1 className="text-xl font-bold text-blue-600 flex lg:flex hidden">{user.email}</h1>
                            :
                            ''
                    }
                    {
                        user ?
                            <>
                                {
                                    photoURL ?
                                        <Link to="/profile"><img src={user.photoURL} alt="" className="w-10 rounded-full bg-blue-300 p-1" /></Link>
                                        :
                                        <Link to="/profile"><img src="https://i.ibb.co/R3PnR7z/user.png" alt="" className="w-10 rounded-full bg-blue-300 p-1" /></Link>
                                }
                            </>

                            :
                            <GrUserManager className="text-4xl rounded-full p-1 bg-blue-300"></GrUserManager>
                    }
                    {
                        user ?
                            <button onClick={handleLogout} className="bg-orange-600 py-1 px-4 text-white font-bold rounded">Logout</button>
                            :
                            <Link to="/login" className="bg-orange-600 py-1 px-4 text-white font-bold rounded">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;