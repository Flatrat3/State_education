import React from 'react';
import { Link } from 'react-router-dom';
import './TestsPage.css';

const TestsPage = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <div className="tests-page container">
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content scale-in" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setShowModal(false)} aria-label="Bağla">
                            &times;
                        </button>
                        <div className="modal-header-icon">📝</div>
                        <h2>Testlərə Giriş</h2>
                        <p className="modal-text">
                            Sınaq və mövzu testlərini işləmək üçün zəhmət olmasa bizimlə əlaqə saxlayın.
                        </p>
                        <div className="modal-phone-container">
                            <span className="phone-label">Əlaqə nömrəsi:</span>
                            <a href="tel:0708038365" className="phone-link">
                                📞 070-803-83-65
                            </a>
                        </div>
                        <div className="modal-actions">
                            <a
                                href="https://wa.me/994708038365?text=Salam.%20Dövlət%20qulluğu%20portalında%20testləri%20işləmək%20istəyirəm."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-redirect-btn"
                            >
                                <svg className="wa-icon" viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor" d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.475 1.332 4.992L2 22l5.176-1.357c1.477.808 3.137 1.235 4.832 1.235 5.506 0 9.988-4.482 9.988-9.988S17.518 2 12.012 2zm0 18.294c-1.558 0-3.085-.418-4.423-1.21l-.317-.188-3.292.863.878-3.21-.207-.33c-.872-1.39-1.332-3.003-1.332-4.664 0-4.571 3.72-8.291 8.291-8.291 4.571 0 8.291 3.72 8.291 8.291-.001 4.571-3.721 8.291-8.291 8.291zM16.63 13.91c-.255-.127-1.505-.742-1.739-.827-.233-.085-.404-.127-.573.127-.17.255-.658.827-.807.997-.149.17-.298.191-.553.064-.255-.127-1.077-.397-2.051-1.267-.757-.675-1.269-1.51-1.417-1.765-.149-.255-.016-.393.111-.519.115-.113.255-.298.383-.446.127-.149.17-.255.255-.425.085-.17.042-.319-.021-.446-.064-.127-.573-1.38-.786-1.89-.208-.5-.436-.433-.573-.44h-.488c-.17 0-.446.064-.68.319-.233.255-.892.871-.892 2.124 0 1.253.914 2.463 1.041 2.633.127.17 1.799 2.748 4.359 3.851.609.263 1.084.42 1.455.538.612.195 1.169.167 1.608.102.49-.072 1.505-.616 1.717-1.21.213-.595.213-1.105.149-1.21-.064-.106-.233-.17-.488-.297z" />
                                </svg>
                                WhatsApp ilə Əlaqə Saxla
                            </a>
                            <button className="modal-cancel-btn" onClick={() => setShowModal(false)}>
                                Bağla
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="breadcrumbs">
                <Link to="/">Ana səhifə</Link> &gt;
                <span style={{ marginLeft: '5px' }}>
                    Testlər
                </span>
            </div>

            <div className="tests-content-wrapper fade-in">
                <div className="contact-card">
                    <div className="whatsapp-icon-wrapper">
                        <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.458 3.486 1.332 5.01L2 22l5.164-1.353a9.92 9.92 0 0 0 4.848 1.258c5.506 0 9.988-4.482 9.988-9.988 0-2.658-1.036-5.16-2.922-7.046C17.178 3.036 14.67 2 12.012 2zm5.72 13.754c-.238.673-1.398 1.298-1.938 1.378-.49.072-1.127.127-3.268-.755-2.73-1.127-4.488-3.905-4.628-4.092-.136-.188-1.114-1.48-1.114-2.825 0-1.346.7-2.012.947-2.274.246-.262.536-.327.714-.327.179 0 .358.002.513.01.162.008.38-.063.595.452.222.532.756 1.846.82 1.977.064.13.107.283.02.457-.087.174-.13.282-.26.434-.13.153-.273.342-.39.46-.13.13-.266.27-.116.53.15.257.666 1.096 1.428 1.774.982.873 1.808 1.143 2.062 1.274.254.13.403.108.552-.065.15-.174.646-.75.82-.999.173-.25.347-.208.583-.12.238.087 1.503.708 1.761.838.257.13.43.195.492.304.062.11.062.632-.176 1.305z" fill="currentColor" />
                        </svg>
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
            </div>
        </div>
    );
};

export default TestsPage;
