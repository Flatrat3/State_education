import React from 'react';
import { Link } from 'react-router-dom';
import './TestsPage.css';

const TestsPage = () => {
    return (
        <div className="tests-page container">
            <div className="breadcrumbs">
                <Link to="/">Ana səhifə</Link> &gt;
                <span style={{ marginLeft: '5px' }}>
                    Testlər
                </span>
            </div>

            <div className="tests-content-wrapper fade-in">
                <div className="contact-card">
                    <div className="whatsapp-icon-wrapper">
                        <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.458 3.486 1.332 5.01L2 22l5.164-1.353a9.92 9.92 0 0 0 4.848 1.258c5.506 0 9.988-4.482 9.988-9.988 0-2.658-1.036-5.16-2.922-7.046C17.178 3.036 14.67 2 12.012 2zm5.72 13.754c-.238.673-1.398 1.298-1.938 1.378-.49.072-1.127.127-3.268-.755-2.73-1.127-4.488-3.905-4.628-4.092-.136-.188-1.114-1.48-1.114-2.825 0-1.346.7-2.012.947-2.274.246-.262.536-.327.714-.327.179 0 .358.002.513.01.162.008.38-.063.595.452.222.532.756 1.846.82 1.977.064.13.107.283.02.457-.087.174-.13.282-.26.434-.13.153-.273.342-.39.46-.13.13-.266.27-.116.53.15.257.666 1.096 1.428 1.774.982.873 1.808 1.143 2.062 1.274.254.13.403.108.552-.065.15-.174.646-.75.82-.999.173-.25.347-.208.583-.12.238.087 1.503.708 1.761.838.257.13.43.195.492.304.062.11.062.632-.176 1.305z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h1>Testlər Bölməsi 📝</h1>
                    <p className="contact-info-text">
                        Testləri işləmək üçün zəhmət olmasa bu nömrə ilə əlaqə saxlayın:
                    </p>
                    <a 
                        href="https://wa.me/994708038365?text=Salam%2C%20testl%C9%99r%20i%C5%9Fl%C9%99m%C9%99k%20ist%C9%99yir%C9%99m." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="whatsapp-contact-btn"
                    >
                        <span className="btn-icon">💬</span>
                        <span className="btn-text">070-803-83-65</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TestsPage;
