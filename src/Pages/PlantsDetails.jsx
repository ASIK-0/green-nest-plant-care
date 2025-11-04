import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const PlantsDetails = () => {
    const { plants } = useContext(AuthContext);
    const { id } = useParams();

    if (!plants || plants.length === 0) {
        return <h1>Loading...</h1>;
    }

    const plant = plants.find(p => p.plantId === Number(id));
    if (!plant) {
        return <h1>Plant not found</h1>;
    }

    const handleBooking = (e) => {
        toast.success("Booking Successfull")
        e.preventDefault()
        e.target.reset()
    }

    return (
        <div className='bg-green-100 space-y-9 py-[41px]'>
            <div className='flex flex-col md:flex-row gap-10 bg-green-200 shadow-lg rounded-2xl px-3 md:px-[30px] mx-3 md:mx-[70px] py-[41px]'>
                <div className='md:w-1/2'>
                    <img className='h-[350px] w-full rounded-3xl' src={plant.image} alt="" />
                </div>
                <div className='md:w-1/2 space-y-9'>
                    <h1 className='font-bold text-4xl'>{plant.plantName}</h1>
                    <p className='text-xl text-wrap'>{plant.description}</p>
                    <div className='flex gap-5'>
                        <h4 className='font-bold'>⭐ {plant.rating}</h4>
                        <h4 className='font-bold'>Stoke: {plant.availableStock}</h4>
                        <h4 className='font-bold'> Price: $ {plant.price}</h4>
                    </div>
                </div>
            </div>
            <div className=' gap-10 space-y-5 bg-green-200 shadow-lg rounded-2xl px-3 md:px-[30px] mx-3 md:mx-[70px] py-[41px]'>
                <h1 className='font-bold text-5xl'>Book Consulation</h1>
                <form onSubmit={handleBooking}>
                    <label className="label text-black text-xl font-semibold">Name</label> <br />
                    <input type="text" required className="input input-xl md:w-1/3" placeholder="Name" /><br />
                    <label className="label  text-black text-xl font-semibold">Email</label><br />
                    <input type="email" required className="input  input-xl md:w-1/3" placeholder="Email" />
                    <br />
                    <button className='btn mt-2 px-5 py-6 rounded-sm hover:bg-amber-800 bg-green-500 text-white text-xl font-semibold'>Book Now</button>
                </form>
            </div>
        </div>
    );
};

export default PlantsDetails