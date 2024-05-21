import { productModel } from "../Models/productModel";

export const getProducts =  () => productModel.find();

