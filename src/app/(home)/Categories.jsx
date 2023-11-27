import getCategories from '@/getCategories';
import SingleCategories from './SingleCategories';
//  import { useEffect, useState } from 'react';

const Categories =async () => {
  const categories = await getCategories() || [];
  console.log(categories)
  // const [categories, setCategories ] = useState([]);
  // useEffect(() => {
  //   fetch('/cate.json').then(res => res.json()).then(data => {
  //     console.log(data)
  //     setCategories(data);
  //   })
  // } ,[])
  
  return (
    <div className='mt-14'>
      <h3 className='mb-5 text-3xl font-semibold'>Categories</h3>
      <div className='mb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {categories.map((category) => (
          <SingleCategories key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
