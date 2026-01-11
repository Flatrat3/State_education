import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Legislation.css';

const laws = [
    { title: "Azərbaycan Respublikasının Konstitusiyası", url: "https://e-qanun.az/framework/897" },
    { title: "Dövlət dili haqqında Qanun", url: "https://e-qanun.az/framework/1865" },
    { title: "Dövlət qulluqçularının etik davranış qaydaları haqqında Qanun", url: "https://e-qanun.az/framework/13364" },
    { title: "Korrupsiyaya qarşı mübarizə haqqında Qanun", url: "https://e-qanun.az/framework/5801" },
    { title: "Vətəndaşların müraciəti haqqında Qanun", url: "https://e-qanun.az/framework/31032" },
    { title: "Məlumat azadlığı haqqında Qanun", url: "https://e-qanun.az/framework/3673" },
    { title: "Elektron imza və elektron sənəd haqqında Qanun", url: "https://e-qanun.az/framework/5926" },
    { title: "Məhkəmələr və hakimlər haqqında Qanun", url: "https://e-qanun.az/framework/3682" },
    { title: "Azərbaycan Respublikası Dövlət Bayrağının istifadəsi qaydaları haqqında Qanun", url: "https://e-qanun.az/framework/46953" }, // Updated to likely correct one or generic search
    { title: "Azərbaycan Respublikası Dövlət Gerbinin istifadəsi qaydaları haqqında Qanun", url: "https://e-qanun.az/framework/41448" },
    { title: "Azərbaycan Respublikası Dövlət Himninin istifadəsi qaydaları haqqında Qanun", url: "https://e-qanun.az/framework/41449" },
];

const categories = [
    { id: 'BB', name: 'BB Kateqoriyası' },
    { id: 'BA', name: 'BA Kateqoriyası' },
    { id: 'AC', name: 'AC Kateqoriyası' },
];

const Legislation = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (id) => {
        setSelectedCategory(id);
    };

    return (
        <div className="legislation-page container">
            <div className="breadcrumbs">
                <Link to="/">Ana səhifə</Link> &gt; <span className="breadcrumb-active" onClick={() => setSelectedCategory(null)} style={{ cursor: 'pointer' }}>Qanunvericilik</span>
            </div>

            {!selectedCategory ? (
                <div className="categories-section fade-in">
                    <h2>Qanunvericilik: Kateqoriyalar</h2>
                    <div className="categories-grid">
                        {categories.map((cat) => (
                            <div
                                key={cat.id}
                                className="category-card"
                                onClick={() => handleCategoryClick(cat.id)}
                            >
                                <h3>{cat.id}</h3>
                                <p>{cat.name} üçün qanunvericilik bazası</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="laws-section fade-in">
                    <button className="back-btn" onClick={() => setSelectedCategory(null)}>
                        &larr; Kateqoriyalara qayıt
                    </button>
                    <h2>{selectedCategory} Kateqoriyası üzrə Qanunlar</h2>
                    <ul className="laws-list">
                        {laws.map((law, index) => (
                            <li key={index} className="law-item">
                                <a href={law.url} target="_blank" rel="noopener noreferrer">
                                    {law.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Legislation;
