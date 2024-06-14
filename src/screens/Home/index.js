import React from "react";
import Header from "../../components/Header";
import { images } from "../../services/config/images";

export default function Home() {

  const bgGradient = {
    backgroundImage: images.firstGradient,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <div className="bg-primary z-[-2] overflow-x-hidden relative " >
      <Header />
      <div className="mx-[6%] py-[5%]  items-center relative z-2 " >
        {/* body container*/}
        <div className="max-w-[1920px] text-white flex justify-center items-center " >
          {/* first section*/}
          <div className=" ">
            {/* left column*/}
            <div className="flex justify-left align-end  border-b w-[95%] border- mb-8 pb-8">
              <div className="ClashDisplay xl:text-[8rem] lg:text-[5rem] leading-[1] font-bold w-[95%]  ">
                LET'S BUILD THE NEXT BIG THING
              </div>
              <div className="">
                <img src={images.cube} alt="#" className="relative right-[200px]  w-[30rem]" />
              </div>
            </div>
            <div className="flex justify-between w-[95%] relative z-1">
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

        <div className="absolute left-[-200px]   top-[70vh] z-1">
          <img src={images.firstGradient} />
        </div>



        <div className=" relative flex justify-between pt-24 z-2 text-white">
          <div>
            <div className="flex relative">
              <div>
                <img src={images.guy1} alt="#" className=" z-30 w-12 h-auto" />
              </div>
              <div>
                <img src={images.guy1} alt="#" className="relative right-5 z-10 w-12 h-auto" />
              </div>
              <div>
                <img src={images.guy1} alt="#" className="relative right-10 z-20 w-12 h-auto" />
              </div>
            </div>
            <div>FOUNDERS</div>
            <div>OF SPLITCREATIVES</div>
          </div>
          <div className="ClashDisplay w-[60%] xl:text-5xl text-left"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Well-crafted development and design solutions are essential to presenting products that your audience will fall in love with. This can provide a company with a competitive advantage and contribute to its overall success. What do you think?</div>
        </div>

        <div className="container mx-auto relative z-2 bg-white mt-[200px] rounded-[40px]">
          <div className="relative top-[-116px]">

            <img src={images.containerTop} className="w-auto relative " />
            <div className=" text-black ClashDisplay flex justify-between">
              <div>
                OUR WORKS
              </div>
              <div>
                Our software development company offers customized solutions to enhance the user experience and drive sales
              </div>
              <div>
                MORE CLASS
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
