import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const { user, userSignOut } = useContext(AuthContext);
    const links = <>
        <li className="text-orange-400 text-md font-bold"><NavLink to='/'>Home</NavLink></li>
        <li className="text-orange-400 text-md font-semibold"><NavLink to='/all-equipment'>AIl Sports Equipment</NavLink></li>
        {
            user &&
            <div className="flex">
                <li className="text-orange-400 text-md font-semibold"><NavLink to='/add-equipment'>Add Equipment</NavLink></li>
                <li className="text-orange-400 text-md font-semibold"><NavLink to='/my-equipment'>My Equipment List</NavLink></li>
            </div>
        }
        <li className="text-orange-400 text-md font-semibold"><NavLink to='/about-us'>About Us</NavLink></li>
        {
            !user &&
            <div className="flex">
                <li className="text-orange-400 text-md font-semibold"><NavLink to='/login'>Login</NavLink></li>
                <li className="text-orange-400 text-md font-semibold"><NavLink to='/register'>Register</NavLink></li>
            </div>
        }

    </>
    return (
        <div className=" w-11/12 mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl font-extrabold tracking-wide text-white">
                        <span className="text-orange-400">Equip</span><span className="text-blue-400">Zone</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && (
                            <div className="flex items-center gap-3">
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img
                                        className="h-12 w-12 rounded-full cursor-pointer"
                                        src={user?.photoURL}
                                        alt="User"
                                    />
                                </div>
                                <Link to='/'>
                                    <button onClick={userSignOut} className="btn btn-outline btn-primary font-bold hover:scale-105 transition-transform duration-300">
                                        Log-out
                                    </button>
                                </Link>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;