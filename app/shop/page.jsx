import styles from './style.module.scss';
import SideBar from '@/Componnets/SideBar';
import ProductList from '@/Componnets/ProdactsList';
import { getProducts } from '@/server/actions/getProdacts.actions';

export default async function Shop() {
    const products = await getProducts();
    // console.log(products)
    
    return (
        <div className={styles.shop}>
            <SideBar setCategory={products}/>
            <div className={styles.content}>
                <h2>מוצרים</h2>
                <ProductList productByCat={products} />
            </div>
        </div>
    );
}
