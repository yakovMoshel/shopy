import React from 'react'
import styles from "./style.module.scss"

export default function ProductItem({ product }) {
    const { name, price, image } = product;

    return (
        <div className={styles.item}>
            <div className={styles.productName}>
                {name}
            </div>
            <div className={styles.image}>
                <img src={image} alt={name} />
            </div>
            {price}
        </div>
    );
}

