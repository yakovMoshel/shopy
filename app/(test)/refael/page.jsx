import ProductItem from '@/Componnets/ProductItem';
import Home from '@/app/page';
import { getAllProducts } from '@/server/BL/service';
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