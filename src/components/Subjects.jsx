import React from 'react';
import './Subjects.css';
import { Link } from 'react-router-dom';

const subjectsData = [
    { id: 1, title: 'Məntiq', description: 'Analitik düşünmə qabiliyyətinizi inkişaf etdirin.', icon: '🧠', link: '#logic' },
    { id: 2, title: 'Ana dili', description: 'Azərbaycan dilinin qrammatikası və leksikası.', icon: '📚', link: '#language' },
    { id: 3, title: 'Qanunvericilik', description: 'Konstitusiya və dövlət qulluğu haqqında qanunlar.', icon: '⚖️', link: '#legislation' },
    { id: 4, title: 'İnformatika', description: 'Kompüter bilikləri və informasiya texnologiyaları.', icon: '💻', link: '#informatics' },
];

const Subjects = () => {
    return (
        <section className="subjects-section" id="subjects">
            <div className="container">
                <h2 className="section-title">Fənnlər</h2>
                <div className="subjects-grid">
                    {subjectsData.map((subject) => (
                        <div key={subject.id} className="subject-card">
                            <div className="card-icon">{subject.icon}</div>
                            <h3>{subject.title}</h3>
                            <p>{subject.description}</p>
                            {subject.id === 3 ? (
                                <Link to="/subjects/legislation" className="card-link">Ətraflı &rarr;</Link>
                            ) : (
                                <a href={subject.link} className="card-link">Ətraflı &rarr;</a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Subjects;
