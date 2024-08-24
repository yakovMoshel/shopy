"use client"
import React from 'react';
import ProductItem from '../ProductItem';
import styles from './style.module.scss';

export default function ProductList({ productByCat, isLoading }) {
  return (
    <div className={styles.items}>
      {isLoading ? (
        Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className={styles.skeletonItem}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
            </div>
          </div>
        ))
      ) : (
        productByCat.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))
      )}
    </div>
  );
}
