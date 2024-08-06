import { categoryModel } from "../Models/categoryModel";

export const getCategories = async () => {
    const categories = await categoryModel.find();
    console.log("Categories in Controller:", categories); // הדפסת התוצאות
    return categories;
}

export const getCategory = async (id) => {
    const category = await categoryModel.findById( {_id: id});
    console.log("Category in Controller:", category); // הדפסת התוצאות
    return category;
}

export const createCategory = async (categoryData) => {
    const newCategory = new categoryModel(categoryData);
    await newCategory.save();
    return newCategory;
}