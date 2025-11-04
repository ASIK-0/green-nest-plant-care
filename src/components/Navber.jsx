import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../Assets/pngegg.png'
import MyLink from './MyLink';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
const Navber = () => {
    const { user, logOut } = use(AuthContext)
    const links = <>
        <div className=' md:flex space-x-2 font-bold'>
            <li><MyLink to={'/'}>Home</MyLink></li>
            <li><MyLink to={'/plants'}>Plants</MyLink></li>
            <li><MyLink to={'/profile'}>My Profile</MyLink></li>
        </div>
    </>
    const handleSignOut = () => {
        logOut()
            .then(() => {
                alert("Your Logged Out Successfully")
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="navbar bg-base-100  shadow-sm py-[9px] px-3 md:px-[70px] flex justify-between items-center">
            <div className="flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="pr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h1" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <NavLink to={'/'} className='flex items-center gap-2'>
                    <img className='w-[30px] h-[30px] md:w-[50px]  md:h-[50px]' src={logo} alt="" />
                    <div className='text-nowrap'>
                        <h1 className='text-lg md:text-4xl font-bold text-green-700'>GREEN NEST</h1>
                        <h4 className='text-[12px] md:text-2xl'>PLANT STORE</h4>
                    </div>
                </NavLink>
            </div>
            <div className="flex-1 flex justify-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="">
                {user ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                        <img src={user?.photoURL || "https://via.placeholder.com/88"} className="h-[50px] w-[50px] border-2 border-green-800 shadow-amber-600 rounded-full mx-auto" alt="User" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                        <div>
                            <p className='font-bold text-lg'>{user?.displayName}</p><p className='text-[12px] mt-0'>{user?.email}</p>
                        </div>
                        <div className='border-b-1 my-2'></div>
                        <li><button onClick={handleSignOut} className='py-2 bg-green-700 hover:bg-amber-600 font-semibold text-white'>Sign Out</button></li>
                    </ul>
                </div> : <Link to={'/signin'} className='btn px-6 md:px-10 py-4 bg-green-700 hover:bg-amber-600 font-semibold text-white'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navber;