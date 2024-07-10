import { connectToMongo } from '@/server/DL/connectToMongo';
import { productModel } from '@/server/DL/Models/productModel';
import styles from "./style.module.scss"
import BelieveLine from '@/Componnets/BelieveLine';
import ProductItem from '@/Componnets/ProductItem';
import { getAllProducts, getProductsByCategory } from '@/server/BL/productService';
import Testimonial from '@/Componnets/Testimonial/Index';
import ContactForm from '@/Componnets/ContactForm';

const Home = async () => {
  // התחברות למונגו
  await connectToMongo();

  // דוגמת דאטה להעלאה ראשונית
  const products = [
    {
      name: "עוגה מעוצבת",
      subtitle: "עוגה בעיצוב אישי",
      description: "עוגה מעוצבת בהתאמה אישית לכל אירוע, עם טעמים מגוונים ועיצובים מיוחדים.",
      price: 200,
      categorySlug: "cakes",
      images: ["cake1.jpg", "cake2.jpg"],
      stock: 10,
      colors: ["אדום", "כחול", "ירוק"],
      flavors: ["שוקולד", "וניל", "פירות יער"]
    },
    {
      name: "עוגת בנטו",
      subtitle: "עוגת מיני יפנית",
      description: "עוגת בנטו קטנה ומקסימה במגוון טעמים ועיצובים, מושלמת כמתנה או כפינוק אישי.",
      price: 150,
      categorySlug: "bento-cakes",
      images: ["bento1.jpg", "bento2.jpg"],
      stock: 15,
      colors: ["ורוד", "צהוב", "לבן"],
      flavors: ["מאצ'ה", "תות", "שוקולד לבן"]
    },
    {
      name: "מארז יום האהבה",
      subtitle: "מארז מפנק לאוהבים",
      description: "מארז מיוחד ליום האהבה המכיל עוגות, שוקולדים וממתקים במגוון טעמים.",
      price: 300,
      categorySlug: "valentines",
      images: ["valentine1.jpg", "valentine2.jpg"],
      stock: 20,
      colors: ["אדום", "לבן", "ורוד"],
      flavors: ["שוקולד", "פטל", "קרמל"]
    },
    {
      name: "מארז יום הולדת",
      subtitle: "מארז חגיגי",
      description: "מארז מיוחד ליום הולדת המכיל עוגות קטנות, ממתקים וקישוטים.",
      price: 250,
      categorySlug: "birthday",
      images: ["birthday1.jpg", "birthday2.jpg"],
      stock: 12,
      colors: ["כחול", "צהוב", "כתום"],
      flavors: ["וניל", "לימון", "אוכמניות"]
    },
    {
      name: "עוגת פרחים",
      subtitle: "עוגה מעוטרת בפרחים אכילים",
      description: "עוגה מעוטרת בפרחים אכילים במגוון טעמים ועיצובים מיוחדים.",
      price: 220,
      categorySlug: "flower-cakes",
      images: ["flower1.jpg", "flower2.jpg"],
      stock: 8,
      colors: ["סגול", "ורוד", "כחול"],
      flavors: ["פירות יער", "לימון", "שוקולד מריר"]
    }
  ];

  // הוספת המוצרים (מוסתר כרגע)
  // await productModel.insertMany(products);

  // קבלת כל המוצרים ממסד הנתונים
  // const productsDb = await productModel.find().lean();

  const productByCat = await getProductsByCategory("עוגת בנטו")
  const allProducts = await getAllProducts()
  const limitedProducts = allProducts.slice(0, 5);

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

      <div className={styles.testimonialContainer}>
<Testimonial/>

</div>

<div className={styles.formContainer}>
<ContactForm type="line"/>

</div>
    </div>
  );
}

export default Home;