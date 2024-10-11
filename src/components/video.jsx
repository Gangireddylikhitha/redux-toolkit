// src/components/YouTubeShortEmbed.js
import React from 'react';

const YouTubeShortEmbed = ({ videoId, end }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1${end ? `&end=${end}` : ''}`;

    return (
        <div style={{ position: 'relative', height: '650px', width: '380px', overflow: 'hidden' }}>
            <iframe
                src={embedUrl}
                title={`YouTube Short ${videoId}`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                }}
                allow="fullscreen"
            />
        </div>
    );
};

export default YouTubeShortEmbed;




export const VideoGallery = () => {
    const videos = [
        { id: "PawZKMjnf74", end: 15 }, 
        { id: "4b3fv4Upq-U", end: 20 }, 
        { id: "mT9FTZgxIi8", end: 18 }  
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {videos.map(video => (
                <div key={video.id} style={{ margin: '0 10px' }}>
                    <YouTubeShortEmbed videoId={video.id} end={video.end} />
                </div>
            ))}
        </div>
    );
};
