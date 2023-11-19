'use client'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SingleMainSlider from './SingleMainSlider';
import mainSlider from '@/data/mainSlider';

const MainSlider = () => {
  return (
    <section className='main-slider'>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {mainSlider.map((item) => (
          // <SingleMainSlider key={item.id} slider={item} />
          <div
            style={{
              backgroundImage: `url(${item?.bg})`,
            }}
            className=''
            key={item.id}
          ></div>
        ))}
      </Carousel>
    </section>
  );
};

export default MainSlider;
