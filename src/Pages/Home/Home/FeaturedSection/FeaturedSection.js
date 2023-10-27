import React from 'react';
import './FeaturedSection.css'
import { useEffect } from 'react';
import {FaHeart ,FaRetweet ,FaShoppingCart} from 'react-icons/fa';


import FeaturedProduct1 from "../../../../assets/img/featured/feature-1.jpg"
import FeaturedProduct2 from "../../../../assets/img/featured/feature-2.jpg"
import FeaturedProduct3 from "../../../../assets/img/featured/feature-3.jpg"
import FeaturedProduct4 from "../../../../assets/img/featured/feature-4.jpg"
import FeaturedProduct5 from "../../../../assets/img/featured/feature-5.jpg"
import FeaturedProduct6 from "../../../../assets/img/featured/feature-6.jpg"
import FeaturedProduct7 from "../../../../assets/img/featured/feature-7.jpg"
import FeaturedProduct8 from "../../../../assets/img/featured/feature-8.jpg"
const FeaturedSection=()=> {
        useEffect(() => {
                const exploreBtn = document.querySelectorAll(".explore-filter-btn");
                const allCategoryPosts = document.querySelectorAll(".all");
            
                for (let i = 0; i < exploreBtn.length; i++) {
                  exploreBtn[i].addEventListener(
                    "click",
                    () => filterPosts(exploreBtn[i])
                  );
                }
            
                function filterPosts(item) {
                  changeActivePosition(item);
                  for (let i = 0; i < allCategoryPosts.length; i++) {
                    if (allCategoryPosts[i].classList.contains(item.getAttribute("id"))) {
                      allCategoryPosts[i].style.display = "block";
                    } else {
                      allCategoryPosts[i].style.display = "none";
                    }
                  }
                }
            
                function changeActivePosition(activeItem) {
                  for (let i = 0; i < exploreBtn.length; i++) {
                    exploreBtn[i].classList.remove("active");
                  }
                  activeItem.classList.add("active");
                }
              }, []);



        // const exploreBtn = document.querySelectorAll(".explore-filter-btn");
        // const allCategoryPosts = document.querySelectorAll(".all");
        // console.log("allCat    egoryPosts",allCategoryPosts)
        
        // for (let i = 0; i < exploreBtn.length; i++) {
        //   exploreBtn[i].addEventListener(
        //     "click",
        //     filterPosts.bind(this, exploreBtn[i])
        //   );
        // }
        
        // function filterPosts(item) {
        //   changeActivePosition(item);
        //   console.log('this is a item',item)
        //   for (let i = 0; i < allCategoryPosts.length; i++) {
        //     if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
        //       allCategoryPosts[i].style.display = "block";
        //     } else {
        //       allCategoryPosts[i].style.display = "none";
        //     }
        //   }
        // }
        
        // function changeActivePosition(activeItem) {
        //   for (let i = 0; i < exploreBtn.length; i++) {
        //     exploreBtn[i].classList.remove("active");
        //   }
        //   activeItem.classList.add("active");
        // }
        //active bootsrap +    
        return (
                <div>
                    <section className="featured spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title FeaturedProduct">
          <h2>Featured Product</h2>
        </div>
        <div className="featured__controls">
          <ul>
            <li className="explore-filter-btn" id='all' data-filter="*">
              All
            </li>
            <li className='explore-filter-btn' id='oranges' data-filter=".oranges">Oranges</li>
            <li className='explore-filter-btn' id='fresh' data-filter=".fresh-meat">Fresh Meat</li>
            <li className='explore-filter-btn' id='vegetables' data-filter=".vegetables">Vegetables</li>
            <li className='explore-filter-btn' id='fastfood' data-filter=".fastfood">Fastfood</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row featured__filter">



      <div  className="col-lg-3 col-md-4 all  col-sm-6 mix oranges fresh-meat">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg" 
            style={{
                backgroundImage: `url(${FeaturedProduct1})`
              }}
          >
            <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>


      <div className="col-lg-3 all  col-md-4 col-sm-6 mix vegetables fastfood">
        <div className="featured__item">
        <div className="featured__item__pic set-bg" 
         style={{
                backgroundImage: `url(${FeaturedProduct2})`
              }}
        >
        <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
    </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 all  col-md-4 col-sm-6 mix vegetables fastfood">
        <div className="featured__item">
        <div className="featured__item__pic set-bg" 
         style={{
                backgroundImage: `url(${FeaturedProduct2})`
              }}
        >
        <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
    </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-3 all  col-md-4 col-sm-6 mix vegetables fastfood">
        <div className="featured__item">
        <div className="featured__item__pic set-bg" 
         style={{
                backgroundImage: `url(${FeaturedProduct2})`
              }}
        >
        <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
    </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>



      <div className="col-lg-3 all  col-md-4 col-sm-6 mix vegetables fresh-meat">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={{
                backgroundImage: `url(${FeaturedProduct3})`
              }}
          >
            <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>



      <div className="col-lg-3 all  col-md-4 col-sm-6 mix fastfood oranges">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={{
                backgroundImage: `url(${FeaturedProduct4})`
              }}

          >
           <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>

      <div className="col-lg-3 all  col-md-4 col-sm-6 mix fresh-meat vegetables">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={{
                backgroundImage: `url(${FeaturedProduct5})`
              }}
          >
             <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>

      <div className="col-lg-3 all  col-md-4 col-sm-6 mix oranges fastfood">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={{
                backgroundImage: `url(${FeaturedProduct6})`
              }}
          >
            <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>

      </div>
      <div className="col-lg-3 all  col-md-4 col-sm-6 mix fresh-meat vegetables">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={{
                backgroundImage: `url(${FeaturedProduct7})`
              }}
          >
             <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>


      <div className="col-lg-3 all  col-md-4 col-sm-6 mix fastfood vegetables">
        <div className="featured__item">
          <div
            className="featured__item__pic set-bg"
            style={{
                backgroundImage: `url(${FeaturedProduct8})`
              }}
          >
             <ul className="featured__item__pic__hover">
              <li>
                <a href="#">
            
                  <FaHeart></FaHeart>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaRetweet ></FaRetweet>
                </a>
              </li>
              <li>
                <a href="#">
                <FaShoppingCart></FaShoppingCart>
                </a>
              </li>
            </ul>
          </div>
          <div className="featured__item__text">
            <h6>
              <a href="#">Crab Pool Security</a>
            </h6>
            <h5>$30.00</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    
                </div>
        );
}

export default FeaturedSection;