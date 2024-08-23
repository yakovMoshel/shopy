"use client";
import React, { useState } from 'react'
import styles from './style.module.scss';
import OrderSettings from '../OrderSettings';

export default function OrderButton({ item }) {
    const [showOrderSettings, setShowOrderSettings] = useState(false);

    const handleOrderClick = () => {
        setShowOrderSettings(!showOrderSettings);
    };

    return (
        <>
            <button className={styles.orderButton} onClick={handleOrderClick}>
                הזמנה
            </button>
            {showOrderSettings && (
             <OrderSettings product={item} />
              )
            }
        </>
    )
}
