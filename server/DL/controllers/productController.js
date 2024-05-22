import { productModel } from "../productModel";
import { Contact } from "../messageModel";

export const getProducts =  () => productModel.find();

export const getOneProduct =  (id) => productModel.findById(id);

export const creatMassge = (massge)=> Contact.create(massge);
