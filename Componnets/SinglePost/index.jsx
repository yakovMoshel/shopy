import React from 'react';
import styles from './style.module.scss';

export default function SinglePost({ post }) {
  return (
    <div className={styles.singlePost}>
      {post.image && <img src={post.image} alt={post.title} className={styles.image} />}
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.author}>נכתב על ידי {post.author} בתאריך {new Date(post.createdAt).toLocaleDateString()}</p>
      <p className={styles.summary}>{post.summary}</p>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}
