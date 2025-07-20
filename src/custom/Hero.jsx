import React from "react";
import heroDesktop from '../../assets/images/image-web-3-desktop.jpg'
import heroMobile from '../../assets/images/image-web-3-mobile.jpg'

const Hero = () => {
  return (
    <div className="mb-[3rem]" >
      {/* hero image */}
      <div>
        <picture>
          <source srcSet={heroDesktop} media="(min-width: 768px)" />
          
          <img src={heroMobile} alt="Description of the image" />
        </picture>
      </div>
      {/* hero content section */}
      <div className="lg:flex items-center   mb-[2rem] mt-[2rem] gap-[1.7rem] ">
        <h1 className="font-extrabold text-6xl "
         style={{color:'var(--very-dark-blue)'}}>
            The Bright Future of Web 3.0?
        </h1>
        <div >
            <p
             className="mb-[2rem]"
            style={{color:'var(--dark-grayish-blue)'}}> 
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button className="p-[15px] w-[12rem] font-bold -tracking-tight cursor-pointer "
            style={{backgroundColor:'var(--soft-red)', color:'var(--very-dark-blue)'}}>
                Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
