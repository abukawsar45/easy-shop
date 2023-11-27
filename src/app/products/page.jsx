import React from 'react';
import SingleProducts from './singleProducts';
import getProducts from '@/getProducts';

export const revalidate = 0;

export const metadata = {
  title: 'Products - Easy Shop',
}

const ProductsPage = async ({ searchParams: { categoryId } }) => {
  const products = await getProducts(categoryId);
  console.log({products})

  return (
    <div className='mt-10'>
      <div className='grid grid-cols-3 gap-5 mb-5'>
        {products.map((product) => (
          <SingleProducts key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;