import './carousel.scss';
import Slider from 'react-slick';
import React, {FC, useRef } from 'react';

const config = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 200,
  cssEase: 'ease',
  swipe: true,
};

export interface ListProps {
  image: string;
  text: string;
  videoUrl: string;
}

export interface CarouselProps {
  list: ListProps[];
  handleVideoClick: (index: number) =>  void;
}

export const Carousel: FC<CarouselProps> = ({list, handleVideoClick} : CarouselProps) => {
  const sliderRef = useRef(null);

  return (
    <div className='slider'>
      <div className='text-container'>
          <p>BLICK BITES</p>
          <p>All videos</p>
      </div>
        <Slider {...config} ref={sliderRef}>
          {list?.map((item, index) => {
              return (
                <div className='slide-container' onClick={() => handleVideoClick(index)} key={index}>
                  <img src={item.image} alt="" className='carousel-image' />
                  <p className='slide-text'>{item.text}</p>
                </div>
              );
          })}
        </Slider>
    </div>
  );
}
