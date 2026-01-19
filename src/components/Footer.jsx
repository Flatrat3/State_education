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
                        <a href="https://www.youtube.com/@dovlet_qullugu" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" fill="#FF0000" stroke="currentColor" strokeWidth="0" />
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
                            </svg>
                            <span>YouTube</span>
                        </a>
                        <a href="https://www.instagram.com/dovlet_qulluguna_hazirliq___/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span>Instagram</span>
                        </a>
                        <a href="https://t.me/dovlet_qullugu_asim" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            <span>Telegram</span>
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
