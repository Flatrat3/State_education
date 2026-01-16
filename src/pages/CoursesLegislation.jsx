
import React from 'react';
import './CoursesLegislation.css';

const courseLinks = [
    {
        id: 1,
        title: "Dövlət Qulluğu | Qanunvericilik Fənni üzrə Qızıl Qaydalar",
        url: "https://www.youtube.com/playlist?list=PLn49-ZF7TEGPq2YGDxgluVlYkCLsnR9Dl",
        icon: "🎯"
    },
    {
        id: 2,
        title: "Dövlət Qulluğu (2025) | Qanunvericilik | Ödənişsiz dərslər",
        url: "https://www.youtube.com/playlist?list=PLn49-ZF7TEGOX3HVYpjP_wnpA5Im-SWfS",
        icon: "📚"
    },
    {
        id: 3,
        title: "Dövlət Qulluğu – Qanunvericilik Dərsləri",
        url: "https://www.youtube.com/playlist?list=PLn49-ZF7TEGPEakD8V5QJpvFA5PoMgaGI",
        icon: "🏛️"
    },
    {
        id: 4,
        title: "Dövlət Qulluğu – Qanunvericilik Mövzuları (Qısa izahlar)",
        url: "https://www.youtube.com/playlist?list=PLn49-ZF7TEGOKCVxBI-Q0DA8i_8fwkTCE",
        icon: "📝"
    },
    {
        id: 5,
        title: "DİM – Toplu İzahlar",
        url: "https://www.youtube.com/playlist?list=PLn49-ZF7TEGNimxt8q0shLagztkMrNmWL",
        icon: "🧠"
    },
    {
        id: 6,
        title: "Podcastlar",
        url: "https://www.youtube.com/playlist?list=PLn49-ZF7TEGOzE3DqeEJE3XwgcOPKdI7c",
        icon: "🎧"
    }
];

const CoursesLegislation = () => {
    return (
        <div className="courses-page">
            <div className="container">
                <h2 className="section-title">Qanunvericilik - Kurslar</h2>
                <div className="links-grid">
                    {courseLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-card"
                        >
                            <span className="link-icon">{link.icon}</span>
                            <span className="link-number">{link.id}.</span>
                            <span className="link-text">{link.title}</span>
                            <span className="link-arrow">🔗</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesLegislation;
