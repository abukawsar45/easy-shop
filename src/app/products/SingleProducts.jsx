import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleProducts = ({ product }) => {
  const { imageUrl, title, price, _id } = product || {};

  return (
    <Link href={`products/${_id}`}>
      <div className='card card-compact bg-base-100 shadow-2xl h-full justify-between'>
        <figure>
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            // placeholder='blur'
            // blurDataURL=''
            className='max-h-[300px] object-cover'
          />
        </figure>
        <div className='card-body flex-grow-0'>
          <h2 className='card-title'>{title}</h2>
          <h3>Price: {price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SingleProducts;
