'use client';

import React, { useState } from 'react';
import styles from './style.module.scss';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage} onClick={toggleEnlarged}>
        <img src={selectedImage} alt="Selected" />
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.thumbnail}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
      {isEnlarged && (
        <div className={styles.enlargedView} onClick={toggleEnlarged}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
}