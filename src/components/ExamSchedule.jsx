
import React, { useState, useEffect } from 'react';
import './ExamSchedule.css';
import { fetchAndParseExams } from '../utils/examUtils';

const ExamSchedule = () => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const fetchExamData = async () => {
        try {
            const data = await fetchAndParseExams();
            setExams(data);
            setLastUpdated(new Date());
            setError(null);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExamData();
        const interval = setInterval(fetchExamData, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading && exams.length === 0) return <div className="exam-schedule-loading">Məlumat yüklənir...</div>;

    return (
        <div className="exam-schedule-container">
            <div className="container">
                <div className="exam-schedule-header">
                    <h2 className="section-title">İmtahan Cədvəli</h2>
                    <span className="last-updated">Son yenilənmə: {lastUpdated.toLocaleTimeString()}</span>
                </div>

                {error && <div className="exam-error-message">{error}</div>}

                {exams.length > 0 ? (
                    <div className="exam-table-wrapper">
                        <table className="exam-table">
                            <thead>
                                <tr>
                                    <th>İmtahan Tarixi</th>
                                    <th>Qeydiyyatın Başlanması</th>
                                    <th>Qeydiyyatın Bitməsi</th>
                                    <th>Vəzifə qrupları</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exams.map((exam, index) => (
                                    <tr key={index}>
                                        <td data-label="İmtahan Tarixi">{exam.dateTime}</td>
                                        <td data-label="Qeydiyyatın Başlanması">{exam.regStart}</td>
                                        <td data-label="Qeydiyyatın Bitməsi">{exam.regEnd}</td>
                                        <td data-label="Vəzifə qrupları">{exam.group}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-exams-message">Hazırda aktiv imtahan yoxdur və ya məlumat əldə edilə bilmir.</div>
                )}
                <div className="source-link">
                    Mənbə: <a href="https://exidmet.dim.gov.az/dqq/ImtQeyd" target="_blank" rel="noopener noreferrer">Dövlət İmtahan Mərkəzi</a>
                </div>
            </div>
        </div>
    );
};

export default ExamSchedule;
