
import React from 'react';
import './UsefulLinksLegislation.css';

const legislationLinks = [
    {
        id: 1,
        title: "Azərbaycan Respublikasının Dövlət Bayrağının İstifadə Qaydaları",
        url: "https://drive.google.com/file/d/1hDs01D0INLVF4n-YvVmd3Esm95iP8EyE/view?usp=sharing",
        icon: "📘"
    },
    {
        id: 2,
        title: "Azərbaycan Respublikasının Dövlət Gerbi haqqında Qanun",
        url: "https://drive.google.com/file/d/1qtJzqTpX1TEHg-isWEurbtX-wu7GV8IV/view?usp=sharing",
        icon: "🛡️"
    },
    {
        id: 3,
        title: "Dövlət Qulluğu Haqqında Qanunun Əsas Anlayışları və Strukturu",
        url: "https://drive.google.com/file/d/1OCavHY-WDbR_X-qFW2kJju7lGhw-vy0l/view?usp=sharing",
        icon: "🏛️"
    },
    {
        id: 4,
        title: "Dövlət Qulluqçusunun Yolu",
        url: "https://drive.google.com/file/d/1-HdhB1qMIWzkzw_c-6oPXv3omGfsQyoU/view?usp=sharing",
        icon: "🧭"
    },
    {
        id: 5,
        title: "Elektron İmza və Sənəd",
        url: "https://drive.google.com/file/d/1CuOhbpcd8A_jquaTHBgXjayVXgV4UUBl/view?usp=sharing",
        icon: "💻"
    },
    {
        id: 6,
        title: "“Dövlət qulluqçularının etik davranış qaydaları haqqında” AR Qanunu",
        url: "https://drive.google.com/file/d/1bkquEO8fsbNmB6qFIzmUmfwbsWE0crX1/view?usp=sharing",
        icon: "⚖️"
    },
    {
        id: 7,
        title: "Azərbaycan Respublikasında İcra Hakimiyyəti",
        url: "https://drive.google.com/file/d/1fm9jYgixgaKmibZzS08x_egBKg2s5T0H/view?usp=sharing",
        icon: "🏢"
    },
    {
        id: 8,
        title: "Azərbaycan Respublikası Konstitusiyasında Məhkəmə Hakimiyyəti",
        url: "https://drive.google.com/file/d/1os--Jxx84ndlNQraHU1aCDwuGbp60jG7/view?usp=sharing",
        icon: "⚖️"
    },
    {
        id: 9,
        title: "Kargüzarlıq Təlimatı – 1",
        url: "https://drive.google.com/file/d/1np5_ER7pfU27s-8q5OuuygjkuQ6-kzL4/view?usp=sharing",
        icon: "🗂️"
    },
    {
        id: 10,
        title: "Kargüzarlıq Təlimatı – 2",
        url: "https://drive.google.com/file/d/1VfdzBGdd2qBkVcN_qHI_pvMyYLIIq27N/view?usp=sharing",
        icon: "🗂️"
    },
    {
        id: 11,
        title: "Azərbaycan Respublikası Konstitusiyasının Ümumi Müddəaları",
        url: "https://drive.google.com/file/d/13T3WEzJDdwgUoGHMa2cNELeHq0KDzrGF/view?usp=sharing",
        icon: "📜"
    },
    {
        id: 12,
        title: "Konstitusiyada Əsas İnsan Hüquqları və Azadlıqları (III Fəsil)",
        url: "https://drive.google.com/file/d/1KLGoMXHL3xPlYR7A5LBP0DwinlhIzl0a/view?usp=sharing",
        icon: "🧑⚖️"
    },
    {
        id: 13,
        title: "“Korrupsiyaya qarşı mübarizə haqqında” AR Qanunu",
        url: "https://drive.google.com/file/d/1nKOqOe4DLRv70WSxSklRCGQQxgPW6dQx/view?usp=sharing",
        icon: "🚫"
    },
    {
        id: 14,
        title: "Azərbaycan Respublikasında Məhkəmə Hakimiyyəti",
        url: "https://drive.google.com/file/d/1bBPvzQ3qgPoK8keKHwDuxwbdKaXC84nx/view?usp=sharing",
        icon: "⚖️"
    },
    {
        id: 15,
        title: "Konstitusiyada Məhkəmə Hakimiyyəti (variant 2)",
        url: "https://drive.google.com/file/d/1P5FCd2D1wC0K7FHQ4SZbdkL30yG-9Hbp/view?usp=sharing",
        icon: "⚖️"
    },
    {
        id: 16,
        title: "Konstitusiyada Məhkəmə Hakimiyyəti (variant 3)",
        url: "https://drive.google.com/file/d/1SB-y2iRZMPMFYiULScU24zXtBs0onUBJ/view?usp=sharing",
        icon: "⚖️"
    },
    {
        id: 17,
        title: "Azərbaycanın Konstitusiya Arxitekturası: Naxçıvan MR və Bələdiyyələr",
        url: "https://drive.google.com/file/d/1SzLoqaw60cADT6fTy_YwRi-dEiYnQ7ca/view?usp=sharing",
        icon: "🏘️"
    },
    {
        id: 18,
        title: "Azərbaycan Respublikasında Qanunvericilik Hakimiyyəti",
        url: "https://drive.google.com/file/d/1POqKZV8DHKyzSeY96_MzTllJjhs2qIMb/view?usp=sharing",
        icon: "🏛️"
    },
    {
        id: 19,
        title: "“Vətəndaşların Müraciətləri Haqqında” Qanun",
        url: "https://drive.google.com/file/d/16FNZmC45aArLdftcdrqgyFJdDIWcpaaZ/view?usp=sharing",
        icon: "📨"
    }
];

const UsefulLinksLegislation = () => {
    return (
        <div className="useful-links-page">
            <div className="container">
                <h2 className="section-title">Qanunvericilik - Faydalı Linklər</h2>
                <div className="links-grid">
                    {legislationLinks.map((link) => (
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

export default UsefulLinksLegislation;
