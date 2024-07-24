import { categoryModel } from "../Models/categoryModel";

export const getCategories = async () => {
    const categories = await categoryModel.find();
    console.log("Categories in Controller:", categories); // הדפסת התוצאות
    return categories;
}
