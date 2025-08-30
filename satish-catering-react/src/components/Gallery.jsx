import React from 'react';
import './Gallery.css'; // Assuming you will create a CSS file for styling

const Gallery = () => {
  const images = [
    { src: '/assets/images/food1.jpg', alt: 'Food 1' },
    { src: '/assets/images/food2.jpg', alt: 'Food 2' },
    { src: '/assets/images/food3.jpg', alt: 'Food 3' },
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;