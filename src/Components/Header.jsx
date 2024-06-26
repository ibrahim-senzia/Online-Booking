import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const moviePosters = [
    'src/images/2208.q703.031.F.m004.c7.FP movie film cinema poster banner.jpg',
    'src/images/148520819_10480861.jpg',
  ];

  const [currentPoster, setCurrentPoster] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setCurrentPoster((currentPoster + 1) % moviePosters.length);
    setShowVideo(true);
  };

  return (
    <>
      <header className="header" key="header">
        <div className="header-content">
          <h2>(GIF)-Movie Ticket Booking</h2>
          <h3 className="delayed-text">GIF is an abbreviation derived from the project coordinators</h3>
        </div>
      </header>
      <div className="image-grid" key="image-grid">
        {moviePosters.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="image" />
        ))}
      </div>
      <button onClick={handleClick}>Show Movie Trailer</button>
      {showVideo && (
        <video width="100%" controls>
          <source src="src/images/Trap _ Official Trailer (720p).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
};

export default Header;