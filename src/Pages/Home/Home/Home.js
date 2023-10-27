import React from 'react';
import Heros from './Hero/Heros';
import Blog from './Blogs/Blog';
import LatestProduct from './LatestProduct/LatestProduct';
import Banner from './Banner/Banner';
import FeaturedSection from './FeaturedSection/FeaturedSection';
import Categories from './Catagory/Categories';



const Home = () => {

    return (
<div>

<Heros></Heros>
<Categories></Categories>
<FeaturedSection></FeaturedSection>
<Banner></Banner>

<LatestProduct></LatestProduct>
<Blog></Blog>




</div>

       
    );
};

export default Home;