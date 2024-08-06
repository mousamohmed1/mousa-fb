import React from 'react';
import './Gallery.scss';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        {/* Add images or other content */}
        <img src="image1.jpg" alt="Gallery 1" />
        <img src="image2.jpg" alt="Gallery 2" />
        <img src="image3.jpg" alt="Gallery 3" />
      </div>
    </section>
  );
};

export default Gallery;
