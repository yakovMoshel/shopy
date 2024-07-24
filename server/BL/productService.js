import { getProducts, getOneProduct,getSomeProducts } from "../DL/controllers/productController";

export const getProduct = (id) => getOneProduct(id);
export const getProductsByIds = (ids) => getSomeProducts(ids);
export const getAllProducts = () => getProducts();
export const getProductsByCategory = (categoryName) => getProducts(categoryName);
