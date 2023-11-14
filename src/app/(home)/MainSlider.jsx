'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/css/bundle';
import SingleMainSlider from './SingleMainSlider';
import mainSlider from '@/data/mainSlider';

const MainSlider = () => {
  return (
    <section className='main-slider'>
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect='fade'
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainSlider;
