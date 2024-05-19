import React from 'react'
import styles from "./style.module.scss"
import Link from 'next/link';

export default function PostItem({ product }) {
  const {
    name,
    description,
    category,
    image,
    flavors,
    createdAt
  } = product;
  return (
    <div className={styles.item}>
      <img src={image} alt={name} />
      <div className={styles.Details}>
        <div className={styles.createdAt}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        <div className={styles.productName}>
          {name}
        </div>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.category}>
          קטגוריה: {category}
        </div>
        <div className={styles.flavors}>
          טעמים: {flavors.join(', ')}
        </div>

      </div>

{/* <Link href={product.id}/> */}
    </div>
  );
}
