import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getProduct } from '@/server/BL/productService';
import { FaShareAlt, FaRuler, FaIceCream, FaCheckCircle } from 'react-icons/fa';
import ImageGallery from '@/Componnets/ImageGallery';

export default async function ItemPage({ params }) {
  await connectToMongo();
  const item = await getProduct({ _id: params.id });
  console.log(item);
  const { _id, name, price, images, description, subtitle } = item;

  return (
    <div className={styles.ItemPage}>
            <div className={styles.rightSide}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.details}>
{description}
                </div>
                <div className={styles.additionalInfo}>
                    <div className={styles.infoItem}>
                        <FaRuler /> מידות
                    </div>
                    <div className={styles.infoItem}>
                        <FaIceCream /> טעמים
                    </div>
                    <div className={styles.infoItem}>
                        <FaCheckCircle /> אפשרי פרווה
                    </div>
                    <div className={styles.infoItem} >
                        <FaShareAlt /> שיתוף
                    </div>

                    <div className={styles.colorCircle}>
                </div>
                <div className={styles.colorCircle2}>
                </div>
                <div className={styles.price}>
                    {price} ₪
                </div>
                
                </div>
                <Link className={styles.orderButton} href={`/Order/${_id}`}>הזמנה</Link>
   

            </div>
            <div className={styles.leftSide}>
        <ImageGallery images={images} />
      </div>
    </div>
  );
}