import React from 'react'
import styles from './style.module.scss'
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getAllCategories } from '@/server/BL/categoryService';
import Link from 'next/link';

export default async function Admin({ children }) {

  await connectToMongo();
  const categories = await getAllCategories();
  
  return (
    <div className={styles.shop}>
      <div className={styles.sidebar}>
        <h2>ממשק ניהול</h2>
        <nav>
          <ul>
            <li>
              <Link href="/admin">דף ראשי</Link>
            </li>
            <li>
              <Link href="/admin/addProduct">ניהול מוצרים</Link>
            </li>
            <li>
              <Link href="/admin/addPost">ניהול פוסטים</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}