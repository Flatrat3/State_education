import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tests.css';

const testsData = [
    { id: 1, title: 'Qanunvericilik', type: 'Full', questions: 100, time: '1 saat', price: 'Pulsuz' },
    { id: 2, title: 'Məntiq Sınağı', type: 'Subject', questions: 40, time: '1 saat', price: 'Yaxında zamanda yüklənəcək' },
    { id: 3, title: 'Ümumi Sınaq', type: 'Subject', questions: 40, time: '3 saat', price: 'Pulsuz' },
];

const Tests = () => {
    const navigate = useNavigate();

    return (
        <section className="tests-section" id="tests">
            <div className="container">
                <h2 className="section-title">Sınaq İmtahanları</h2>
                <div className="tests-grid">
                    {testsData.map((test) => (
                        <div key={test.id} className="test-card">
                            <div className="test-header">
                                <h3>{test.title}</h3>
                                <span className={`badge ${test.price === 'Pulsuz' ? 'free' : 'paid'}`}>{test.price}</span>
                            </div>
                            <ul className="test-details">
                                <li>📄 {test.questions} Sual</li>
                                <li>⏱️ {test.time}</li>
                                <li>📝 {test.type}</li>
                            </ul>
                            <button className="start-test-btn" onClick={() => navigate('/tests')}>İmtahanı Başla</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tests;
