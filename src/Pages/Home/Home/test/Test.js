import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel';
const Test=()=> {
        useEffect(() => {
                // Initialize Owl Carousel
                $(document).ready(function () {
                  $('.owl-carousel').owlCarousel({
                    items: 3, // Number of items to show in the carousel
                    autoplay: true, // Auto-play the carousel
                  });
                });
              }, []);

        return (
       
                        <div className="owl-carousel">
      <div className="item">Item 1</div>
      <div className="item">Item 2</div>
      <div className="item">Item 3</div>
      {/* Add more items as needed */}
    </div>
                        
               
        );
}

export default Test;