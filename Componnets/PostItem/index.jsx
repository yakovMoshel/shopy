import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

export default function PostItem({ post }) {
  const { _id, title, summary, image, createdAt } = post;

  return (
    <div className={styles.item}>
      <Link href={`/UniquePost/${_id}`} legacyBehavior>
        <a className={styles.imageLink}>
          {image && <img src={image} alt={title} className={styles.image} />}
        </a>
      </Link>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <div className={styles.createdAt}>
            {new Date(createdAt).toLocaleDateString()}
          </div>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.summary}>
            {summary}
          </div>
        </div>
        <Link className={styles.readMoreButton} href={`/UniquePost/${_id}`}>
          המשך קריאה
        </Link>
      </div>
    </div>
  );
}
