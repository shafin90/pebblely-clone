import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import Companies from '../../components/Companies/Companies';
import VideoSection from '../../components/VideoSection/VideoSection';
import Section3Home from '../../components/Section3Home/Section3Home';
import Section4Home from '../../components/Section4Home/Section4Home';
import Section5Home from '../../components/Section5Home/Section5Home';
import Section6Home from '../../components/Section6Home/Section6Home';
import Section7Home from '../../components/Section7Home/Section7Home';

const Home = () => {
    return (
        <div className=' w-full'>
            <Navbar />
            <HeroSection />
            <Companies />
            <VideoSection />
            <Section3Home />
            <Section4Home />
            <Section5Home />
            <Section6Home />
            <Section7Home />
        </div>
    );
};

export default Home;