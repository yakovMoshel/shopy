'use client'
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import SideBar from '@/Componnets/SideBar';
import ProductList from '@/Componnets/ProdactsList';
import { getProducts } from '@/server/actions/getProdacts.actions';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getProducts('');
            setProducts(fetchedProducts);
        }
        fetchProducts();
    }, []);

    const filteredProducts = category 
        ? products.filter(product => product.category === category)
        : products;

    return (
        <div className={styles.shop}>
            <SideBar setCategory={setCategory} />
            <div className={styles.content}>
                <h2>מוצרים</h2>
                <ProductList productByCat={filteredProducts} />
            </div>
        </div>
    );
}