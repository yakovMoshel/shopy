"use client";
import { useState, useEffect } from 'react';
import ProductItem from '@/Componnets/ProductItem';
import styles from './style.module.scss';
import ProductsList from '@/Componnets/ProductsList';

export default function Favorites() {
  const [favoritedProducts, setFavoritedProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const savedFavs = JSON.parse(localStorage.getItem('favProducts')) || [];
      if (savedFavs.length > 0) {
        const res = await fetch('/api/favoriteProducts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids: savedFavs }),
        });

        if (res.ok) {
          const products = await res.json();
          setFavoritedProducts(products);
        }
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className={styles.shop}>
      <div className={styles.content}>
        <ProductsList productByCat={favoritedProducts} />
      </div>
    </div>
  );
}
