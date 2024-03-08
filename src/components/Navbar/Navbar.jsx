import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-white  py-5 mb-14 sticky z-10 top-0 w-full px-1 md:px-16 ">

            


                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className=' font-bold'>Resources</Link></li>
                            <li><Link className=' font-bold'>Fashion</Link></li>
                            <li><Link className=' font-bold'>API</Link></li>
                            <li><Link className=' font-bold'>Pricing</Link></li>
                            <li><Link className=' font-bold'>Log in</Link></li>
                        </ul>

                    </div>
                    <a className=" flex justify-between items-center text-xl">
                        <img src="/assets/images/download.png" className=' w-[36px]' alt="" />
                        <h1 className=' font-bold ms-3'>Pebblely</h1>
                    </a>
                </div>


                <div className="navbar-center hidden lg:flex justify-between items-center">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><Link className=' text-base font-bold text-gray-600'>Resources</Link></li>
                        <li><Link className=' text-base font-bold text-gray-600'>Fashion</Link></li>
                        <li><Link className=' text-base font-bold text-gray-600'>API</Link></li>
                        <li><Link className=' text-base font-bold text-gray-600'>Pricing</Link></li>
                        <li><Link className=' text-base font-bold text-gray-600'>Log in</Link></li>
                    </ul>
                </div>


                <div className="navbar-end ">
                    <a className="btn text-base bg-amber-300 hover:bg-amber-400 font-bold text-gray-600 px-6">Get Started</a>
                </div>

            </div>
    
    );
};

export default Navbar;