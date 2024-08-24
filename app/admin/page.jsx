import { getProductsByIds } from '@/server/BL/productService';
import ProductItem from '@/Components/ProductItem';
import React from 'react'
import styles from './style.module.scss'
import { connectToMongo } from '@/server/DL/connectToMongo';
import ProductsList from '@/Components/ProductsList';
import AddProductForm from '@/Components/AddProductForm';
import { getAllCategories } from '@/server/BL/categoryService';
import AddPostForm from '@/Components/AddPostForm';
import AddCategoryForm from '@/Components/AddCategoryForm';

export default async function Admin() {

  await connectToMongo();
  const categories = await getAllCategories();
  
  return (
    <div className={styles.shop}>
      <div className={styles.content}>
        <h2>ממשק ניהול</h2>
        <AddProductForm categories={categories} />
        <AddPostForm />
        <AddCategoryForm />
      </div>
    </div>
  )
}