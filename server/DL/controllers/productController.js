import { productModel } from "../Models/productModel";
import { messageModel } from "../Models/messageModel";
import { categoryModel } from "../Models/categoryModel";

export const getProducts = async (categoryName = null) => {
  if (categoryName) {
    const category = await categoryModel.findOne({ name: categoryName });
    // if (!category) {
    //   throw new Error('Category not found');
    // }
    // return productModel.find({ category: category._id });
  }
  return productModel.find();
};

export const getOneProduct = (id) => productModel.findById(id);
export const createMessage = (message) => messageModel.create(message);
