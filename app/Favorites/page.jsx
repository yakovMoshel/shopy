import { getProductsByIds } from '@/server/BL/productService';
import ProductItem from '@/Componnets/ProductItem';
import React from 'react'
import styles from './style.module.scss'
import { connectToMongo } from '@/server/DL/connectToMongo';

export default async function Shop() {

    await connectToMongo();

    const savedFavs =["667ae015768e568b84ad49fe","667ae015768e568b84ad4a01","6679b3d48ffd63d10840c2d4"];
        
    // קריאה לפונקציה עם המזהים
    const favoritedProducts = await getProductsByIds(savedFavs)
        

    return (
        <div className={styles.shop}>
        <div className={styles.content}>
          <h2>מוצרים</h2>
          <div className={styles.items}>
            {favoritedProducts.map((product) => (
                <ProductItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    )
}