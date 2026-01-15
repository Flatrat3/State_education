import React from 'react';
import Hero from '../components/Hero';
import YouTubeSection from '../components/YouTubeSection';
import Subjects from '../components/Subjects';
import Tests from '../components/Tests';
import Pricing from '../components/Pricing';
import PdfSection from '../components/PdfSection';
import DailyQuestion from '../components/DailyQuestion';
import Motivation from '../components/Motivation';
import RandomTest from '../components/RandomTest';

const Home = () => {
    return (
        <>
            <Motivation />
            <Hero />
            <DailyQuestion />
            <RandomTest />
            <YouTubeSection />
            <Subjects />
            <Tests />
            <Pricing />
            <PdfSection />
        </>
    );
};

export default Home;
