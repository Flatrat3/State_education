import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <h2 className="section-title">Qiymət Paketləri</h2>
                <div className="pricing-grid">
                    <div className="pricing-card basic">
                        <div className="pricing-header">
                            <h3>Başlanğıc</h3>
                            <div className="price">70 AZN<span>/ay</span></div>
                        </div>
                        <ul className="features-list">
                            <li>✅ Bütün fənlər üzrə video dərslər</li>
                            <li>✅ 5 Ümumi sınaq</li>
                            <li>❌ Fərdi inkişaf planı</li>
                            <li>❌ Canlı sual-cavab</li>
                        </ul>
                        <button className="pricing-btn">Seçmək</button>
                    </div>

                    <div className="pricing-card popular">
                        <div className="popular-tag">Ən Populyar</div>
                        <div className="pricing-header">
                            <h3>Professional</h3>
                            <div className="price">100 AZN<span>/ay</span></div>
                        </div>
                        <ul className="features-list">
                            <li>✅ Bütün fənlər üzrə video dərslər</li>
                            <li>✅ Limitsiz sınaqlar</li>
                            <li>✅ Fərdi inkişaf planı</li>
                            <li>✅ Həftəlik canlı dərslər</li>
                        </ul>
                        <button className="pricing-btn primary">Seçmək</button>
                    </div>

                    <div className="pricing-card premium">
                        <div className="pricing-header">
                            <h3>VIP</h3>
                            <div className="price">200 AZN<span>/ay</span></div>
                        </div>
                        <ul className="features-list">
                            <li>✅ Bütün imkanlar daxildir</li>
                            <li>✅ Şəxsi mentor dəstəyi</li>
                            <li>✅ Özəl materiallar</li>
                            <li>✅ Zəmanətli nəticə</li>
                        </ul>
                        <button className="pricing-btn">Seçmək</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
