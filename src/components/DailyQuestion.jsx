import React, { useState, useEffect } from 'react';
import { getDailyQuestion } from '../utils/dailyQuestionUtils';

const DailyQuestion = () => {
    const [questionData, setQuestionData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    useEffect(() => {
        const daily = getDailyQuestion();
        setQuestionData(daily);
    }, []);

    if (!questionData) {
        return null;
    }

    const handleOptionClick = (key) => {
        if (!showExplanation) {
            setSelectedOption(key);
        }
    };

    const checkAnswer = () => {
        setShowExplanation(true);
    };

    const getOptionStyle = (key) => {
        let style = {
            backgroundColor: '#f8f9fa',
            padding: '0.8rem 1rem',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            display: 'flex',
            alignItems: 'center',
            cursor: showExplanation ? 'default' : 'pointer',
            transition: 'all 0.2s',
            marginBottom: '0.5rem'
        };

        if (!showExplanation) {
            if (selectedOption === key) {
                style.backgroundColor = '#e3f2fd'; // Light blue highlight
                style.borderColor = 'var(--secondary-color)';
                style.transform = 'translateX(5px)';
            }
        } else {
            // Validation state
            const isCorrect = questionData.answer === key;
            const isSelected = selectedOption === key;

            if (isCorrect) {
                style.backgroundColor = '#d1e7dd'; // Green success
                style.borderColor = '#badbcc';
                style.color = '#0f5132';
            } else if (isSelected && !isCorrect) {
                style.backgroundColor = '#f8d7da'; // Red error
                style.borderColor = '#f5c6cb';
                style.color = '#842029';
                // Only show red if an answer is actually defined in data
                if (!questionData.answer) {
                    style.backgroundColor = '#e3f2fd'; // Keep blue if no answer key
                    style.borderColor = 'var(--secondary-color)';
                    style.color = 'inherit';
                }
            } else if (isSelected) {
                // Keep selection highlight if answer is null or not matching known keys
                style.backgroundColor = '#e3f2fd';
                style.borderColor = 'var(--secondary-color)';
            }
        }

        return style;
    };

    // Helper to render options if they exist
    const renderOptions = () => {
        if (!questionData.options) return null;

        return (
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {Object.entries(questionData.options).map(([key, value]) => (
                    <div
                        key={key}
                        onClick={() => handleOptionClick(key)}
                        style={getOptionStyle(key)}
                    >
                        <span style={{
                            fontWeight: 'bold',
                            color: 'inherit',
                            marginRight: '1rem',
                            minWidth: '20px'
                        }}>
                            {key})
                        </span>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section
            style={{
                padding: '2rem 0',
                backgroundColor: 'var(--light-gray)'
            }}
            className="fade-in"
        >
            <div className="container">
                <div style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--border-radius)',
                    boxShadow: 'var(--shadow-md)',
                    padding: '2rem',
                    maxWidth: '800px',
                    margin: '0 auto',
                    borderLeft: '5px solid var(--primary-color)'
                }}>
                    <h2 style={{
                        color: 'var(--primary-color)',
                        marginBottom: '1rem',
                        fontSize: '1.5rem'
                    }}>
                        🎓 Günün sualı
                    </h2>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{
                            fontSize: '1.2rem',
                            color: 'var(--dark-gray)',
                            marginBottom: '1rem',
                            lineHeight: '1.5'
                        }}>
                            {questionData.question}
                        </h3>

                        {/* Render Multiple Choice Options */}
                        {renderOptions()}

                        {/* Actions Section */}
                        <div style={{
                            marginTop: '1.5rem',
                            borderTop: '1px solid #eee',
                            paddingTop: '1.5rem'
                        }}>
                            {!showExplanation ? (
                                <button
                                    onClick={checkAnswer}
                                    disabled={!selectedOption}
                                    style={{
                                        backgroundColor: selectedOption ? 'var(--secondary-color)' : '#999',
                                        color: 'white',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: 'var(--border-radius)',
                                        fontWeight: 'bold',
                                        transition: 'all 0.2s',
                                        cursor: selectedOption ? 'pointer' : 'not-allowed',
                                        opacity: selectedOption ? 1 : 0.7
                                    }}
                                >
                                    Cavab Yoxla
                                </button>
                            ) : (
                                <div className="fade-in">
                                    <p style={{
                                        fontSize: '1.1rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: 'bold',
                                        color: 'var(--text-color)'
                                    }}>
                                        Doğru Cavab: <span style={{ color: 'var(--primary-color)' }}>
                                            {questionData.answer ? questionData.answer : "Not Set"}
                                        </span>
                                    </p>

                                    {/* Feedback Message */}
                                    {selectedOption && questionData.answer && (
                                        <p style={{
                                            marginTop: '0.5rem',
                                            fontWeight: 'bold',
                                            color: selectedOption === questionData.answer ? '#0f5132' : '#842029'
                                        }}>
                                            {selectedOption === questionData.answer ? "🎉 Doğru!" : "❌ Yanlış"}
                                        </p>
                                    )}

                                    {questionData.explanation && (
                                        <div style={{
                                            backgroundColor: '#f0f9f9', // Very light teal
                                            padding: '1rem',
                                            borderRadius: 'var(--border-radius)',
                                            marginTop: '1rem'
                                        }}>
                                            <h4 style={{
                                                color: 'var(--secondary-color)',
                                                marginBottom: '0.5rem',
                                                fontSize: '1rem'
                                            }}>
                                                Explanation:
                                            </h4>
                                            <p style={{
                                                color: 'var(--text-color)',
                                                lineHeight: '1.6'
                                            }}>
                                                {questionData.explanation}
                                            </p>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => {
                                            setShowExplanation(false);
                                            setSelectedOption(null);
                                        }}
                                        style={{
                                            marginTop: '1rem',
                                            background: 'none',
                                            border: '1px solid var(--dark-gray)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: 'var(--border-radius)',
                                            color: 'var(--dark-gray)',
                                            fontSize: '0.9rem'
                                        }}
                                    >
                                        Yenidən yoxla
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DailyQuestion;
