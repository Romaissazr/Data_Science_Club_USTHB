import React from 'react';
import Why from './Why';
import one from '../assets/Images/2.png';
import two from '../assets/Images/3.png';
import three from '../assets/Images/4.png';
import four from '../assets/Images/5.png';
export default function DataScience() {
  return (
    <div>
      <div id='heroo' className="mx-24  p-10 my-24 items-center flex-col relative z-10  flex gap-10 bg-Secondery rounded-xl bg-opacity-50">
        <h1 className="text-5xl text-white font-semibold  " id='title'>
          Why data science is important?
        </h1>
        <div className=" grid grid-cols-2 gap-2" id='grid'>
          <Why 
            img={one} 
            title="WHY DOES DATA SCIENCE MATTER?" 
            desc="It’s the key to unlocking insights, making smarter decisions, and shaping the future." 
          />
          <Why 
            img={two} 
            title="IMPACT OF DATA SCIENCE" 
            desc="Data science has the power to uncover hidden patterns, solve complex problems, and drive decisions that shape industries, societies, and the future." 
          />
          <Why 
            img={three} 
            title="THE IMPORTANCE" 
            desc="User data is messy, incomplete, inaccurate, and inconsistent." 
            descr="Data science is crucial for cleaning, organizing, and making sense of it all." 
          />
          <Why 
            img={four} 
            title="WHY JOIN US?" 
            desc="By joining Data Science Club, you’ll dive into real projects, learn valuable skills, and become part of a passionate community of problem-solvers." 
          />
        </div>
      </div>
    </div>
  );
}
