"use server";
import { connectToMongo } from "../DL/connectToMongo";
import { getProduct, getProductsByCategory } from '@/server/BL/productService';

export const getProducts = async (Category) => {
    try {
        await connectToMongo();
        const productByCat = await getProductsByCategory(Category);
        return productByCat;
    } catch (error) {
        if (error.name === 'CategoryNotFound') {
            console.error('Category not found');
        } else {
            console.error('An unexpected error occurred:', error);
        }
    }
};


