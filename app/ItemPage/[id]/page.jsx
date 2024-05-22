import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getProduct } from '@/server/BL/productService';


export default async function ItemPage({ params }) {

    await connectToMongo()
    const item = await getProduct({ _id: params.id })

    console.log(item);
    const { _id, name, price, image } = item;

    return (
        <div className={styles.ItemPage}>

            <div className={styles.titel}>
                {name}
            </div>

            <div className={styles.pic}>
                <img src={image} alt={_id} />
            </div>

            <div className={styles.price}>
                {price}
            </div>


            <Link className={styles.orderButton}
                href={`/Order/${_id}`}>הזמנה</Link>
        </div>
    )
}
