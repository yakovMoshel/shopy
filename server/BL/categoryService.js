import { createCategory, getCategories } from "../DL/controllers/categoryController";

export const getAllCategories = async () => {
    const categories = await getCategories();
    console.log("Fetched categories:", categories); // הדפסת התוצאות
    return categories;
}


export const newCategory = async (categoryData) => {
const  newCategory = await createCategory(categoryData);
console.log("Created category:", newCategory);
return newCategory;
}