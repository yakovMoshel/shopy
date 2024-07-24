import { getCategories } from "../DL/controllers/categoryController";

export const getAllCategories = async () => {
    const categories = await getCategories();
    console.log("Fetched categories:", categories); // הדפסת התוצאות
    return categories;
}
