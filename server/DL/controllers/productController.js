<<<<<<< HEAD
=======
// import { productModel } from "../Models/productModel";
// import { messageModel } from "../Models/messageModel";
// import { categoryModel } from "../Models/categoryModel";

// export const getProducts = async (categoryName) => {
//   if (categoryName) {
//   const prodactsByCategory = await productModel.find({ category: categoryName });
//     return prodactsByCategory
//   }
//   return productModel.find();
// };

// export const getOneProduct = (id) => productModel.findById(id);
// export const getSomeProducts = (ids) => productModel.find({ _id: { $in: ids } });
// export const createMessage = (message) => messageModel.create(message);

>>>>>>> 5b5aa815b6173f171115232d5dfc782bebb549e0
import { productModel } from "../Models/productModel";
import { messageModel } from "../Models/messageModel";
import { categoryModel } from "../Models/categoryModel";

export const getProducts = async (categoryName) => {
  if (categoryName) {
<<<<<<< HEAD
  const prodactsByCategory = await productModel.find({ category: categoryName });
    return prodactsByCategory
  }
  return productModel.find();
};

export const getOneProduct = (id) => productModel.findById(id);
export const getSomeProducts = (ids) => productModel.find({ _id: { $in: ids } });
export const createMessage = (message) => messageModel.create(message);

=======
    const productsByCategory = await productModel.find({ category: categoryName, isActive: true });
    return productsByCategory;
  }
  return productModel.find({ isActive: true });
};

export const getOneProduct = (id) => productModel.findOne({ _id: id, isActive: true });
export const getSomeProducts = (ids) => productModel.find({ _id: { $in: ids }, isActive: true });
export const createMessage = (message) => messageModel.create(message);
>>>>>>> 5b5aa815b6173f171115232d5dfc782bebb549e0
