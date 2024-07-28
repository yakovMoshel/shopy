"use client"
import { getProductsByIds } from '@/server/BL/productService';
import ProductItem from '@/Componnets/ProductItem';
import React, { useEffect } from 'react'
import styles from './style.module.scss'
import { connectToMongo } from '@/server/DL/connectToMongo';
import ProductsList from '@/Componnets/ProductsList';

export default async function Favorites() {

  const [favoritedProducts, setFavoritedProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      await connectToMongo();

      const savedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
      const products = await getProductsByIds(savedFavs);
      setFavoritedProducts(products);
    };

    fetchFavorites();
  }, []);

    return (
        <div className={styles.shop}>
        <div className={styles.content}>
          <h2>מוצרים שאהבתי</h2>
          <ProductsList productByCat={favoritedProducts} ת/>
        </div>
      </div>
    )
}