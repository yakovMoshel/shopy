import styles from './style.module.scss';

// TODO - server side rendering
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getProduct } from '@/server/BL/productService';
import SizeOptions from '@/Componnets/OrderSettings';

export default async function Page({ params }) {

    // connect
    await connectToMongo();

    // get one by id
    const product = await getProduct({ _id: params.id });

    return (
        <div className={styles.OrderPage}>
            <div className={styles.optionsContainer}>
                <div className={styles.productImage}>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p>מחיר: {product.price}₪</p>
                    <p>{product.description}</p>
                    <p>במלאי: {product.stock}</p>
                    <img src={product.images[0]} alt={product.name} />
                </div>
                
                <div className={styles.productDetails}>
                    <SizeOptions product={product}/>
                </div>
            </div>
        </div>
    );
}
