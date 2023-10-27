import React from 'react';

import './header.css'
import { FaBars, FaEnvelope, FaFacebook, FaHeart, FaPalette, FaPinterest, FaShoppingBag, FaTwitter, FaUser, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
   


    return (
       
      
        <header className="header">
           <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="./index.html">
                    <img src="http://127.0.0.1:5500/img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="active">
               <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="header__menu__dropdown">
                        <li>
                       
                        <Link to="/shopdetails">Shop Details</Link>
                        </li>
                        <li>
                    
                          <Link to="/shopingcart">Shoping Cart</Link>
                        </li>
                        <li>
                       
                          <Link to="/checout">Check Out</Link>
                        </li>
                       
                        <li>
                    
                          <Link to='/blogdetails'>Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                   
                    <li>
                       
                       <Link to="/dahsboartlayout">Dashboard</Link>
                     </li>
                    <li>
                      <Link to="/admindashboard">AdminDashboard</Link>
                      
                    </li>
                  </ul>
                </nav>
                
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="#">
                      <FaHeart></FaHeart> <span>1</span>
                       
                      </a>
                    </li>
                    <li>
                      <a href="#">
                    
                        <FaShoppingBag></FaShoppingBag><span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    item: <span>$150.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-" />
              <FaBars></FaBars>
            </div>
          </div>
         
        </header>
    
      
        
    );
};

export default Header;