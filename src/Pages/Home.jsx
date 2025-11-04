import React from 'react';
import HeroSection from '../components/HeroSection';
import TopRatedPlants from './TopRatedPlants';
import PlantCaretips from '../components/PlantCaretips';
import GreenExpert from '../components/GreenExpert';

const Home = () => {
    return (
        <div className='bg-green-100'>
            <HeroSection></HeroSection>
            <TopRatedPlants></TopRatedPlants>
            <PlantCaretips></PlantCaretips>
            <GreenExpert></GreenExpert>
        </div>
    );
};

export default Home;