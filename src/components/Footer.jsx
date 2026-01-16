import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Dövlət Qulluğu</h3>
                    <p>Sizin uğurunuz bizim hədəfimizdir. Peşəkar komanda ilə imtahanlara hazırlaşın.</p>
                </div>

                <div className="footer-section">
                    <h4>Bölmələr</h4>
                    <ul>
                        <li><Link to="/">Ana səhifə</Link></li>
                        <li><Link to="/#subjects">Fənnlər</Link></li>
                        <li><Link to="/tests">Sınaqlar</Link></li>
                        <li><Link to="/#pricing">Qiymətlər</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Müəllimlər</h4>
                    <ul>
                        <li><a href="#logic-teacher">Məntiq</a></li>
                        <li><a href="#language-teacher">Ana dili</a></li>
                        <li><Link to="/teachers/legislation">Qanunvericilik</Link></li>
                        <li><a href="#informatics-teacher">İnformatika</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Əlaqə</h4>
                    <p>Email: info@dovletqullugu.az</p>
                    <p>Tel: +994 70 803 83 65</p>
                    <div className="social-links">
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            📺 YouTube
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            📸 Instagram
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            📘 Facebook
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Dövlət Qulluğu Hazırlığı. Bütün hüquqlar qorunur.</p>
            </div>
        </footer>
    );
};

export default Footer;
