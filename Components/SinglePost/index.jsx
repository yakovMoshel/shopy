import React from 'react';
import styles from './style.module.scss';
import Head from 'next/head';

export default function SinglePost({ post }) {
  return (
    <div className={styles.singlePost}>
      <Head>
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.summary} />
                {post.focusKeyword || post.secondaryKeywords?.length ? (
          <meta
            name="keywords"
            content={[post.focusKeyword, ...(post.secondaryKeywords || [])].join(', ')}
          />
        ) : null}
        {post.socialImage && <meta property="og:image" content={post.socialImage} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.summary}>{post.summary}</p>
      <p className={styles.author}>נכתב על ידי {post.author} בתאריך {new Date(post.createdAt).toLocaleDateString()}</p>
      {post.image && <img src={post.image} alt={post.title} className={styles.image} />}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  );
}
