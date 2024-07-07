import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

export default function PostItem({ post }) {
  const { _id, title, summary, image, createdAt } = post;

  return (
    <div className={styles.item}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.details}>
        <div className={styles.createdAt}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.summary}>
          {summary}
        </div>
        <Link className={styles.readMoreButton} href={`/UniquePost/${_id}`}>
          המשך קריאה
        </Link>
      </div>
    </div>
  );
}
