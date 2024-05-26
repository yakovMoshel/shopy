
import React from 'react'
import styles from "./style.module.scss"

import Link from 'next/link'
// TODO - server side rendering

export default function ProductItem({ product }) {

    const { _id, name, price, image } = product;

    return (
        <div className={styles.item}>
            <div className={styles.productName}>
                {name}
            </div>
            <div className={styles.image}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.footer}>
             {/* TODO - Link */}
                {price} <Link className={styles.orderButton}
                 href={`/Order/${_id}`}>הזמנה</Link>
            </div>
        </div>
    );
}
