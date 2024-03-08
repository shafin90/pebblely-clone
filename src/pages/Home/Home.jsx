import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Companies from '../../components/Companies/Companies';
import VideoSection from '../../components/VideoSection/VideoSection';
import Section3Home from '../../components/Section3Home/Section3Home';

const Home = () => {
    return (
        <div className=' w-full'>
            <Navbar/>
            <HeroSection/>
            <Companies/>
            <VideoSection/>
            <Section3Home/>
        </div>
    );
};

export default Home;