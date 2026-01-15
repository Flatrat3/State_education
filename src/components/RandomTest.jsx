import React, { useState, useEffect } from 'react';
import { subjectTests, generalTests } from '../data/tests';

const RandomTest = () => {
    const [test, setTest] = useState(null);

    useEffect(() => {
        // Combine all tests for selection
        const allTests = [...subjectTests, ...generalTests];

        // Select a random test
        // We use a different random check each time page loads (per user session)
        // User requested: "Randomly display one of the topic and general practice tests on the screen. Those who are preparing should enter that test."
        const randomIndex = Math.floor(Math.random() * allTests.length);
        setTest(allTests[randomIndex]);
    }, []);

    if (!test) return null;

    return (
        <section style={{
            padding: '2rem 0',
            background: 'linear-gradient(to right, #e0f7fa, #f1f8e9)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--border-radius)',
                    boxShadow: 'var(--shadow-md)',
                    maxWidth: '600px',
                    margin: '0 auto',
                    border: '2px solid var(--accent-color)'
                }} className="fade-in">
                    <h2 style={{
                        color: 'var(--primary-color)',
                        marginBottom: '1rem'
                    }}>
                        🎯 Günün Sınaq Tövsiyəsi
                    </h2>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-color)' }}>
                        Bugünkü hazırlıq üçün bu sınağı işləməyi tövsiyə edirik:
                    </p>

                    <h3 style={{
                        marginBottom: '1.5rem',
                        color: 'var(--dark-gray)',
                        fontSize: '1.3rem'
                    }}>
                        {test.title}
                    </h3>

                    <a
                        href={test.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: 'var(--border-radius)',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                            boxShadow: 'var(--shadow-sm)'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.backgroundColor = 'var(--secondary-color)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.backgroundColor = 'var(--primary-color)';
                        }}
                    >
                        Sınağa Başla 🚀
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RandomTest;
