import React from 'react'
import styles from "./style.module.scss"
import Link from 'next/link';

export default function PostItem({ post }) {
  const {
    _id,
    title,
    summary,
    image,createdAt
  } = post;
  return (
    <div className={styles.item}>
      <img src={image} alt={title} />
      <div className={styles.Details}>
        <div className={styles.createdAt}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        <div className={styles.productName}>
          {title}
          <Link className={styles.orderButton}
                 href={`/UniquePost/${_id}`}>המשך קריאה</Link>
        </div>
        <div className={styles.description}>
          {/* {description} */}
        </div>
        <div className={styles.category}>
          קטגוריה: {summary}
        </div>
        <div className={styles.flavors}>
          {/* טעמים: {flavors.join(', ')} */}
        </div>

      </div>

{/* <Link href={product.id}/> */}
    </div>
  );
}
