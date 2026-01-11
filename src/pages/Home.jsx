import React from 'react';
import Hero from '../components/Hero';
import YouTubeSection from '../components/YouTubeSection';
import Subjects from '../components/Subjects';
import Tests from '../components/Tests';
import Pricing from '../components/Pricing';
import PdfSection from '../components/PdfSection';

const Home = () => {
    return (
        <>
            <Hero />
            <YouTubeSection />
            <Subjects />
            <Tests />
            <Pricing />
            <PdfSection />
        </>
    );
};

export default Home;
