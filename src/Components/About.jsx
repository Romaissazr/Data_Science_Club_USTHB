import React, { useState } from "react";
import about from "../assets/Images/about.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function About() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const [showDetails, setShowDetails] = useState(false);

  const handleReadMore = () => setShowDetails(true);
  const handleClose = () => setShowDetails(false);

  return (
    <section className={`relative px-28 ${showDetails ? "overflow-hidden" : ""}`} id="about">
      {/* Blur Background */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>
      )}

      <div className={`relative z-50 ${showDetails ? "blur-md" : ""}`} >
        <h1 className="text-center text-3xl font-medium mb-5 opacity-70 text-white">
          ABOUT
        </h1>
        <div className="flex gap-20 items-center" id="aboutbox">
          <img src={about} alt="about" className="w-[400px]" />
          <div className="max-w-[500px]"  id="abouttext">
            <p className="text-white">
              Welcome to the USTHB Data Science Club, a student-led initiative
              dedicated to empowering the next generation of data scientists!
            </p>
            <div
              onClick={handleReadMore}
              className=" my-5 cursor-pointer"
            >
              <p className="font-medium flex items-center gap-3 text-hover mt-5 mb-10 " id="read">READ MORE
              <FaArrowRightLong className="arrow"/></p>
            </div>
            <a
              href="https://docs.google.com/forms/d/1tWr3Pa92AmRCapOFQmvBy2nLzfxwIRaOK6_lru3C8tM/edit?usp=drivesdk"
              className="px-5 py-3 relative z-[9999] font-semibold bg-Button rounded-xl transition-all duration-300 hover:bg-hover"
            >
              Join the Club
            </a>
          </div>
        </div>
      </div>

     
      {showDetails && (
        <div className="fixed z-[989999999] bg-CardTeams text-black px-5 pb-10 rounded-xl w-[800px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg" id="details">
          <div className="relative">
            <IoMdClose
              onClick={handleClose}
              className="absolute text-Bg cursor-pointer text-3xl right-5 top-5"
            />
          </div>
          <p className="mt-16 mb-5">
            Our mission is to introduce university students to the dynamic and
            ever-evolving field of data science through hands-on learning,
            engaging events, and collaborative projects. Whether you're a
            curious beginner or an experienced coder, our club provides an
            inclusive environment where you can explore, learn, and grow.
          </p>
          <strong>What We Do:</strong>
          <ul className="space-y-4 mt-5">
            <li className="flex items-center">
              <span className="w-5 h-5 border-4 border-hover rounded-full flex-shrink-0 transition-all duration-300 hover:border-blue-500"></span>
              <p className="ml-4">
                Host interactive workshops, hackathons, and conferences.
              </p>
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 border-4 border-hover rounded-full flex-shrink-0 transition-all duration-300 hover:border-blue-500"></span>
              <p className="ml-4">
                Organize challenges and projects to apply data science skills in
                real-world scenarios.
              </p>
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 border-4 border-hover rounded-full flex-shrink-0 transition-all duration-300 hover:border-blue-500"></span>
              <p className="ml-4">
                Create a vibrant community of like-minded individuals passionate
                about technology, data, and innovation.
              </p>
            </li>
          </ul>
          <p className="mt-5">
            By bridging theory and practice, we aim to make data science
            accessible and exciting for everyone. Together, we’re building a
            space where creativity and curiosity thrive.
          </p>
          <p>
            <a
              href="https://docs.google.com/forms/d/1tWr3Pa92AmRCapOFQmvBy2nLzfxwIRaOK6_lru3C8tM/edit?usp=drivesdk"
              className="font-semibold text-Bg hover:text-hover"
            >
              Join us
            </a>{" "}
            and let’s uncover the stories hidden in data!
          </p>
        </div>
      )}
    </section>
  );
}
