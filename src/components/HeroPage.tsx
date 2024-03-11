import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { WiDirectionUpRight } from "react-icons/wi";

const HeroPage = () => {
  return (
    <div className="p-3 ">

    <div className="container p-5 md:h-[50%] xl:h-[90%]"
    style={{
      backgroundImage: "url('/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      margin: "5px", // Add margin here
    }}
    >
      <div className=" grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 flex ">
        <div className="p-2 hidden  md:block md:bg-gray-100 rounded-full w-full md:w-[100%] xl:p-1 xl:w-[20%] md:h-[50%]  xl:h-[80%] text-black">
          <a href="/" className="block md:inline-block px-2 py-2">Home</a>
          <a href="/apps" className="block md:inline-block px-4 py-2">Apps</a>
          <a href="/blog" className="block md:inline-block px-4 py-2">Blog</a>
        </div>
        <div className="text-2xl xl:ml-10 p-4 w-full md:w-[50%] text-white font-bold flex justify-center">Pixels</div>
        <div className="w-[100%]  h-[70%] mt-4  md:mt-1  md:w-[80%] bg-gray-100 xl:w-[20%] xl:p-1.5 xl:h-[80%] md:p-3 rounded-full text-center flex flex-col items-center">
          <div className="flex  mt-1 md:mt-2 md:h-[90%] ">
            <h1>Contact Us</h1>
            <WiDirectionUpRight className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:mt-20">
        <a href="/" className="block md:inline-block px-4 py-2"><FaWhatsapp /></a>
        <a href="/apps" className="block md:inline-block px-4 py-2"><FaFacebook /></a>
        <a href="/blog" className="block md:inline-block px-4 py-2"><FaInstagram /></a>
      </div>
      <div>
        <h2 className="text-4xl font-bold">Unlocking <br/> Digital Excellence</h2>
      </div>
      <div className="absolute bottom-5 text-center p-4 w-[80%] md:h-[50%] xl:h-[30%] md:w-[50%] xl:w-[30%] block right-10 md:right-20 bg-gray-200 md:pb-7 shadow-lg rounded-lg">
        <div className="flex items-center ">
          <GoPeople className="mr-3 " />
          <h2 className="inline-block">About Us</h2>
        </div>
        <div className="block text-left">
          <p className="ml-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Maxime nemo veniam quia fuga eligendi numquam corrupti itaque, voluptatem ab. 
          Culpa impedit perferendis officia totam obcaecati quod harum ut architecto vero!</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroPage;
