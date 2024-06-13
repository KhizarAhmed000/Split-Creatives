import React from "react";
import Header from "../../components/Header";
import { images } from "../../services/config/images";

export default function Home() {
  return (
    <div className="bg-primary z-[-2] overflow-x-hidden">
      <Header />
      <div className="mx-[6%] py-[5%]">
        {/* body container*/}
        <div className="text-white flex justify-center ">
          {/* first section*/}
          <div>
            {/* left column*/}
            <div className="flex justify-start  border-b w-[95%] border- mb-8 pb-8">
              <div className="ClashDisplay text-8xl font-bold w-[95%]  "> 
                LET'S BUILD THE NEXT BIG THING
              </div>
              <div className="absolute left-[40%] top-[35%]">
                <img src={images.cube} alt="#" className=" w-52" />
              </div>
            </div>
            <div className="flex justify-between w-[95%]">
              <div className="flex justify-left items-center ">
                <div className="text-teal-500 text-4xl ClashDisplay font-bold mr-3">
                  3Y
                </div>
                <div className=" w-[55%] text-sm font-light ClashDisplay">
                  OF <span className=" font-medium">DESIGN DRIVEN</span> PRODUCT
                  DEVELOPMENT
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <img src={images.bolt} alt="#" className="w-6 h-6" />
                </div>
                <div className="flex justify-between text-xs ClashDisplay items-center bg-teal-400 text-black rounded-[30px] h-7 px-3 font-semibold cursor-pointer ">
                  LET'S TALK
                </div>
              </div>
            </div>
          </div>
          <div className="mx-3">
            {/* right column*/}
            <div className="bg-gray p-6 border-white border rounded-3xl">
              <div className="flex justify-start items-center">
                <div>
                  <img src={images.designIcon} alt="#" className="w-12 h-12" />
                </div>
                <div className="flex justify-between text-s ClashDisplay items-center bg-white text-black rounded-[30px] h-12 px-7 font-semibold cursor-pointer ">
                  DESIGN
                </div>
              </div>
              <div className="pt-6 w-[90%] text-left ClashGrotesk ">
                By putting users' needs at the forefront, we tell a unique story
                of your company, juggling with fancy visual elements.
              </div>
            </div>
            <div className="bg-gray p-6 border-white border rounded-3xl">
              <div className="flex justify-start items-center">
                <div className="flex justify-between text-s ClashDisplay items-center bg-white text-black rounded-[30px] h-12 px-7 font-semibold cursor-pointer ">
                  DEVELOPMENT
                </div>
                <div>
                  <img
                    src={images.developmentIcon}
                    alt="#"
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray p-6 border-white border rounded-3xl">
              <div className="flex justify-start items-center">
                <div>
                  <img
                    src={images.wordpressIcon}
                    alt="#"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex justify-between text-s ClashDisplay items-center bg-white text-black rounded-[30px] h-12 px-7 font-semibold cursor-pointer ">
                  WORDPRESS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute left-0   top-[70vh]">
          <img src={images.firstGradient} />
        </div> 
        madarchod idk how to
        */}

        <div className="flex pt-24 z-10">
          <div>
            <div className="flex relative">
              <div>
                <img src={images.guy1} alt="#" className="relative left-10 z-30 w-24 h-auto"/> 
              </div>
              <div>
                <img src={images.guy1} alt="#" className="relative left-5 z-10 w-24 h-auto" />
              </div>
              <div>
                <img src={images.guy1} alt="#" className="z-20 w-24 h-auto"/>
              </div>
            </div>
            <div>FOUNDERS</div>
            <div>OF SPLITCREATIVES</div>
          </div>
          <div>
            Well-crafted development and design solutions are essential to
            presenting products that your audience will fall in love with. This
            can provide a company with a competitive advantage and contribute to
            its overall success. What do you think?
          </div>
        </div>
      </div>
    </div>
  );
}
