import React from 'react';
import { Link } from 'react-router-dom';
import './GeneralTests.css';

const tests = [
    { id: 1, title: 'Ümumi Sınaq 1', url: 'https://forms.gle/7XDwqghuPhCabdb9A' },
    { id: 2, title: 'Ümumi Sınaq 2', url: 'https://forms.gle/2RA9ScQe578YQSjV6' },
    { id: 3, title: 'Ümumi Sınaq 3', url: 'https://forms.gle/V5reTFDYGj9JNuTV7' },
    { id: 4, title: 'Ümumi Sınaq 4', url: 'https://forms.gle/ydYe5mEku93LTydi7' },
    { id: 5, title: 'Ümumi Sınaq 5', url: 'https://forms.gle/u7AdRFDXkCxwi7BB9' },
    { id: 6, title: 'Ümumi Sınaq 6', url: 'https://forms.gle/3rYJ1TXHUz5ao6Xe9' },
    { id: 7, title: 'Ümumi Sınaq 7', url: 'https://forms.gle/UBiwehhqXsBowjZ46' },
    { id: 8, title: 'Ümumi Sınaq 8', url: 'https://forms.gle/99w1PEPEzeEpGW6d9' },
    { id: 9, title: 'Ümumi Sınaq 9', url: 'https://forms.gle/sMoU7zFgVwfQWpGc7' },
    { id: 10, title: 'Ümumi Sınaq 10', url: 'https://forms.gle/VFjKb3XvfebYs5vW9' },
    { id: 11, title: 'Ümumi Sınaq 11', url: 'https://forms.gle/T7wfFq1piGALVCEp7' },
];

const GeneralTests = () => {
    return (
        <div className="general-tests-page container">
            <div className="breadcrumbs">
                <Link to="/">Ana səhifə</Link> &gt; <span>Ümumi Sınaqlar</span>
            </div>

            <div className="tests-header fade-in">
                <h2>Ümumi Sınaqlar 📚</h2>
                <p>Biliklərinizi yoxlamaq üçün sınaq imtahanlarında iştirak edin</p>
            </div>

            <div className="tests-list fade-in">
                {tests.map((test) => (
                    <a
                        key={test.id}
                        href={test.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="test-card"
                    >
                        <div className="test-info">
                            <span className="test-icon">✅</span>
                            <span className="test-title">{test.title}</span>
                        </div>
                        <span className="test-action">Başla &rarr;</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default GeneralTests;
