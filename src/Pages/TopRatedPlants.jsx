import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router';

const TopRatedPlants = () => {
    const { plants } = useContext(AuthContext);
    const top6 = plants.slice(0, 6);
    console.log(top6)
    return (
        <div className='text-center space-y-4'>
            <h1 className='text-3xl md:text-7xl font-bold'>Top Rated Indoor Plants</h1>
            <p className='text-2xl text-gray-800'>Explore, Care, and Grow Your Indoor Jungle</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-1.5 px-3 md:px-[70px]'>
                {
                    top6.map((plant) => (
                        <div>
                            <div className="card bg-base-100 shadow-sm hover:shadow-lg transition">
                                <figure className="px-5 pt-5">
                                    <img
                                        src={plant.image}
                                        alt={plant.plantName}
                                        className="rounded-xl w-full max-h-100 object-cover"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl font-semibold">{plant.plantName}</h2>
                                    <h3 className='text-green-500'>{plant.category}</h3>
                                    <p className="text-lg text-gray-700">
                                        <span className="font-semibold">Price: ${plant.price}
                                        </span> • ⭐ {plant.rating}
                                    </p>

                                    <div className="card-actions mt-3 w-full">
                                        <Link to={`/plantsDetails/${plant.plantId}`} className='my-btn w-full text-center block'>View Details</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default TopRatedPlants;