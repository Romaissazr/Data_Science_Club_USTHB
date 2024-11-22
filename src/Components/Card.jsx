import React from 'react';
import { FaFacebook, FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="w-[350px] ml-28 my-16 h-[400px] bg-white flex  items-center justify-center relative rounded-lg transition-all duration-500 cursor-pointer group z-0" id='card'>
      <div className="w-full h-full flex flex-col items-center justify-center bg-social bg-cover bg-center bg-no-repeat text-white rounded-lg  font-medium text-2xl transition-all duration-500 group-hover:translate-x-[-25%] group-hover:translate-y-[-25%]">
        Follow Us
      </div>
      <div className="absolute w-full h-full flex items-center justify-center bg-aliceblue -z-10">
        <div className="w-[75%] h-full flex flex-col items-center justify-end bg-aliceblue gap-2 ">
          <p className="m-0 p-0 text-2xl font-medium text-Secondery">DATA SCIENCE</p>
          <p className="m-0 p-0 text-xl font-light text-Secondery mb-1">Club USTHB</p>
        </div>
        <div className="w-[25%] h-full flex flex-col items-center justify-center text-Secondery gap-6">
          <a href="https://www.facebook.com/profile.php?id=61568340756437" className="w-[50%]">
            <FaFacebook className="w-full fill-Secondery text-3xl" />
          </a>
          <a href="https://www.linkedin.com/company/data-science-club-usthb/" className="w-[50%] ">
            <FaLinkedin className="w-full fill-Secondery text-3xl " />
          </a>
          <a href="https://www.tiktok.com/@datascienceclub?_t=8raW85xXvke&_r=1" className="w-[50%]">
            <FaTiktok className="w-full fill-Secondery text-3xl" />
          </a>
          <a href="https://www.instagram.com/datascienceclub_usthb?igsh=MXZ0enlpd2UwMjI2ZA==" className="w-[50%]">
            <FaInstagram className="w-full fill-Secondery text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
