import TextModifier from 'react-text-modifier';
import Image from 'next/image';

const SingleMainSlider = ({ slider = {} }) => {
  console.log(slider);
  const { bg, title } = slider;

  return (
    <div className=''>
      <Image
        width={400}
        height={200}
        className='image-layer h-screen object-cover '
        src={bg}
        alt={bg}
      />
      {/* <div
        className='image-layer  '
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div> */}
      {/* <div className='absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details'>
        <TextModifier
          text={title}
          as='h1'
          renderSeparator={() => <div className='mt-1 md:mt-4' />}
          className='font-bold text-3xl md:text-4xl lg:text-5xl'
          highlight={['Easy', 'Shop']}
          highlightClassName='text-4xl md:text-5xl lg:text-6xl text-orange-500 text-white '
        />
      </div> */}
    </div>
  );
};

export default SingleMainSlider;
