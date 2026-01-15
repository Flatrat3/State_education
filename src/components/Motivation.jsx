import React, { useState, useEffect } from 'react';
import quotes from '../data/quotes';

const Motivation = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        // Select a random quote on mount
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    if (!quote) return null;

    return (
        <section
            style={{
                backgroundColor: 'var(--secondary-color)',
                color: 'white',
                padding: '1rem 0',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
            }}
            className="fade-in"
        >
            <div className="container">
                <p style={{
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    marginBottom: '0.2rem'
                }}>
                    "{quote.text}"
                </p>
                <p style={{
                    fontSize: '0.9rem',
                    opacity: 0.9
                }}>
                    — {quote.author}
                </p>
            </div>
        </section>
    );
};

export default Motivation;
