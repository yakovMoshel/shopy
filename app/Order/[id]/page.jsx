import styles from './style.module.scss';

// TODO - server side rendering
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getProduct } from '@/server/BL/service';

export default async function Page({ params }) {
    // connect
    await connectToMongo();

    // get one by id
    const product = await getProduct({ _id: params.id });

    // render
    return (
        <div className={styles.OrderPage}>
            <h1>{product.name}</h1>
            <div className={styles.optionsContainer}>
                <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} />
                    <p>Price: {product.price}₪</p>
                </div>
                <div className={styles.productDetails}>
                    <div className={styles.sizeOptions}>
                        <h3>בחר גודל:</h3>
                        <div>
                            <input
                                type="radio"
                                id="small"
                                name="size"
                                value="small"
                            />
                            <label htmlFor="small">קטן</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="medium"
                                name="size"
                                value="medium"
                            
                            />
                            <label htmlFor="medium">בינוני</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="large"
                                name="size"
                                value="large"
                            
                            />
                            <label htmlFor="large">גדול</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
