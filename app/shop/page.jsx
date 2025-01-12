'use client'
import { useState, useEffect, useMemo } from 'react';
import styles from './style.module.scss';
import SideBar from '@/Components/SideBar';
import ProductsList from '@/Components/ProductsList';
import { getProducts } from '@/server/actions/getProdacts.actions';
import Head from 'next/head';
export const dynamic = 'force-dynamic'


export default function Shop() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getProducts('');
            setProducts(fetchedProducts);
            setIsLoading(false);
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
            <Head>
                <title>מגוון עוגות מעוצבות - עוגות בנטו, עוגות לימי הולדת, ומארזים להזמנה בקריות והסביבה</title>
                <meta name="description" content="העוגות המעוצבות של אילה. עוגות בנטו, עוגות לימי הולדת, מארזים, והכל בהתאמה אישית בקריות והסביבה. הזמינו עכשיו" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SideBar
                setCategory={setCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm} />
            <div className={styles.content}>
                <ProductsList productByCat={filteredProducts} isLoading={isLoading} />
            </div>
        </div>
    );
}