import React, { useState, useEffect } from 'react';
import logo from '../assets/Images/logo.png';
import { IoLogoTiktok, IoClose } from 'react-icons/io5';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Highlight active section
  const getNavLinkClass = (sectionId) =>
    activeSection === sectionId
      ? 'text-hover font-bold'
      : 'hover:text-hover transition-all';

  // Render underline for links
  const renderUnderline = (sectionId) => (
    <span
      className={`absolute bottom-[-3px] left-0 w-0 h-[2px] bg-hover rounded-lg transition-all duration-300 ${
        activeSection === sectionId ? 'w-full' : 'group-hover:w-full'
      }`}
    />
  );

  return (
    <nav className="fixed top-0 w-full bg-Secondery bg-opacity-90 backdrop-blur-lg text-white shadow-md z-[9999]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="Logo" className="w-[80px]" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {['home', 'about', 'teams', 'contact'].map((section) => (
            <li key={section} className="relative group">
              <a href={`#${section}`} className={getNavLinkClass(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {renderUnderline(section)}
            </li>
          ))}
        </ul>

        {/* Social Media Links (Desktop) */}
        <div className="hidden md:flex gap-4 text-xl">
          <a
            href="https://www.instagram.com/datascienceclub_usthb"
            className="hover:text-hover"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61568340756437"
            className="hover:text-hover"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com/@datascienceclub"
            className="hover:text-hover"
            aria-label="TikTok"
          >
            <IoLogoTiktok />
          </a>
          <a
            href="https://www.linkedin.com/company/data-science-club-usthb/"
            className="hover:text-hover"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <IoClose /> : '☰'}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 min-h-[100vh] w-64 bg-Secondery text-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl hover:text-hover"
          aria-label="Close Menu"
        >
          <IoClose />
        </button>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center space-y-6 mt-16 text-lg">
          {['home', 'about', 'teams', 'contact'].map((section) => (
            <li key={section} className="relative group">
              <a
                href={`#${section}`}
                className={getNavLinkClass(section)}
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {renderUnderline(section)}
            </li>
          ))}
        </ul>

        {/* Social Media Links (Mobile) */}
        <div className="flex justify-center gap-6 text-2xl mt-10">
          <a
            href="https://www.instagram.com/datascienceclub_usthb"
            className="hover:text-hover"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61568340756437"
            className="hover:text-hover"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com/@datascienceclub"
            className="hover:text-hover"
            aria-label="TikTok"
          >
            <IoLogoTiktok />
          </a>
          <a
            href="https://www.linkedin.com/company/data-science-club-usthb/"
            className="hover:text-hover"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}
