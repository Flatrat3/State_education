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
import ExamSchedule from '../components/ExamSchedule';

import Advertising from '../components/Advertising';

const Home = () => {
    return (
        <>
            <Advertising />
            <Motivation />
            <DailyQuestion />
            <ExamSchedule />
            <Hero />
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
