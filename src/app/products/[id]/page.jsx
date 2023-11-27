import getSingleProduct from '@/getSingleProduct';
import React from 'react';

export const revalidate = 0;

const ProductDetails =async ({params:{id} }) => {
  const product = getSingleProduct(id) || {};
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
};

export default ProductDetails;