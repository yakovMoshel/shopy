import { getProductsByIds } from '@/server/BL/productService';
import ProductItem from '@/Componnets/ProductItem';
import React from 'react'
import styles from './style.module.scss'
import { connectToMongo } from '@/server/DL/connectToMongo';
import ProductsList from '@/Componnets/ProductsList';
import AddProductForm from '@/Componnets/AddProductForm';
import { getAllCategories } from '@/server/BL/categoryService';
import AddPostForm from '@/Componnets/AddPostForm';
// import EditProductForm from '@/Componnets/EditProductModal/Index';

export default async function Admin() {

    await connectToMongo();


    const categories = await getAllCategories();

    return (
        <div className={styles.shop}>
        <div className={styles.content}>
          <h2>ממשק ניהול</h2>
          <AddProductForm categories={categories}/>
          <AddPostForm/>
          
        </div>
      </div>
    )
}