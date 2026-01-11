import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TestsPage.css';

const subjectTests = [
    { id: 1, title: 'Konstitusiya 15 QƏBUL TİPLİ sual izahı || #3 📄', url: 'https://forms.gle/5WQ2hKb8NwGgrY2o9' },
    { id: 2, title: 'Konstitusiyadan 10 açıq tipli sualdan ibarət sınaq ✏️', url: 'https://forms.gle/Hxf75e5o8stPLtHK7' },
    { id: 3, title: 'Konstitusiya sualları 4 🏛', url: 'https://forms.gle/uXoWujrQA6y7KUFG9' },
    { id: 4, title: 'Elektron imza və Elektron sənəd haqqında mövzu sınağı 🖊', url: 'https://forms.gle/AU3T7cbqJNE8qJPWA' },
    { id: 5, title: 'Dövlət dili haqqında mövzu sınağı 📚', url: 'https://forms.gle/9VyzcMhT1ey3614g8' },
    { id: 6, title: 'Məlumat azadlığı haqqında mövzu sınağı 🔓', url: 'https://forms.gle/PRr6vvrSW1cXgErE8' },
    { id: 7, title: 'Məhkəmələr və hakimlər haqqında qanun mövzu sınağı ⚖️', url: 'https://forms.gle/Q7cRDhBbGZj1MsV19' },
    { id: 8, title: 'Dövlət bayrağının istifadəsi qaydaları mövzu sınağı 🇦🇿', url: 'https://forms.gle/j9y37cREdHqhQz3VA' },
    { id: 9, title: 'Dövlət Gerbindən istifadə qaydaları haqqında mövzu sınağı 🛡', url: 'https://forms.gle/55P3VuUYqFXP84mU8' },
    { id: 10, title: 'Dövlət Himnindən istifadə qaydaları haqqında mövzu sınağı 🎶', url: 'https://forms.gle/E8f5LUTt7mDy3a5WA' },
    { id: 11, title: 'Korrupsiyaya qarşı mübarizə mövzu sınağı 🚨', url: 'https://forms.gle/zXXKMD1y5UxpRTAM9' },
    { id: 12, title: 'Vətəndaşların müraciəti haqqında mövzu sınağı 📝', url: 'https://forms.gle/MxNeGHLQzSteate27' },
    { id: 13, title: 'Dövlət qulluqçularının etik davranış qaydaları haqqında mövzu sınağı 🤝', url: 'https://forms.gle/Wk3JCRHfNmRPhX9o8' },
    { id: 14, title: 'Mövzu sınağı: Dövlət qulluğu haqqında qanun 🏢', url: 'https://forms.gle/y5WE2Jmb88xEczua9' },
    { id: 15, title: 'Mövzu sınağı: Dövlət qulluğu haqqında qanun (hüquqlar, təminatlar və s.) ⚙️', url: 'https://forms.gle/j4HH9xrmnrmbHwwV8' },
    { id: 16, title: 'Kargüzarlıq haqqında mövzu sınağı 📂', url: 'https://forms.gle/9uwgEVu6SL6mHjgm7' },
    { id: 17, title: 'Dövlət qulluğu kateqoriyalar sınağı 🗂', url: 'https://forms.gle/jZbNqpCxhDTAuHBEA' },
    { id: 18, title: 'Dövlət qulluğu təsnifatlar sınağı 🧾', url: 'https://forms.gle/Hah8WpoEGGHUCFEJA' },
    { id: 19, title: 'Mövzu sınağı: Qanunvericilik hakimiyyəti 🏛', url: 'https://forms.gle/9Lsstzu7h6CQywM18' },
    { id: 20, title: 'Mövzu sınağı: Etik qaydalar 2 🤝', url: 'https://forms.gle/sAUzaUve4WdHtLXe7' },
    { id: 21, title: 'Mövzu sınağı: Korrupsiya 2 🚨', url: 'https://forms.gle/BD7wQEpDVZq6uHng7' },
    { id: 22, title: 'Mövzu sınağı: İcra hakimiyyəti 🏢', url: 'https://forms.gle/KyNziqxMKDimGSrR7' },
    { id: 23, title: 'Mövzu sınağı: Vətəndaşların müraciəti 2 (1-ci hissə) 📝', url: 'https://forms.gle/USPhjJ4a9p11di8F9' },
    { id: 24, title: 'Mövzu sınağı: Məhkəmə hakimiyyəti ⚖️', url: 'https://forms.gle/TRATpsciVpX847vo8' },
];

const generalTests = [
    { id: 25, title: '01 dekabr imtahan sualları 📅', url: 'https://forms.gle/ec4LqGb54noZScZt5' },
    { id: 26, title: '06 oktyabr 2024 qəbul sualları 📅', url: 'https://forms.gle/ynNsqQVjpm1ahqqQ9' },
    { id: 101, title: 'Ümumi Sınaq 1', url: 'https://forms.gle/7XDwqghuPhCabdb9A' },
    { id: 102, title: 'Ümumi Sınaq 2', url: 'https://forms.gle/2RA9ScQe578YQSjV6' },
    { id: 103, title: 'Ümumi Sınaq 3', url: 'https://forms.gle/V5reTFDYGj9JNuTV7' },
    { id: 104, title: 'Ümumi Sınaq 4', url: 'https://forms.gle/ydYe5mEku93LTydi7' },
    { id: 105, title: 'Ümumi Sınaq 5', url: 'https://forms.gle/u7AdRFDXkCxwi7BB9' },
    { id: 106, title: 'Ümumi Sınaq 6', url: 'https://forms.gle/3rYJ1TXHUz5ao6Xe9' },
    { id: 107, title: 'Ümumi Sınaq 7', url: 'https://forms.gle/UBiwehhqXsBowjZ46' },
    { id: 108, title: 'Ümumi Sınaq 8', url: 'https://forms.gle/99w1PEPEzeEpGW6d9' },
    { id: 109, title: 'Ümumi Sınaq 9', url: 'https://forms.gle/sMoU7zFgVwfQWpGc7' },
    { id: 110, title: 'Ümumi Sınaq 10', url: 'https://forms.gle/VFjKb3XvfebYs5vW9' },
    { id: 111, title: 'Ümumi Sınaq 11', url: 'https://forms.gle/T7wfFq1piGALVCEp7' },
];

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
