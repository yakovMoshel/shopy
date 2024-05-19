import React from 'react'
import styles from './style.module.scss'
import SideBar from '@/Componnets/SideBar';
import PostItem from '@/Componnets/PostItem';
import { getAllProducts } from '@/server/BL/service';
import { connectToMongo } from '@/server/DL/connectToMongo';

export default async function Blog() {

    await connectToMongo();
    const products = await getAllProducts()

    return (
        <div className={styles.blog}>
            <SideBar />
            <h2>Blog</h2>
            <div className={styles.content}>
                <h2>מוצרים</h2>
                <div className={styles.items}>
                    {products.map((product) => (
                        <PostItem key={product._id} product={product}  />
                    ))}
                </div>
            </div>
        </div>
    )
}
