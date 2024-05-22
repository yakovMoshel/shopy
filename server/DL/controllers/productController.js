import { productModel } from "../productModel";
import { messageModel } from "../messageModel";

export const getProducts =  () => productModel.find();

export const getOneProduct =  (id) => productModel.findById(id);

export const creatMassge = (massge)=> messageModel.create(massge);
