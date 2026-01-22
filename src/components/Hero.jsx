import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import './Hero.css';

const Hero = () => {
    const [videos, setVideos] = React.useState([]);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loading, setLoading] = React.useState(true);
    const channelId = 'UCopXX7QjXNKpBuFV6JrZYcA';

    React.useEffect(() => {
        const fetchVideos = async () => {
            try {
                const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
                const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.items) {
                    // Start with all items
                    let allItems = data.items;
                    // Shuffle array
                    for (let i = allItems.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [allItems[i], allItems[j]] = [allItems[j], allItems[i]];
                    }
                    // Take first 4
                    const selectedVideos = allItems.slice(0, 4).map(item => ({
                        id: item.guid,
                        title: item.title,
                        thumbnail: `https://i.ytimg.com/vi/${item.guid.split(':')[2]}/hqdefault.jpg`,
                        link: item.link
                    }));
                    setVideos(selectedVideos);
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    React.useEffect(() => {
        if (videos.length === 0) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % videos.length);
        }, 5000); // Auto slide every 5 seconds
        return () => clearInterval(interval);
    }, [videos]);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text fade-in">
                    <h1>Dövlət Qulluğuna <br />Bizimlə Hazırlaşın</h1>
                    <p>
                        Məntiq, İnformatika, Qanunvericilik və Azərbaycan dili üzrə mükəmməl hazırlıq platforması.
                        Sınaqlarımızla biliklərinizi yoxlayın və imtahana hazır olun.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/tests" className="primary-btn">İmtahan ver</Link>
                        <button className="secondary-btn">Daha ətraflı</button>
                    </div>
                </div>

                <div className="hero-image fade-in">
                    {loading ? (
                        <div className="slider-loading">
                            <div className="spinner"></div>
                        </div>
                    ) : videos.length > 0 ? (
                        <div className="video-slider">
                            {videos.map((video, index) => (
                                <div
                                    key={video.id}
                                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => window.open(video.link, '_blank')}
                                >
                                    <img src={video.thumbnail} alt={video.title} />
                                    <div className="play-overlay">
                                        <div className="play-button">▶</div>
                                    </div>
                                    <div className="slide-title">{video.title}</div>
                                </div>
                            ))}

                            <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
                            <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>

                            <div className="slider-dots">
                                {videos.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentSlide(index);
                                        }}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="image-placeholder">
                            <img src={heroImage} alt="Civil Service Preparation" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
