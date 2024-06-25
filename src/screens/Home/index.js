import React, { Component, useEffect, useRef } from "react";
import Header from "../../components/Header";
import { images } from "../../services/config/images";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlantedContainer from "../../components/SlantedContainer";

// const CustomNextArrow = ({ onClick }) => {
//   return (
//     <button className="custom-arrow next-arrow" onClick={onClick}>
//       Next
//     </button>
//   );
// };

// // Custom Prev Arrow Component
// const CustomPrevArrow = ({ onClick }) => {
//   return (
//     <button className="custom-arrow prev-arrow" onClick={onClick}>
//       Prev
//     </button>
//   );
// };

export default function Home() {

  const bgGradient = {
    backgroundImage: images.firstGradient,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const products = [
    {
      name: 'FULFLD Skin',
      description: 'The company raised +$20M and won the spot in CB Insights’ Top 150 Digital Health list as one of the most promising startups.',
      image: images.fulfldBanner,
    },
    {
      name: 'Test',
      description: 'The company raised +$20M and won the spot in CB Insights’ Top 150 Digital Health list as one of the most promising startups.',
      image: images.fulfldBanner,
    },
    {
      name: 'Test2',
      description: 'The company raised +$20M and won the spot in CB Insights’ Top 150 Digital Health list as one of the most promising startups.',
      image: images.fulfldBanner,
    },
  ];






  // const sliderRef = useRef(null);

  // useEffect(() => {
  //   // Accessing slick methods via ref
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     // Add references to the slick methods
  //     slider.slickPrev = () => slider.slickPrev();
  //     slider.slickNext = () => slider.slickNext();
  //   }
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />
    autoplay: true,
    autoplaySpeed: 4000
  };

  const settingsForWhiteContainer = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />
    autoplay: true,
    autoplaySpeed: 4000
  };


  return (
    <div className="bg-primary  z-[-2] overflow-x-hidden relative " >
      <Header />
      <div className="gradient-background px-[6%]  py-[5%]  items-center relative z-2 " >
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

        {/* <div className="absolute left-[-200px]   top-[70vh] z-1">
          <img src={images.firstGradient} />
        </div> */}



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
          <div className="ClashDisplay w-[60%] xl:text-5xl text-left text-bold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Well-crafted development and design solutions are essential to presenting products that your audience will fall in love with. This can provide a company with a competitive advantage and contribute to its overall success. What do you think?</div>
        </div>

        <div className="container mx-auto relative z-2 bg-white mt-[200px] rounded-[40px]">
          <div className="relative top-[-116px]  " >

            <img src={images.containerTop} className="w-auto relative " />

            <div className=" text-black ClashDisplay flex justify-between">
              <div className=" xl:text-8xl font-bold w-[29%] pl-10 relative top-[-116px]">
                OUR WORKS
              </div>
              <div className="font-semibold w-[30%] text-xl">
                Our software development company offers customized solutions to enhance the user experience and drive sales
              </div>
              <div className="text-white h-32 w-32 bg-black p-5 text-center flex items-center rounded-full mr-12">
                MORE CASES
              </div>
            </div>
            {/* slider section */}
            {/* <div className="grid grid-cols-2 container mx-10 w-auto rounded-3xl  bg-[#F5F5F7] ">
              <div className="p-7 pr-[20%] ">
                <p className="ClashDisplay ">
                  PRODUCT
                </p>
                <h1 className=" text-3xl ClashDisplay pt-5">
                  FULFLD Skin
                </h1>
                <p className="ClashDisplay pt-10">The company raised +$20M and won the spot in
                  CB Insights’ Top 150 Digital Health list as one of
                  the most promising startups.
                </p>
              </div>
                <div>
                  <img src={images.fulfldBanner}/>
                </div>
            </div> */}
            <div className="container mx-10 w-auto ">
              <Slider
                // ref={sliderRef} 
                {...settings}  >
                {products.map((product, index) => (
                  <div key={index} style={{ display: 'grid' }} className="grid grid-cols-2 w-auto rounded-3xl bg-[#F5F5F7] mb-10">
                    <div className="p-7 pr-[20%] ">
                      <p className="ClashDisplay">PRODUCT</p>
                      <h1 className="text-4xl font-bold ClashDisplay pt-10">{product.name}</h1>
                      <p className="ClashDisplay pt-10">{product.description}</p>
                      {/* <img src={images.sliderArrow} id="arrow"></img> */}
                    </div>
                    <div >
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                ))}
              </Slider>

            </div>


          </div>
        </div>




      </div>
      <div className="w-screen px-[10%] second-gradient  py-[5%] mb-12">
        <div className="ClashDisplay  text-white xl:text-8xl font-bold w-[29%] pl-10  ">
          OUR BENEFITS
        </div>

        <div className="flex justify-around max-w-[1920px] self-center container mx-auto">
          <div
            className="mt-[200px] custom-height bg-white  text-white w-[300px]  border-l-[1px] border-r-[1px] border-b-[1px]  rounded-bl-3xl rounded-br-3xl border-[#b6b6bd] backdrop-blur-[7.5px] "
          >
            <div className=' right-[0.4%] max-w-[120%] relative bottom-[106px]'>

              <img src={images.whiteContainerTop} className='absolute w-[100.8%] max-w-[120%] ' />
              <div className="px-7  relative top-[50px]">

                <div className='w-auto pb-7 mb-7   border-b-[1px] border-black'>
                  <img src={images.split} className='w-[20%]' />
                </div>
              <div className="slider-container">
                <Slider {...settingsForWhiteContainer}>

                <div className='ClashDisplay text-black text-xl mb-7'>
                  We offer a diverse range of products and services across various industries to meet your specific needs
                </div>
                <div className='ClashDisplay text-black text-xl mb-7'>
                  dabba
                </div><div className='ClashDisplay text-black text-xl mb-7'>
                  dabba
                </div>
                </Slider>
              </div>

              </div>
            </div>
          </div>
          <SlantedContainer firstHeading={"300K"} secondHeading={"Total Funding"} description={"Hard work and dedication of the Split Creatives team help our clients secure new successful investment deals."} />
          <SlantedContainer firstHeading={"350+"} secondHeading={"Completed Projects "} description={"We aim to provide the perfect digital solutions for your business, making this process friendly and chill."} />
          <SlantedContainer img={images.infinity} secondHeading={"Total Funding"} description={"We aim to provide the perfect digital solutions for your business, making this process friendlty and chill"} />
        </div>
      </div>

    </div>
  );
}
