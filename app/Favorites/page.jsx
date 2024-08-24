"use client";
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import ProductsList from '@/Componnets/ProductsList';

export default function Favorites() {
  const [favoritedProducts, setFavoritedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // הוספת מצב טעינה
  const [hasFavorites, setHasFavorites] = useState(true); // מצב לבדוק אם יש מוצרים מועדפים

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
          if (products.length === 0) {
            setHasFavorites(false);
          }
        } else {
          setHasFavorites(false);
        }
      } else {
        setHasFavorites(false);
      }
      setIsLoading(false);
    };

    fetchFavorites();
  }, []);

  return (
    <div className={styles.shop}>
      <div className={styles.content}>
        {isLoading ? (
          <ProductsList isLoading={isLoading} />
        ) : hasFavorites ? (
          <ProductsList productByCat={favoritedProducts} />
        ) : (
          <div className={styles.noFavorites}>לא נוספו מוצרים מועדפים</div>
        )}
      </div>
    </div>
  );
}
