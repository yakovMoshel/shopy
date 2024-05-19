import { getAllProducts } from '@/server/BL/service';

export default async function Refael() {

const products= await getAllProducts()

  return (
<div>
  <h1>העוגות שלי</h1>
  {products.map((product) => (
    <div key={product._id}>{product.name} <img src={product.image} alt={product.name} /></div>
  ))}
</div>

  );
}