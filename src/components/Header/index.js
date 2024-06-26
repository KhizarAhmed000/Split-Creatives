import React from "react";
import { images } from "../../services/config/images";

export default function Header() {
  return (
    <div className=" w-screen flex justify-center">
      <div className="text-white  flex justify-between items-center text-sm  ClashDisplay border-b border-white w-[85%] max-w-[1920px]">
        <div>
          <img src={images.splitLogo}  alt="#" className="w-20" />
        </div>
        <div className="flex justify-between w-1/3 ml-10 items-center ">
          <div className="flex justify-center items-center">
            SERVICES
            <img src={images.downArrow} alt="#" className="w-5 h-5 " />
          </div>
          <div>PROJECTS</div>
          <div>OUR BLOG</div>
          <div>CONTACT US</div> 
        </div>
        <div className="flex justify-between  items-center bg-white text-black border w-36   rounded-[30px] px-2 font-semibold py-1.5">
          GET IN TOUCH
          <img src={images.pen} alt="#" className="w-5 h-5 "/>
        </div>
      </div>
    </div>
  );
}
