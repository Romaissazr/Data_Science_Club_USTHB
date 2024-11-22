import React from 'react'
import Card from './Card'
import ConatctCard from './ConatctCard';

export default function Contact() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  return (
    <section className=' my-10 ' id ='contact'>
         <h1 className="text-center text-3xl font-medium mb-5 opacity-70 text-white">
          Contact US
        </h1>
        <div className=" flex text-white items-center  gap-28" id='contactCard'>
            <Card />
           <ConatctCard />
        </div>
    </section>
  )
}
