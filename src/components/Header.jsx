import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <h1>Dövlət Qulluğu</h1>
                    </Link>
                </div>
                <button
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Ana səhifə</Link></li>
                        <li
                            className="nav-item-dropdown"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Click support for mobile
                        >
                            <span className="nav-link" style={{ cursor: 'pointer' }}>Fənnlər ▾</span>
                            {(isDropdownOpen) && (
                                <ul className="dropdown-menu">
                                    <li><a href="#logic" onClick={() => setIsMobileMenuOpen(false)}>Məntiq</a></li>
                                    <li><a href="#language" onClick={() => setIsMobileMenuOpen(false)}>Ana dili</a></li>
                                    <li><Link to="/subjects/legislation" onClick={() => setIsMobileMenuOpen(false)}>Qanunvericilik</Link></li>
                                    <li><a href="#informatics" onClick={() => setIsMobileMenuOpen(false)}>İnformatika</a></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/tests" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Testlər</Link></li>
                        <li><a href="#pricing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Qiymətlər</a></li>
                    </ul>
                </nav>
                <button className="cta-button" onClick={() => navigate('/tests')}>Başla</button>
            </div>
        </header>
    );
};

export default Header;
