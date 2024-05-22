import { productModel } from "../Models/productModel";
import { messageModel } from "../Models/messageModel";


export const getProducts = (category = null) => {
  if (category) {
    return productModel.find({ category: category });
  }
  return productModel.find();
};

export const getOneProduct = (id) => productModel.findById(id);
export const createMessage = (message) => messageModel.create(message);


