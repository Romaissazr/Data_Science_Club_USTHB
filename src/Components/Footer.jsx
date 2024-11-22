import React from 'react';
import logo from '../assets/Images/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';

export default function Footer() {
  return (
   <div className="footer bg-Secondery w-full px-28 pt-10 pb-2 text-white flex flex-col ">
     <div className=' flex justify-between items-start '>
    
    <a href="#home"> 
      <img src={logo} alt="Logo" className="w-[80px] relative z-10" />
    </a>

    {/* Navigation Links */}
    <ul className="space-y-2 text-lg">
      <li><a href="#home" className="hover:text-hover transition-all duration-300">Home</a></li>
      <li><a href="#about" className="hover:text-hover transition-all duration-300">About</a></li>
    
    </ul>
    <ul className="space-y-2 text-lg">
<li><a href="#teams" className="hover:text-hover transition-all duration-300">Teams</a></li>
<li><a href="#contact" className="hover:text-hover transition-all duration-300">Contact</a></li>
</ul>
  <div className=" flex gap-8 ">
      
    <ul className="flex flex-col gap-5 text-white text-xl" id='social'>
      <li>
        <a href="https://www.instagram.com/datascienceclub_usthb?igsh=MXZ0enlpd2UwMjI2ZA==" className="hover:text-hover transition-all duration-300">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=61568340756437" className="hover:text-hover transition-all duration-300">
          <FaFacebookF />
        </a>
      </li>
    
    </ul>
    <ul className="flex flex-col gap-5 text-white text-xl" id='social'>
    <li>
        <a href="https://www.tiktok.com/@datascienceclub?_t=8raW85xXvke&_r=1" className="hover:text-hover transition-all duration-300">
          <IoLogoTiktok />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/data-science-club-usthb/" className="hover:text-hover transition-all duration-300">
          <FaLinkedin />
        </a>
      </li>
    </ul>
  </div>
  <a
        href="https://docs.google.com/forms/d/1tWr3Pa92AmRCapOFQmvBy2nLzfxwIRaOK6_lru3C8tM/edit?usp=drivesdk"
        className="px-5 py-3 font-semibold bg-Button rounded-xl transition-all duration-300 hover:bg-hover"
      >
        Join the Club
      </a>
  </div>
  <p className='text-center mt-5'>Developed by <a href="https://www.linkedin.com/in/romaissa-zaoui-40b0002a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">ZAOUI Romaissa</a></p>
   </div>
  );
}
