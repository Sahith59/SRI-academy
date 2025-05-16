import React, { useState } from 'react';
import './Video.css';

const Video: React.FC = () => {
  const [isError, setIsError] = useState(false);
  const videoId = 'k4bMNk-_ENE';
  
  const handleWatchOnYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section id="video" className="video">
      <div className="container">
        <div className="section-title">
          <h2>Featured Lecture</h2>
          <div className="underline"></div>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe 
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              onError={() => setIsError(true)}
            ></iframe>
            
            {isError && (
              <div className="video-error">
                <p>Having trouble loading the video?</p>
                <button onClick={handleWatchOnYouTube} className="watch-on-youtube">
                  Watch on YouTube
                </button>
              </div>
            )}
          </div>
          
          <div className="video-description">
            <p className="video-text">
              Join <span className="professor-name highlight faculty-name">Dr. J.V. Rao</span>, our distinguished Physics faculty, 
              as he demonstrates our commitment to excellence in education and our unique 
              teaching methodology that has helped numerous students succeed in their medical entrance examinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;