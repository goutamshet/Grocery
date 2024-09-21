import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import vegetable from "../../../../Assets/vegetable.png";
import selectedVegetable from "../../../../Assets/selected-vegetable.png";
import fruits from "../../../../Assets/fruits.png";
import selectedFruit from "../../../../Assets/selected-fruit.png";
import meat from "../../../../Assets/meat.png";
import selectedMeat from "../../../../Assets/selected-meat.png";
import fish from "../../../../Assets/fish.png";
import selectedFish from "../../../../Assets/selected-fish.png";
import {useState} from "react"

function ProductsSlider() {
  const products = 
    [
      {
        image : vegetable,
        text : "Vegetable",
        selected : selectedVegetable
      },
      {
        image : fruits,
        text : "Fruits",
        selected : selectedFruit
      },
      {
        image : meat,
        text : "Meat",
        selected : selectedMeat
      },
      {
        image : fish,
        text : "Fish",
        selected : selectedFish
      }
    ]

  const[activeSlide , setActiveSlide] = useState(0);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    swipeToSlide: true,
    draggable: true,
    focusOnSelect : true,
    afterChange : (current) => setActiveSlide(current)
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((item,index) => (
          <div className="slider-item-container" key={index}>
            <div className="product-item-container">
              <div className={`product-icon-container ${index === activeSlide ? 'active-slide' : ''}`}>
                <img src={index === activeSlide ? item.selected : item.image} className="product-icon"/>
              </div>
              <div className={`product-title ${index === activeSlide ? 'active-slide' : ''}`}>{item.text}</div>
            </div>
          </div>
        ))}
        
      </Slider>
    </div>
  );
}

export default ProductsSlider;
