import React, { useEffect, useState } from 'react';
import './YouTubeSection.css';

const YouTubeSection = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const channelId = 'UCopXX7QjXNKpBuFV6JrZYcA';
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    const formattedVideos = data.items.slice(0, 3).map(item => ({
                        id: item.guid,
                        title: item.title,
                        thumbnail: `https://i.ytimg.com/vi/${item.guid.split(':')[2]}/hqdefault.jpg`,
                        url: item.link,
                        views: "Yeni", // View count is not in RSS, marking as New
                        date: new Date(item.pubDate).toLocaleDateString("az-AZ")
                    }));
                    setVideos(formattedVideos);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching YouTube videos:", err);
                setLoading(false);
            });
    }, []);

    const channelInfo = {
        name: "Dövlət Qulluğu || Asim Əhməd",
        subscribers: "Abunə ol", // Subscriber count not available in partial RSS
        avatar: "" // Using a generic or trying to fetch, but hardcoding provided/found one or placeholder is safer for now. I'll use a clearer placeholder or the one from the successful browser visit if I captured it, but I didn't. I'll stick to a good placeholder or try to get it from the RSS feed 'feed.image'.
    };

    // Fallback/Loading state can be handled or just show skeleton. For now, render if videos exist.

    return (
        <section className="youtube-section">
            <div className="container">
                <div className="channel-header fade-in">
                    <div className="channel-info">
                        <img src="https://yt3.googleusercontent.com/AX_W2JAGtFuMH8vnT4iyAhez9rtcP8OgOUMcob4alDvr1rH0WbFXc9I-0gPgmvOXrHPgT7mJ=s160-c-k-c0x00ffffff-no-rj" alt={channelInfo.name} className="channel-avatar"
                            onError={(e) => e.target.src = 'https://via.placeholder.com/100?text=DQ'} />
                        {/* Note: Ideally we get the avatar from the feed or config. The RSS feed from rss2json usually has feed.image */}
                        <div className="channel-text">
                            <h2>{channelInfo.name}</h2>
                            <p>Bizimlə öyrənin və uğur qazanın</p>
                        </div>
                    </div>
                    <a href={`https://www.youtube.com/channel/${channelId}`} target="_blank" rel="noopener noreferrer" className="subscribe-btn">
                        Abunə ol
                    </a>
                </div>

                <h3 className="section-title fade-in">Son Videolar</h3>

                <div className="videos-slider fade-in">
                    {loading ? (
                        <p style={{ color: '#aaa' }}>Videolar yüklənir...</p>
                    ) : videos.map((video) => (
                        <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="video-card">
                            <div className="thumbnail-wrapper">
                                <img src={video.thumbnail} alt={video.title} />
                                <div className="play-icon">▶</div>
                            </div>
                            <div className="video-info">
                                <h4>{video.title}</h4>
                                <div className="video-meta">
                                    <span>{video.date}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YouTubeSection;
