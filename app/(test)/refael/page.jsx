<<<<<<< HEAD
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
=======
import ProductItem from '@/Componnets/ProoductItem';
import { getAllProducts } from '@/server/BL/service';
import { connectToMongo } from '@/server/DL/connectToMongo';

export default async function Refael() {

  await connectToMongo();

  const products = await getAllProducts()

  return (
    <div>
      <h1>העוגות שלי</h1>

      {products.map((product) => (
        <div key={product._id}>
          <ProductItem product={product} />
          </div>
      ))}
    </div>

  );
}
>>>>>>> 81bddfe4dd87236ee636ae8072aecc1b7222c3db
