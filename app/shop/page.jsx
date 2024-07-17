'use client'
import { useState, useEffect, useMemo } from 'react';
import styles from './style.module.scss';
import SideBar from '@/Componnets/SideBar';
import ProductList from '@/Componnets/ProdactsList';
import { getProducts } from '@/server/actions/getProdacts.actions';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getProducts('');
            setProducts(fetchedProducts);
        }
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        return products
            .filter(product => 
                (category ? product.category === category : true) &&
                (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
            );
    }, [products, category, searchTerm]);

    return (
        <div className={styles.shop}>
            <SideBar
                setCategory={setCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm} />
            <div className={styles.content}>
                <h2>מוצרים</h2>
                <ProductList productByCat={filteredProducts} />
            </div>
        </div>
    );
}