import React from 'react';

const Advertising = () => {
    // Placeholder number - User should update this
    const phoneNumber = "994708038365";
    const message = encodeURIComponent("Salam, kursla bağlı məlumat almaq istəyirəm.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section style={{
            padding: '0.8rem 0', // Much smaller padding
            backgroundColor: '#005f73',
            color: 'white',
            textAlign: 'center',
            marginTop: '0', // Remove margin
            position: 'relative',
            zIndex: 10
        }} className="fade-in">
            <div className="container" style={{ overflow: 'hidden', maxWidth: '100%' }}>
                <div className="animate-banner" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    width: 'max-content',
                    margin: '0 auto' // Remove auto centering to let it scroll freely? No, keyframes handle position.
                }}>
                    <h2 style={{ fontSize: '1.2rem', margin: 0, color: 'white' }}>
                        📢 Bizimlə Əməkdaşlıq Edin
                    </h2>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            color: '#005f73',
                            padding: '0.4rem 1.2rem', // Smaller button
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            // Pause animation on hover? 
                            // e.currentTarget.parentElement.style.animationPlayState = 'paused';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            // e.currentTarget.parentElement.style.animationPlayState = 'running';
                        }}
                    >
                        <span style={{ marginRight: '6px', fontSize: '1.2rem' }}>💬</span>
                        Əlaqə
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Advertising;
