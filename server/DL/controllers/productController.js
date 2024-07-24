
import { productModel } from "../Models/productModel";
import { messageModel } from "../Models/messageModel";
import { categoryModel } from "../Models/categoryModel";

export const getProducts = async (categoryName) => {
  if (categoryName) {
    const productsByCategory = await productModel.find({ category: categoryName, isActive: true });
    return productsByCategory;
  }
  return productModel.find({ isActive: true });
};

export const getOneProduct = (id) => productModel.findOne({ _id: id, isActive: true });
export const getSomeProducts = (ids) => productModel.find({ _id: { $in: ids }, isActive: true });
export const createMessage = (message) => messageModel.create(message);
