// components/Nav.js
"use client"




// Choose your preferred icon library (e.g., Font Awesome, Heroicons

import React, { useState } from 'react';
import Link from 'next/link';

const menuIcon = <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>;
const closeIcon = <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19z"/></svg>;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed  top-0 left-0 w-full bg-blue-950 z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo (replace with your logo or brand name) */}
        <Link href="/">
          <p  className="text-xl font-bold text-lightblue hover:bg-green-900 text-yellow-800">TK_2000</p>
        </Link>

        {/* Navigation links */}
        <ul className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/">
              <p onClick={toggleMenu} className="text-whites hover:text-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/web">
              <p onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                web
              </p>
            </Link>
          </li>
          
          <li>
            <Link href="/AI">
              <p onClick={toggleMenu} className="text-gray-700 hover:text-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                AI
              </p>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? closeIcon : menuIcon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
