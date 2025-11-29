import React from "react";
import Maincarousel from "../../components/Homecarousel/Maincarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";

export const Homepage = () => {
  return (
    <div>
      <Maincarousel></Maincarousel>
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-5">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
        
      </div>

      
      
    </div>
  );
};
