import React, { useEffect } from 'react';
import 'owl.carousel'; // Import the Owl Carousel library
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import the Owl Carousel CSS
import './latestProduct.css'; // Import your custom style
// import $ from 'jquery';
import { AiOutlineVerticalRight,AiOutlineVerticalLeft } from 'react-icons/fa';
 import  latestproducts1 from "../../../../assets/img/latest-product/lp-1.jpg"
 import latestproducts2 from "../../../../assets/img/latest-product/lp-2.jpg"
 import  latestproducts3 from"../../../../assets/img/latest-product/lp-3.jpg"


 

const LatestProduct = () => {
 
  useEffect(() => {
    // Initialize Owl Carousel inside the useEffect hook after the component mounts
    $(".latest-product__slider").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: false,
      nav: true,
      navText: ['<span className="fa">  <AiOutlineVerticalLeft></AiOutlineVerticalLeft><</span>', '<span className="fa">  <AiOutlineVerticalRight></AiOutlineVerticalRight><</span>'],
      smartSpeed: 1200,
      autoHeight: false,
      autoplay: true
    });
  },[]); // Empty dependency array to run this effect only once after the initial render
    
  return (
    <section className="latest-product spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Latest Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts1} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts2} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Top Rated Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts2} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts1} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts2} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Review Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts1} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts1} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts2} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src={latestproducts3} alt="" />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
}

export default LatestProduct;
