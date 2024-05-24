import { getAllProducts } from '@/server/BL/service';

export default function Refael() {

const products=getAllProducts()
  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        {products.map((hotel) => (
          <li key={hotel._id}>{hotel.title}</li>
        ))}
      </ul>
    </div>
  );
}
