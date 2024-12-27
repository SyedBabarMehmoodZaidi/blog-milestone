import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div >
     <div className="w-full flex flex-col lg:flex-row justify-between items-center h-screen px-20">
  {/* Left Side: Text */}
  <div className="w-full lg:w-1/2 text-center lg:text-left">
    <h1 className="text-green-600 font-bold text-4xl">
      Welcome To The 
      <span className="text-black font-bold block">
        Nutrients Plants
      </span>
    </h1>
    <p className="mt-2 text-gray-600 text-[14px]">
      It is a long established fact that a reader will be distracted by the <br />
      readable content of a page when looking at its layout. The point of <br />
      using Lorem Ipsum is that it has a more-or-less normal distribution of<br />
      letters, as opposed to using.
    </p>
  </div>

  {/* Right Side: Image */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-4 lg:mt-0">
    <Image 
      src="/flower.jpg" 
      alt="flower" 
      width={900} 
      height={700} 
      className="rounded-full"
    />
  </div>
</div>


    </div>
  )
}

export default Hero
