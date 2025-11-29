import React from 'react';
import { mainCarouselData } from './MainCarouselData.js'; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../App.css';



const Maincarousel = () => {
  const items = mainCarouselData.map( (item)=> <img className="cursor-pointer " role="presentation" src={item.image} alt=""/>)
  return (<AliceCarousel 
    items={items} 
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
  />)

  
};

export default Maincarousel;

