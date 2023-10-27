import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import "./categories.css";
import { AiOutlineVerticalRight,AiOutlineVerticalLeft } from 'react-icons/fa';

import  '../../../../assets/img/categories/cat-1.jpg'
import categories2 from '../../../../assets/img/categories/cat-2.jpg'
import categories3 from '../../../../assets/img/categories/cat-3.jpg'
import categories4 from '../../../../assets/img/categories/cat-4.jpg'
import categories5 from '../../../../assets/img/categories/cat-5.jpg'
import './categories.css'
const Categories = () => {
  const owlCarouselOptions = {
    loop: true,
    margin: 0,
    items: 4,
    dots: false,
    nav: true,
    navText: ['<span className="fa"><AiOutlineVerticalLeft></AiOutlineVerticalLeft><</span>', '<span className="fa">  <AiOutlineVerticalRight></AiOutlineVerticalRight><</span>'],
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };






  return (
    <section className="categories">
      <div className="container">
        <div className="row">
      
          <OwlCarousel className="categories__slider owl-carousel" {...owlCarouselOptions}>
            <div className="col-md-2 col-sm-12 ">
              <div className="categories__item set-bg" 
              style={{
                backgroundImage: `url(${categories3})`
              }}
              >
                <h5>
                  <a href="#">Fresh Fruit</a>
                </h5>
              </div>
            </div>
           
            <div className="col-md-2 col-sm-12">
              <div className="categories__item set-bg width-full"    
                   style={{
                    backgroundImage: `url(${categories3})`
                  }}
                  >
                <h5>
                  <a href="#">Vegetables</a>
                </h5>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="categories__item  bg-cover set-bg" 
           style={{
            backgroundImage: `url(${categories3})`
          }}

              >
                <h5>
                  <a href="#">drink fruits</a>
                </h5>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="categories__item set-bg" 
                    style={{
                      backgroundImage: `url(${categories3})`
                    }}>
                <h5>
                  <a href="#">drink fruits</a>
                </h5>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="categories__item set-bg" 
                    style={{
                      backgroundImage: `url(${categories3})`
                    }}>
                <h5>
                  <a href="#">drink fruits</a>
                </h5>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Categories;
