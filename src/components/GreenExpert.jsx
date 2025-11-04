import React from 'react';

const experts = [
    {
        id: 1,
        name: "Dr. Elara Vance",
        specialization: "Orchid & Tropical Plant Disease Diagnostics",
        image: "https://i.pinimg.com/736x/a7/b7/7b/a7b77b6db207a8157409f248ded989bb.jpg",
    },
    {
        id: 2,
        name: "Mr. Harun Rahman",
        specialization: "Indoor Plant Propagation & Soil Mixes",
        image: "https://i.pinimg.com/736x/92/b6/9c/92b69c518a833b93fafe3cca2962e963.jpg",
    },
    {
        id: 3,
        name: "Ms. Lina Karim",
        specialization: "Succulent Care & Watering Schedules",
        image: "https://i.pinimg.com/736x/a6/ec/0b/a6ec0b98bb69bd1db2e1b06b22dfb2be.jpg",
    },
    {
        id: 4,
        name: "Prof. Omar Siddique",
        specialization: "Pest Management for Houseplants",
        image: "https://i.pinimg.com/1200x/24/5d/70/245d7064468a6a3d2d6597c15ffda3d4.jpg",
    },
];

const GreenExpert = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className='text-3xl md:text-7xl font-bold text-center mb-8'>Meet Our Green Experts</h2>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {experts.map(expert => (
                    <div key={expert.id} className='bg-white shadow-lg rounded-lg p-4 text-center'>
                        <img
                            src={expert.image}
                            alt={expert.name}
                            className='w-full h-48 object-cover rounded-lg mb-4'
                        />
                        <h3 className='text-xl font-semibold mb-2'>{expert.name}</h3>
                        <p className='text-gray-600 text-sm'>{expert.specialization}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GreenExpert;