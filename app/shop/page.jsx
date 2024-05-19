import React from 'react'
import styles from './style.module.scss'
import SideBar from '@/Componnets/SideBar'

import ProductItem from '@/Componnets/ProductItem';
import { getAllProducts } from '@/server/BL/productService';
import { connectToMongo } from '@/server/DL/connectToMongo';

export default async function shop() {

    await connectToMongo();
    const products = await getAllProducts()

    return (
        <div className={styles.shop}>
        <SideBar />
        <div className={styles.content}>
          <h2>מוצרים</h2>
          <div className={styles.items}>
            {products.map((product) => (
                <ProductItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    )
}
