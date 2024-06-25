'use client';

import React, { useState } from 'react';
import styles from './style.module.scss';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
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
      <div className={styles.mainImage}>
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
}