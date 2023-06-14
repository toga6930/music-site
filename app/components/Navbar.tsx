"use client";

import Link from "next/link";
import Image from "next/image";
import yamato from '/public/images/yamato.jpg';
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import {MdModeNight, MdWbSunny } from "react-icons/md"

const About = dynamic(() => import('./About'), {
  ssr: false,
});
const Navbar = ({songSearch}: { songSearch: (search: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    localStorage.getItem("theme") == "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    songSearch(searchTerm);
  };
  const openAbout  = () => {
    setIsOpen(true);
  };
  const closeAbout  = () => {
    setIsOpen(false);
  };

    return (
      <>
        <form onChange={handleSubmit} className="bg-pink-100 dark:bg-slate-900 flex fixed justify-center top-0 left-0 w-full h-16 border-b border-gray-200">  
          <span className="text-3xl font-bold text-gray-900 dark:text-pink-100 ml-8 cursor-pointer">LDB-MUSIC</span>      
            <ul className="flex ml-auto font-medium text-2xl ">
              <li className="no-underline block p-auto mx-4 text-gray-800 dark:text-pink-100 hover:text-gray-400 ">
                <Link href="/">Home</Link>
              </li>
              <li className="no-underline block pr-4 mx-4 text-gray-800 dark:text-pink-100 hover:text-gray-400 ">
                <Link href="/library">Library</Link>
              </li>
              <li className="hidden md:block">
                <input
                  placeholder="Search"
                  type="text"
                  value={searchTerm}
                  onChange={handleChange}
                  className="block h-10 px-16 mx-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50"/>
              </li>
            </ul>
            <button
              type="button"
              className="text-2xl dark:text-pink-100 mr-2 sm:mr-4"
              onClick={() => {
                setIsDark(!isDark);
                localStorage.setItem("theme", isDark ? "dark" : "light");
              }}>
              {isDark ? <MdModeNight /> : <MdWbSunny />}
            </button>
            <button
              type="button" onClick={openAbout}
              className="bg-white hover:bg-pink-200 focus:ring-4 focus:outline-none rounded-full p-1 mr-8 ml-auto w-12 h-12">
              <Image
                alt="sewey" src={yamato}
                className="object-cover rounded-full w-10 h-10"/>
            </button>   
        </form>
        {isOpen && <About onClose={closeAbout}/>}          
      </> 
    );
  };
  export default Navbar;