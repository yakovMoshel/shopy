import { productModel } from "../Models/productModel";
import { messageModel } from "../Models/messageModel";
import { categoryModel } from "../Models/categoryModel";

export const getProducts = async (categoryName) => {
  if (categoryName) {
  const prodactsByCategory = await productModel.find({ category: categoryName });
    return prodactsByCategory
  }
  return productModel.find();
};

export const getOneProduct = (id) => productModel.findById(id);
export const getSomeProducts = (ids) => productModel.find({ _id: { $in: ids } });
export const createMessage = (message) => messageModel.create(message);

