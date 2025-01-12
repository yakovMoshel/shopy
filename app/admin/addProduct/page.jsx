import { connectToMongo } from '@/server/DL/connectToMongo';
import { getAllCategories } from '@/server/BL/categoryService';
import AddProductForm from '@/Components/AddProductForm';
import styles from './style.module.scss';
import AddCategoryForm from '@/Components/AddCategoryForm';

export default async function ProductsAdminPage() {
  await connectToMongo();
  const categories = await getAllCategories();
  
  return (
    <div className={styles.productsAdmin}>
      <h1>ניהול מוצרים</h1>
      <AddProductForm categories={categories} />
      <AddCategoryForm />
    </div>
  );
}