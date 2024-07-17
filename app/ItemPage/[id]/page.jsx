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
    const { _id, name, price, images, description, subtitle, colors } = item;

    const colorMap = {
        'ורוד': '#FFB6C1',  // Light Pink
        'לבן': '#FFFFFF',  // White
        'ירוק': '#98FB98',  // Pale Green
        'צהוב': '#FFFFE0',  // Light Yellow
        'אדום': '#FFA07A',  // Light Salmon
        'קרם': '#FFFDD0',  // Cream
        'כחול': '#ADD8E6',  // Light Blue
        'שחור': '#000000',  // Black
        'תכלת': '#E0FFFF',  // Light Cyan
        'כתום': '#FFDAB9',  // Peach Puff
        'אפרסק': '#FFE5B4',  // Peach
        // הוסף צבעים נוספים לפי הצורך
    };

    const backgroundColor = colorMap[colors] || '#ffffff';


    return (
        <div className={styles.ItemPage}>
                       <div className={styles.leftSide}>
                <ImageGallery images={images} />
            </div>
            <div className={styles.rightSide}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.details}>
                    {description}
                </div>
                <div className={styles.infoAndOrder}>

                    <div className={styles.additionalInfo}>
                        <div className={styles.infoItem}>
                            <FaRuler /> 10*6 ס"מ
                        </div>
                        <div className={styles.infoItem}>
                            <FaIceCream /> וניל/שוקולד
                        </div>
                        <div className={styles.infoItem}>
                            <FaCheckCircle /> חלבי
                        </div>
                            {colors.map((color, index) => {
                                const backgroundColor = colorMap[color] || '#ffffff';
                                return (
                                    <div className={styles.colors} key={index} className={styles.colorCircle} style={{ backgroundColor }}>
                                    </div>
                                );
                            })}
                        
                        <div className={styles.price}>
                            {price} ₪
                        </div>

                    </div>
                    <Link className={styles.orderButton} href={`/Order/${_id}`}>הזמנה</Link>
                </div>

                <div className={styles.infoItem} >
                            <FaShareAlt /> שיתוף
                        </div>


            </div>
 
        </div>
    );
}