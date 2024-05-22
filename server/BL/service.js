
import { getProducts } from "../DL/controllers/productController";

import { getOneProduct } from "../DL/controllers/productController";

export const getProduct = (id) => getOneProduct(id)

export const getAllProducts = () => getProducts()
