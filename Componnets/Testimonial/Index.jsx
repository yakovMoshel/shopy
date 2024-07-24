"use client"
import React, { useState } from 'react';
import styles from './style.module.scss';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'רותי לוי',
      review: 'היה מדהים! העוגה היתה מדהימה ואני ממליצה עליו בחום.',
    },
    {
      id: 2,
      name: 'אילנה כהן',
      review: 'שירות מעולה ועוגות טעימות ויפות מאוד. בהחלט מומלץ.',
    },
    {
      id: 3,
      name: 'מיכל ברק',
      review: ' המארז היה בול לטעמי, הגיע בזמן והאיכות הייתה מצוינת. ממליצה בחום!',
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length <= 0) {
    return null;
  }

  return (
    <div className={styles.testimonialCarousel}>
      <button className={styles.leftArrow} onClick={prevSlide}>&#10094;</button>
      <button className={styles.rightArrow} onClick={nextSlide}>&#10095;</button>
      {testimonials.map((testimonial, index) => (
        <div
          className={index === current ? `${styles.slide} ${styles.active}` : styles.slide}
          key={testimonial.id}
        >
          {index === current && (
            <div className={styles.testimonial}>
              <p className={styles.review}>"{testimonial.review}"</p>
              <p className={styles.customer}>- {testimonial.name}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
