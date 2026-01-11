import React from 'react';
import './PdfSection.css';

const PdfSection = () => {
    // Placeholder data - links to be replaced by actual Google Drive links provided by user
    const pdfs = [
        {
            id: 1,
            title: 'Azərbaycan Respublikasının Konstitusiyasının Şərhi',
            driveLink: 'https://drive.google.com/file/d/1hdEVs234BfrbXr9nM1C7ewl727nLjsD_/view?usp=sharing'
        },
        {
            id: 2,
            title: 'ASİM ƏHMƏD DÖVLƏT QULLUĞU QANUNVERİCİLİK BA VƏ BB ÜÇÜN DƏRS VƏSAİTİ',
            driveLink: 'https://drive.google.com/file/d/1pVHKzu3hn0VyeHlgLRq8xkL93t7qV7oM/view?usp=sharing'
        },
        {
            id: 3,
            title: 'ASİM ƏHMƏD DÖVLƏT QULLUĞU QANUNVERİCİLİK AC ÜÇÜN DƏRS VƏSAİTİ',
            driveLink: 'https://drive.google.com/file/d/1mGC3YPl_ZfktNSfYxOxLu-QqhDynxvbm/view?usp=sharing'
        },
    ];

    return (
        <section className="pdf-section" id="resources">
            <div className="container">
                <div className="section-header fade-in">
                    <h2>Faydalı Vəsaitlər</h2>
                    <p>İmtahanlara hazırlıq üçün vacib sənədlər və vəsaitlər</p>
                </div>
                <div className="pdf-grid">
                    {pdfs.map((pdf) => (
                        <div key={pdf.id} className="pdf-card fade-in">
                            <div className="pdf-icon">
                                <i className="fas fa-file-pdf"></i>
                                {/* Validating unicode fallback if font-awesome isn't loaded: 📄 */}
                                <span>📄</span>
                            </div>
                            <h3>{pdf.title}</h3>
                            <a href={pdf.driveLink} target="_blank" rel="noopener noreferrer" className="download-btn">
                                Yüklə
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PdfSection;
