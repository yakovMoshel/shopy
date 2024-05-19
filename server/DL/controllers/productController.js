import { productModel } from "../productModel";

export const getProducts =  () => productModel.find();

