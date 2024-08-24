"use client";
import React, { useState } from 'react';
import styles from './style.module.scss';
import dynamic from 'next/dynamic';

const OrderPopup = dynamic(() => import('../OrderPopup'), { ssr: false });

export default function OrderButton({ item }) {
    const [showForm, setShowForm] = useState(false);

    const handleClose = () => {
        setShowForm(false);
    };

    return (
        <div className={styles.orderButtonContainer}>
            <button className={styles.orderButton} onClick={() => setShowForm(true)}>
                הזמנה
            </button>
            {showForm && <OrderPopup item={item} onClose={handleClose} />}
        </div>
    );
}
