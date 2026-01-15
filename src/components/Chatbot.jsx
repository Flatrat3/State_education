import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Salam! 👋 Dövlət İmtahan Mərkəzi bələdçinizəm. Sizə necə kömək edə bilərəm?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");

        // Auto-reply logic
        setTimeout(() => {
            const reply = getBotReply(userMessage.text);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: reply,
                sender: 'bot'
            }]);
        }, 600);
    };

    const getBotReply = (text) => {
        const lowerText = text.toLowerCase();

        if (lowerText.includes('salam') || lowerText.includes('hi')) {
            return "Salam! Xoş gəlmisiniz. Sualınızı yazın, kömək edim.";
        }
        if (lowerText.includes('qiymət') || lowerText.includes('ödəniş')) {
            return "💰 Kursun qiyməti. Qrup şəklində həftədə 2 dəfə olmaqla 70 AZN, fərdi şəkildə 200 AZN təşkil edir. Dərslər minimum saat yarım olaraq keçirilir.";
        }
        if (lowerText.includes('sınaq') || lowerText.includes('imtahan') || lowerText.includes('test')) {
            return "📝 Sınaqlar bölməsində mövzu və ümumi sınaqlar mövcuddur. 'Testlər' səhifəsinə keçid edərək baxa bilərsiniz.";
        }
        if (lowerText.includes('əlaqə') || lowerText.includes('nömrə') || lowerText.includes('whatsapp')) {
            return "📞 Bizimlə əlaqə üçün saytın aşağısındakı WhatsApp düyməsini istifadə edə bilərsiniz.";
        }
        if (lowerText.includes('qeydiyyat')) {
            return "🔐 Qeydiyyat üçün yuxarı sağ küncdəki 'Daxil ol' düyməsini sıxa bilərsiniz.";
        }

        return "Bağışlayın, tam başa düşmədim. 🤔 Zəhmət olmasa sualınızı başqa cür ifadə edin və ya açar sözlərdən istifadə edin (misal: 'qiymət', 'sınaq', 'əlaqə').";
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
            fontFamily: 'var(--font-primary)'
        }}>
            {/* Chat Window */}
            {isOpen && (
                <div className="fade-in" style={{
                    width: '350px',
                    height: '450px',
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    boxShadow: '0 5px 25px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '15px',
                    overflow: 'hidden',
                    border: '1px solid #e0e0e0'
                }}>
                    {/* Header */}
                    <div style={{
                        backgroundColor: 'var(--primary-color)',
                        color: 'white',
                        padding: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ fontSize: '1.5rem' }}>🤖</div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1rem' }}>Virtual Köməkçi</h4>
                                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Onlayn</span>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div style={{
                        flex: 1,
                        padding: '15px',
                        overflowY: 'auto',
                        backgroundColor: '#f5f7fa',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        {messages.map((msg) => (
                            <div key={msg.id} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                padding: '10px 15px',
                                borderRadius: '15px',
                                borderBottomRightRadius: msg.sender === 'user' ? '2px' : '15px',
                                borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '15px',
                                backgroundColor: msg.sender === 'user' ? 'var(--primary-color)' : 'white',
                                color: msg.sender === 'user' ? 'white' : '#333',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                fontSize: '0.95rem',
                                lineHeight: '1.4'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} style={{
                        padding: '10px',
                        borderTop: '1px solid #eee',
                        display: 'flex',
                        gap: '10px',
                        backgroundColor: 'white'
                    }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Sualınızı yazın..."
                            style={{
                                flex: 1,
                                padding: '10px',
                                borderRadius: '20px',
                                border: '1px solid #ddd',
                                outline: 'none'
                            }}
                        />
                        <button type="submit" style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            ➤
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Action Button */}
            <button
                onClick={toggleChat}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    transition: 'transform 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isOpen ? '✕' : '💬'}
            </button>
        </div>
    );
};

export default Chatbot;
