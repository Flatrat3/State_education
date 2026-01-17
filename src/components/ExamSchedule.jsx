
import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import './ExamSchedule.css';

const ExamSchedule = () => {
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const fetchExamData = async () => {
        try {
            const isNative = Capacitor.isNativePlatform();
            const url = isNative
                ? 'https://exidmet.dim.gov.az/dqq/ImtQeyd'
                : '/api-dim/dqq/ImtQeyd';

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Şəbəkə xətası baş verdi');
            }
            const text = await response.text();
            parseExamData(text);
            setLastUpdated(new Date());
            setError(null);
        } catch (err) {
            console.error("Error fetching exam data:", err);
            setError("Məlumatı yeniləmək mümkün olmadı");
        } finally {
            setLoading(false);
        }
    };

    const parseExamData = (htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        // Select all rows in the table body
        const rows = doc.querySelectorAll('table tbody tr');
        const parsedExams = [];

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            // We expect at least these many columns based on the header inspection:
            // 0: # (Index - Header comes from TH in first col usually, but user sees TD content)
            // Actually in the source:
            // th: index
            // td[0]: Date/Time (05.02.2026 10:00)
            // td[1]: Reg Start (05.01.2026 15:00)
            // td[2]: Reg End (25.01.2026 18:00)

            // Wait, from my debug trace:
            // 0: 1 (This was a TH scope="row")
            // 1: 05.02.2026 10:00
            // 2: 05.01.2026 15:00
            // 3: 25.01.2026 18:00

            // row.cells collection includes th if present.
            // If I iterate `row.cells`:
            // cell[0] -> th (Index)
            // cell[1] -> td (Date)
            // cell[2] -> td (Start)
            // cell[3] -> td (End)

            if (row.cells.length >= 4) {
                const dateText = row.cells[1]?.innerText?.trim();

                if (dateText) {
                    parsedExams.push({
                        dateTime: dateText,
                        regStart: row.cells[2]?.innerText?.trim(),
                        regEnd: row.cells[3]?.innerText?.trim(),
                    });
                }
            }
        });

        setExams(parsedExams);
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
                                </tr>
                            </thead>
                            <tbody>
                                {exams.map((exam, index) => (
                                    <tr key={index}>
                                        <td data-label="İmtahan Tarixi">{exam.dateTime}</td>
                                        <td data-label="Qeydiyyatın Başlanması">{exam.regStart}</td>
                                        <td data-label="Qeydiyyatın Bitməsi">{exam.regEnd}</td>
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
