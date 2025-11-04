import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, setUser, updateInfo } = use(AuthContext);

    const handleUpdateProfile =(e) =>{
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;
        updateInfo({displayName, photoURL})
        .then(()=>{
            setUser({...user, displayName, photoURL})
            toast.success("Profile Update succesfull")
        })
        .catch(error =>{
            toast.error(error.code)
            setUser(user)
        })
    }
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-20 space-y-5 bg-green-200 shadow-lg rounded-2xl px-3 md:px-[30px] py-7 mx-3 md:mx-[70px] my-[10px]'>
            <div className='space-y-3 text-center'>
                <img className='h-[200px] w-[200px] mx-auto rounded-full shadow-sm border' src={user?.photoURL} alt={user?.displayName} />
                <h3 className='font-bold text-xl'>Name: {user?.displayName}</h3>
                <h3 className='font-semibold text-lg'>Email:{user?.email}</h3>
            </div>
            <div className='space-y-4'>
                <h1 className='font-bold text-5xl'>My Profile</h1>
                <form onSubmit={handleUpdateProfile}>
                    <label className="label text-black text-xl font-semibold">Name</label> <br />
                    <input type="text" required name='name' className="input input-xl" placeholder="Name" /><br />
                    <label className="label  text-black text-xl font-semibold">PhotoURL</label><br />
                    <input type="text" required name='photo' className="input  input-xl" placeholder="Photo url" />
                    <br />
                    <button type='submit' className='btn mt-2 px-5 py-6 rounded-sm hover:bg-amber-800 bg-green-500 text-white text-xl font-semibold'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Profile;