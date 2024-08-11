import { createCategory, getCategories } from "../DL/controllers/categoryController";

export const getAllCategories = async () => {
    const categories = await getCategories();
    return categories;
}


export const newCategory = async (categoryData) => {
const  newCategory = await createCategory(categoryData);
return newCategory;
}