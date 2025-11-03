import React from 'react';
import { NavLink } from 'react-router';
import logo from '../Assets/pngegg.png'
import MyLink from './MyLink';
const Navber = () => {
    const links = <>
        <div className=' md:flex space-x-2 font-bold'>
            <li><MyLink to={'/'}>Home</MyLink></li>
            <li><MyLink to={'/plants'}>Plants</MyLink></li>
            <li><MyLink to={'/profile'}>My Profile</MyLink></li>
        </div>
    </>
    return (
        <div className="navbar bg-base-100  shadow-sm py-[10px] px-5 md:px-[80px] flex justify-between items-center">
            <div className="flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="px-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h1" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div className='flex items-center gap-2'>
                    <img className='w-[40px] h-[40px] md:w-[50px]  md:h-[50px]' src={logo} alt="" />
                    <div className='text-nowrap'>
                        <h1 className='text-xl md:text-4xl font-bold text-green-700'>GREEN NEST</h1>
                        <h4 className='text-lg md:text-2xl'>PLANT STORE</h4>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex justify-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="">
                <button className='btn px-10 py-4 bg-green-700 hover:bg-amber-600 font-semibold text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navber;