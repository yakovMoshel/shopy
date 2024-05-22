<<<<<<< HEAD
import { productModel } from "../productModel";
import { Contact } from "../messageModel";
=======
import { productModel } from "../Models/productModel";
>>>>>>> 276b8455b0c3a2eb1f99751cd6629f008433eb24

export const getProducts =  () => productModel.find();

export const getOneProduct =  (id) => productModel.findById(id);

export const creatMassge = (massge)=> Contact.create(massge);
