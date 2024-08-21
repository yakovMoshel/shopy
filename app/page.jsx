import { connectToMongo } from '@/server/DL/connectToMongo';
import styles from "./style.module.scss"
import BelieveLine from '@/Componnets/BelieveLine';
import ProductItem from '@/Componnets/ProductItem';
import { getAllProducts, getProductsByCategory } from '@/server/BL/productService';
import Testimonial from '@/Componnets/Testimonial/Index';
import Link from 'next/link';


const Home = async () => {
  await connectToMongo();

  const allProducts = await getAllProducts()
  const limitedProducts = allProducts.slice(0, 4);

  return (
    <div className={styles.home}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src="aya.png" alt="" />
        </div>
        <div className={styles.headTitle}>
          עוגה שהיא פשוט ואו          <div className={styles.subtext}>
            היי, אני אילה, קונדיטורית מוסמכת ומעצבת עוגות, עם תשוקה ליצור עוגות ייחודיות וקסומות שיהפכו כל אירוע לחגיגה בלתי נשכחת
          </div>
          <div className={styles.btn}>
            <Link href="/shop" passHref>
              <button>לצפייה בעוגות</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.topProducts}>
        <div className={styles.sideTitle}>
          העוגות הפופולריות
        </div>      <div className={styles.products}>
          {limitedProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className={styles.title}>
        הטעם שעושה את ההבדל  </div>
      <BelieveLine />
      <div className={styles.testimonialContainer}>
        <Testimonial />
        <div className={styles.sideTitle}>
          הלקוחות המרוצים  </div>
      </div>
    </div>
  );
}

export default Home;