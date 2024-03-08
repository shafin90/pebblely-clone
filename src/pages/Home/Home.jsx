import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Companies from '../../components/Companies/Companies';

const Home = () => {
    return (
        <div className=' w-full'>
            <Navbar/>
            <HeroSection/>
            <Companies/>
        </div>
    );
};

export default Home;