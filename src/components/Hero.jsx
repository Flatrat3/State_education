import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/hero-main.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text fade-in">
                    <h1>Dövlət Qulluğuna <br />Bizimlə Hazırlaşın</h1>
                    <p>
                        Məntiq, İnformatika, Qanunvericilik və Azərbaycan dili üzrə mükəmməl hazırlıq platforması.
                        Sınaqlarımızla biliklərinizi yoxlayın və imtahana hazır olun.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/tests" className="primary-btn">İmtahan ver</Link>
                        <button className="secondary-btn">Daha ətraflı</button>
                    </div>
                </div>
                {/* Placeholder for Hero Image */}
                <div className="hero-image fade-in">
                    <div className="image-placeholder">
                        <img src={heroImage} alt="Civil Service Preparation" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
