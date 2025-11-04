import React from 'react';

const PlantCaretips = () => {
    return (
        <div>
            <div className='text-center space-y-4 px-3 md:px-[70px] '>
                <h1 className='text-3xl md:text-7xl font-bold mt-6'>Plant Care Tips</h1>
                <div className='grid md:grid-cols-3 gap-5 py-5'>
                    <div className='p-5 space-y-2.5 shadow-sm hover:shadow-lg transition bg-white rounded-lg'>
                        <img className='rounded-2xl' src="https://i.pinimg.com/736x/52/a8/60/52a8605031ba2ff8ec14e018ea24fb0b.jpg" alt="" />
                        <h2 className='text-3xl font-semibold text-green-900'>Watering</h2>
                        <p>Water when the top inch of soil feels dry. Avoid overwatering.</p>
                    </div>
                    <div className='p-5 space-y-2.5 shadow-sm hover:shadow-lg transition bg-white rounded-lg'>
                        <img className='rounded-2xl' src="https://i.pinimg.com/736x/b8/36/8d/b8368d20bea467d893e92b2b9698d9f1.jpg" alt="" />
                        <h2 className='text-3xl font-semibold text-green-900'>Sunlight</h2>
                        <p>Most indoor plants prefer bright, indirect sunlight.</p>
                    </div>
                    <div className='p-5 space-y-2.5 shadow-sm hover:shadow-lg transition bg-white rounded-lg'>
                        <img className='rounded-2xl' src="https://i.pinimg.com/736x/42/4d/c5/424dc549f8fca31c3e550a0979ed898d.jpg" alt="" />
                        <h2 className='text-3xl font-semibold text-green-900'>Fertilizing</h2>
                        <p>Feed your plants every 4–6 weeks during the growing season.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PlantCaretips;