import React from "react";
import Nav from '../custom/Nav'
import Logo from '../custom/Logo'
import Hero from "../custom/Hero";
import TrendingNews from "../custom/TrendingNews";
import FeaturePost from "../custom/FeaturePost";

const Home = () => {
  return (
    <div >
       {/* nav menu */}
       <div className="flex justify-between mt-[2rem] mb-[2rem] ">
         <Logo />
        <Nav />
       </div>
       
       {/* hero section */}
        <div className="grid lg:grid-cols-3 gap-8 sm: grid-cols-1">
         <div className="col-span-2">
           <Hero />
         </div>
          <div className="col-span-1">
            <TrendingNews />
          </div>
        </div>
        <FeaturePost />
    </div>
  );
};

export default Home;
