import { connectToMongo } from '@/server/DL/connectToMongo';
import { productModel } from '@/server/DL/productModel';
import styles from "./style.module.scss"
import BelieveLine from '@/Componnets/BelieveLine';
import ProductItem from '@/Componnets/ProductItem';
import { getAllProducts } from '@/server/BL/service';

const Home = async () => {

  await connectToMongo();

  // דוגמת דאטה להעלאה ראשונית


  // הוספת המוצרים
  //   await productModel.insertMany(products);

  //   קבלת כל המוצרים ממסד הנתונים   
  //   const productsDb = await productModel.find().lean();
  await connectToMongo();

  const products = await getAllProducts()
  const limitedProducts = products.slice(0, 5);

  return (
    <div className={styles.home}>

      <div className={styles.coverImage}>

        <img src="1.jpg" alt="" />
      </div>
      <div className={styles.about}>
        <h1>היי, ברוכים הבאים!</h1>
        <p>
          אני קונדיטורית מוכשרת ומנוסה, בעלת ידע עמוק בעולם המתוקים והאפייה. בסטודיו המרהיב שלי, אני מתמקדת ביצירת מנות קינוח ייחודיות ומושקעות, העשויות מחומרי גלם איכותיים ביותר. עם לקוחות מרחבי הארץ, אני מפגינה מחויבות לשירות אדיב ומקצועי, תוך שמירה על סטנדרטים גבוהים של חדשנות ועיצוב. בין אם אתם מחפשים עוגה מרשימה לאירוע מיוחד או מגוון של פצ'ווקים ופטיסריות לחגיגה קטנה, אשמח להפוך את החלומות שלכם למציאות מתוקה ומפתה.
        </p>
      </div>
      <BelieveLine />
      <h1>מוצרים נבחרים</h1>
      <div className={styles.topProducts}>

        {limitedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;