import Link from 'next/link'
import React from 'react'
import { IoCallOutline } from 'react-icons/io5';

const Header = () => {
  return (
     <div>
    
    <div className="h-[12vh] flex justify-between items-center p-4 bg-green-600 text-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-full items-center justify-between">
        {/* Logo div */}

        <div className="flex items-center space-x-1">
          <h1 className="text-[20px] sm:text-[30px] font-serif whitespace-nowrap tracking-widest">Bamsi Blog</h1>
        </div>


        {/* Navbar links */}
        <ul className="hidden lg:flex items-center justify-center space-x-10 h-full w-full">
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/About">ABOUT ME</Link>
          </li>
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/About">BLOG</Link>
          </li>
          <li className="text-[20px] font-bold hover:text-red-600">
            <Link href="/Contact">CONTACT</Link>
          </li>
        </ul>

      {/*button*/}
      
      <div className="flex items-center space-x-4">
  <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-green-600 border-2 border-white transition-all duration-200 hover:bg-red-600
    flex items-center rounded-md space-x-2 text-white">
    
    <div className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]">
    <IoCallOutline />
    </div>

    <span className="font-bold whitespace-nowrap">+92 308 2735132</span>

  </button>

  {/* <div onClick={openNav} className='lg:hidden w-[2rem] h-[2rem] text-black'>
  <FaBars />
  </div>  */}

</div>

      </div>
    </div>






   



    </div>
  )
}

export default Header