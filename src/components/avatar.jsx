import React, { useState } from 'react';

const Avatar = ({ defaultImage, hoverImages }) => {
  const [currentImage, setCurrentImage] = useState(defaultImage);

  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * hoverImages.length);
    setCurrentImage(hoverImages[randomIndex]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(defaultImage);
  };

  return (
    <img className='avatar'
      src={currentImage}
      alt="Alex Mathers"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    //   style={{ transition: 'opacity 0.3s ease' }}
    />
  );
};

export default Avatar;