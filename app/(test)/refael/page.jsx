import ProductItem from '@/Componnets/ProductItem';
import Home from '@/app/page';
import { getAllProducts } from '@/server/BL/productService';
import { connectToMongo } from '@/server/DL/connectToMongo';

export default async function Refael() {

  await connectToMongo();

  const products = await getAllProducts()

  return (
    <div>
      <h1>העוגות שלי</h1>

      {/* {products.map((product) => (
        <div key={product._id}>
          <ProductItem product={product} />
          </div>
      ))} */}
      <Home/>
    </div>

  );
}
// >>>>>>> 81bddfe4dd87236ee636ae8072aecc1b7222c3db
