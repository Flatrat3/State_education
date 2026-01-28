import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Legislation.css';

const laws = [
    { title: "Azərbaycan Respublikasının Konstitusiyası", url: "https://e-qanun.az/framework/897" },
    { title: "Dövlət qulluğu haqqında Azərbaycan Respublikasının Qanunu", url: "https://e-qanun.az/framework/4481" },
    { title: "Aylıq əlavə haqqın məbləğinin müəyyənləşdirilməsi və ödənilməsi Qaydası", url: "https://e-qanun.az/framework/1076" },
    { title: "Dövlət qulluqçularının etik davranış qaydaları haqqında Qanun", url: "https://drive.google.com/file/d/1jubXbVxTLCwb9wveCNxFcA-9NiU5Plmd/view?usp=sharing" },
    { title: "Korrupsiyaya qarşı mübarizə haqqında Qanun", url: "https://drive.google.com/file/d/1jVwWnDFP_r9ulJd6DJ-Un6d6XBxvv6GR/view?usp=sharing" },
    { title: "Məlumat azadlığı haqqında Qanun", url: "https://drive.google.com/file/d/1toGEgKiDXUZEzsoTiTG2lFTDpSlDAsxH/view?usp=sharing" },
    { title: "Vətəndaşların müraciəti haqqında Qanun", url: "https://drive.google.com/file/d/1sCxGaPRuPPxo36XK3H3mV7YMbDiIql7T/view?usp=sharing" },
    { title: "İnformasiya əldə etmək haqqında Qanun", url: "https://drive.google.com/file/d/1-86GRkQXGFCNce8cLptX3IElsKsT89Jn/view?usp=sharing" },
    { title: "Dövlət sirri haqqında ", url: "https://drive.google.com/file/d/1NgNs6SLWUYh0kdTm4-46PyXkSQIa3hsk/view?usp=sharing" },
    { title: "Normativ Hüquqi aktlar haqqında Konstitusiya qanunu ", url: "https://drive.google.com/file/d/1iCPvFalquoj6sEJsfQGYP0wqM60j5LUN/view?usp=sharing" },
    { title: "Dövlət dili haqqında Qanun", url: "https://drive.google.com/file/d/1_n2_5unAugesMUoWCmnX50lRGq874vf2/view?usp=sharing" },
    { title: "İnzibati icraat haqqında Qanun", url: "https://drive.google.com/file/d/13_MJCxtjcwJvb-P4RuGIi5R4kq-ZiY89/view?usp=sharing" },
    { title: "OMBUDSMAN haqqında Konstitusiya Qanunu", url: "https://drive.google.com/file/d/1n97J1gzv_qbtwGHIwPCZwP4RamG5vQTA/view?usp=sharing" },
    { title: "Məhkəmələr və hakimlər haqqında Qanun", url: "https://drive.google.com/file/d/10cbFn60RKDCQXkqhzSUCFfx8s3h1ritA/view?usp=sharing" },
    { title: "Elektron imza və elektron sənəd haqqında Qanun", url: "https://e-qanun.az/framework/5916" },
    { title: "AZƏRBAYCAN RESPUBLİKASININ MÜLKİ MƏCƏLLƏSİ ", url: "https://drive.google.com/file/d/1-UUe1yJ18lPtRo6Kr-_5QNqW5YjsM5xt/view?usp=sharing" },
    { title: "AZƏRBAYCAN RESPUBLİKASININ ƏMƏK MƏCƏLLƏSİ ", url: "https://drive.google.com/file/d/12XM5cFe5Al2NdM0Z_tsLWRxD7Afya-vJ/view?usp=sharing" },
    { title: "Kargüzarlığın aparılmasına dair Təlimat ", url: "https://drive.google.com/file/d/1GLDTdtpsR1wwQG6cxCPHU_40CmtfbwYO/view?usp=sharing" },
    { title: "Azərbaycan Respublikası Dövlət Bayrağının istifadəsi qaydaları haqqında Qanun", url: "https://drive.google.com/file/d/1RDszrkye_iT2ylIX1JLcTfQsaHIg_idi/view?usp=sharing" },
    { title: "Azərbaycan Respublikası Dövlət Gerbinin istifadəsi qaydaları haqqında Qanun", url: "https://drive.google.com/file/d/1xUfnKpVXEtdEr5knocYYXYRfa6lDP-7n/view?usp=sharing" },
    { title: "Azərbaycan Respublikası Dövlət Himninin istifadəsi qaydaları haqqında Qanun", url: "https://drive.google.com/file/d/11uLw3UMhq-DYI_462xwQh1Z4UNbwpQb5/view?usp=sharing" },
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

    const getFilteredLaws = () => {
        if (!selectedCategory) return [];

        const baSpecific = [
            "Normativ Hüquqi aktlar haqqında Konstitusiya qanunu",
            "İnzibati icraat haqqında Qanun",
            "OMBUDSMAN haqqında Konstitusiya Qanunu"
        ];

        const acSpecific = [
            "AZƏRBAYCAN RESPUBLİKASININ MÜLKİ MƏCƏLLƏSİ",
            "AZƏRBAYCAN RESPUBLİKASININ ƏMƏK MƏCƏLLƏSİ",
            "İnformasiya əldə etmək haqqında Qanun",
            "Dövlət sirri haqqında"
        ];

        const acExcluded = [
            "Məlumat azadlığı haqqında Qanun",
            "Vətəndaşların müraciəti haqqında Qanun"
        ];

        return laws.filter(law => {
            const title = law.title.trim();
            const isBaSpecific = baSpecific.some(t => title.includes(t.trim()));
            const isAcSpecific = acSpecific.some(t => title.includes(t.trim()));
            const isAcExcluded = acExcluded.some(t => title.includes(t.trim()));

            if (selectedCategory === 'BB') {
                // BB: Basic laws only (Exclude BA specific and AC specific)
                return !isBaSpecific && !isAcSpecific;
            } else if (selectedCategory === 'BA') {
                // BA: Basic + BA specific (Exclude AC specific)
                return !isAcSpecific;
            } else if (selectedCategory === 'AC') {
                // AC: Basic + BA specific + AC specific - AC excluded
                // Basically all minus exluded
                return !isAcExcluded;
            }
            return true;
        });
    };

    const filteredLaws = getFilteredLaws();

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
                        {filteredLaws.map((law, index) => (
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
