import Link from "next/link";
import Image from "next/image";
import yamato from '/public/images/yamato.jpg'

const Navbar = () => {
    return (
      <nav className="bg-pink-100 flex justify-start top-0 left-0 fixed w-full h-16 z-10 border-b border-gray-200">  
        <span className="text-3xl font-semibold text-gray-900 ml-8 cursor-pointer">LDB-MUSIC</span>      
        <ul className="flex ml-auto font-medium text-2xl ">
          <li className="no-underline block p-auto mx-4 text-gray-800 md:p-0 hover:text-gray-400 ">
            <Link href="/">Home</Link>
          </li>
          <li className="no-underline block pr-4 mx-4 text-gray-800 md:p-0 hover:text-gray-400 ">
            <Link href="/library">Library</Link>
          </li>
          <input placeholder='Search' type="text" className="block h-10 px-16 mx-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "/>
        </ul>
        <button type="button" className="bg-white hover:bg-pink-200 focus:ring-4 focus:outline-none rounded-full p-1 mr-8 ml-auto w-12 h-12"><Image alt="sewey" src={yamato} className="object-cover rounded-full w-10 h-10"/></button>
      </nav>
    );
  };
  export default Navbar;