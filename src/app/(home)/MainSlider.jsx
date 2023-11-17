'use client'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SingleMainSlider from './SingleMainSlider';
import mainSlider from '@/data/mainSlider';
import Image from 'next/image';

const MainSlider = () => {
  return (
    <section className='main-slider'>
      <Carousel showArrows={true}>
        {mainSlider.map((item) => (
          // <SingleMainSlider key={item.id} slider={item} />
          <div
            style={{
              backgroundImage: `url(${item?.bg})`,
            }}
            className='image-layer'
            key={item.id}
            
          ></div>
        ))}
      </Carousel>
    </section>
  );
};

export default MainSlider;
