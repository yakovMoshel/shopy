import React from 'react'
import styles from './style.module.scss'
import SideBar from '@/Componnets/SideBar'
import ProductItem from '@/Componnets/ProductItem'
import { getProductsByCategory } from '@/server/BL/productService'
import { connectToMongo } from '@/server/DL/connectToMongo'

export default async function Shop() {
  await connectToMongo();

  let productByCat = [];

  try {
      productByCat = await getProductsByCategory('עוגה מעוצבת');
  } catch (error) {
      if (error.name === 'CategoryNotFound') {
          console.error('Category not found');
      } else {
          console.error('An unexpected error occurred:', error);
      }
  }
    return (
        <div className={styles.shop}>
            <SideBar />
            <div className={styles.content}>
                <h2>מוצרים</h2>
                <div className={styles.items}>
                    {productByCat.map((product) => (
                        <ProductItem key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
