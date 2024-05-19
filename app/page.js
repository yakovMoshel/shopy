import { connectToMongo } from '@/server/DL/connectToMongo';
import { productModel } from '@/server/DL/productModel';

const Home = async () => {

  await connectToMongo();

  // דוגמת דאטה להעלאה ראשונית


  // הוספת המוצרים
  //   await productModel.insertMany(products);

  //   קבלת כל המוצרים ממסד הנתונים   
  //   const productsDb = await productModel.find().lean();


  return (
    <div>
      <h1>Welcome to the bakery website</h1>
      {/* <ul>
        {productsDb.map(product => (
          <li key={product._id}>
            {product.name}: {product.description}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
