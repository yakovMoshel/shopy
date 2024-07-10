"use server";
import { connectToMongo } from "../DL/connectToMongo";
import { getProductsByCategory } from '@/server/BL/productService';

export const getProducts = async () => {
    try {
        await connectToMongo();
        const productByCat = await getProductsByCategory('עוגות בנטו');
        // console.log(productByCat)
        return productByCat;
    } catch (error) {
        if (error.name === 'CategoryNotFound') {
            console.error('Category not found');
        } else {
            console.error('An unexpected error occurred:', error);
        }
    }
};
