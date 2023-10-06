import { NavLink } from "react-router-dom";
import './Navbar.css'
import { GrUserManager } from "react-icons/gr";

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blogs">Recent Blogs</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/career">Build Your Career</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                <div className="navbar-center hidden md:flex">
                    <ul className="menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <GrUserManager className="text-4xl rounded-full p-1 bg-blue-300"></GrUserManager>
                    <a className="bg-orange-600 py-1 px-4 text-white font-bold rounded">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;