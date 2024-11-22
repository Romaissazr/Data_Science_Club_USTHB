import React from 'react';
import hero from '../assets/Images/hero.png';
import bg from '../assets/Images/bghero.svg';

export default function Hero() {
  return (
    <section className=" px-24  my-10 items-center justify-center mt-[150px] gap-[270px] text-white" id='home'>
      <img src={bg} alt="" className="absolute left-[-40%] top-[-150px]" id='herobg' />
      <div className="max-w-[450px] relative z-10" id='text'>
        <h1 className="text-6xl font-semibold" id='title'>YOUR DATA, OUR SCIENCE</h1>
        <p className="opacity-70 my-10" id='p'>
          Join us to explore the power of data, unlock new opportunities, and shape the future with analytics, AI, and machine learning.
        </p>
        <a
          href="https://docs.google.com/forms/d/1tWr3Pa92AmRCapOFQmvBy2nLzfxwIRaOK6_lru3C8tM/edit?usp=drivesdk"
          className="px-5 py-3 font-semibold bg-Button rounded-xl transition-all duration-300 hover:bg-hover"
        >
          Join the Club
        </a>
      </div>
      <img src={hero} id='img' alt="" className="w-[700px] top-14 right-24 absolute" />
    </section>
  );
}
