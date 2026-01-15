import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TestsPage.css';
import { subjectTests, generalTests } from '../data/tests';

const TestsPage = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <div className="tests-page container">
            <div className="breadcrumbs">
                <Link to="/">Ana səhifə</Link> &gt;
                <span onClick={() => setActiveCategory(null)} style={{ cursor: 'pointer', marginLeft: '5px' }}>
                    Testlər
                </span>
                {activeCategory && (
                    <>
                        &gt; <span>{activeCategory === 'subject' ? 'Mövzu Testləri' : 'Ümumi Sınaq Testləri'}</span>
                    </>
                )}
            </div>

            <div className="tests-header fade-in">
                <h1>{activeCategory === 'subject' ? 'Mövzu Testləri 📚' : activeCategory === 'general' ? 'Ümumi Sınaq Testləri 🎓' : 'Testlər 📝'}</h1>
                <p>
                    {activeCategory === 'subject'
                        ? 'Konkret mövzular üzrə biliklərinizi yoxlayın'
                        : activeCategory === 'general'
                            ? 'Tam formatda sınaq imtahanları'
                            : 'Kateqoriya seçərək imtahanlara başlayın'}
                </p>
            </div>

            {!activeCategory ? (
                <div className="category-grid fade-in">
                    <div className="category-card" onClick={() => setActiveCategory('subject')}>
                        <div className="category-icon">📚</div>
                        <h2>Mövzu Testləri</h2>
                        <p>Konstitusiya, Qanunlar və digər mövzular üzrə sınaqlar</p>
                    </div>
                    <div className="category-card" onClick={() => setActiveCategory('general')}>
                        <div className="category-icon">🎓</div>
                        <h2>Ümumi Sınaq Testləri</h2>
                        <p>Qəbul tipli və ümumi sınaq imtahanları</p>
                    </div>
                </div>
            ) : (
                <div className="fade-in">
                    <button className="back-button" onClick={() => setActiveCategory(null)}>
                        &larr; Geri qayıt
                    </button>

                    <div className="tests-list">
                        {(activeCategory === 'subject' ? subjectTests : generalTests).map((test) => (
                            <a
                                key={test.id}
                                href={test.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="test-card"
                            >
                                <div className="test-info">
                                    <span className="test-icon">
                                        {activeCategory === 'subject' ? '📘' : '✅'}
                                    </span>
                                    <span className="test-title">{test.title}</span>
                                </div>
                                <span className="test-action">Başla &rarr;</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestsPage;
