import React from 'react';
import"./hero.css"
import heros from "../../../../assets/img/hero/banner.jpg";
import { FaBars, FaPhone ,FaDownload} from 'react-icons/fa';
import { useState } from 'react';


const Heros = () => {
  const [showCategories, setShowCategories] = useState(false);
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };
        // ("select").niceSelect();



  return (
<section className="hero">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">


        <div className="dropdown-center hero__categories">
          <div 
          onClick={toggleCategories} 
          className="hero__categories__all grid gap-7">
          
            <FaBars className='ss'></FaBars>
            <span className=''>All departments</span>
     <FaDownload></FaDownload>
          </div>
          <ul  style={{ display: showCategories ? 'block' : 'none' }}>
            <li>
              <a href="#">Fresh Meat</a>
            </li>
            <li>
              <a href="#">Vegetables</a>
            </li>
            <li>
              <a href="#">Fruit &amp; Nut Gifts</a>
            </li>
            <li>
              <a href="#">Fresh Berries</a>
            </li>
            <li>
              <a href="#">Ocean Foods</a>
            </li>
            <li>
              <a href="#">Butter &amp; Eggs</a>
            </li>
            <li>
              <a href="#">Fastfood</a>
            </li>
            <li>
              <a href="#">Fresh Onion</a>
            </li>
            <li>
              <a href="#">Papayaya &amp; Crisps</a>
            </li>
            <li>
              <a href="#">Oatmeal</a>
            </li>
            <li>
              <a href="#">Fresh Bananas</a>
            </li>
          </ul>
        </div>


      </div>
      <div className="col-lg-9">
        <div className="hero__search">
          <div className="hero__search__form">
            <form action="#">
              <div className="hero__search__categories">
                All Categories
                <span className="arrow_carrot-down" />
              </div>
              <input type="text" placeholder="What do yo u need?" />
              <button type="submit" className="site-btn">
                SEARCH
              </button>
            </form>
          </div>
          <div className="hero__search__phone">
            <div className="hero__search__phone__icon">
    
              <FaPhone></FaPhone>
            </div>
            <div className="hero__search__phone__text">
              <h5>+65 11.188.888</h5>
              <span>support 24/7 time</span>
            </div>
          </div>
        </div>
        <div className="hero__item set-bg"  style={{
                backgroundImage: `url(${heros})`
              }}>
          <div className="hero__text">
            <span>FRUIT FRESH</span>
            <h2>
              Vegetable <br />
              100% Organic
            </h2>
            <p>Free Pickup and Delivery Available</p>
            <a href="#" className="btn btn-primary">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  )
}

export default Heros
