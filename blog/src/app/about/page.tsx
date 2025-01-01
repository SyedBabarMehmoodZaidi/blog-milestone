import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[50vh] md:h-[70vh]">
  <Image
    src="/banner.jpg"
    alt="banner"
    layout="fill"
    objectFit="cover"
    className="w-full h-full"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
      Hello, I&apos;m Babar Bamsi
    </h1>
    <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-100 mt-4">
      Babar Bamsi sells a variety of plants, <br /> bringing natural beauty to homes and spaces.
    </p>
  </div>
</div>

   
      <div>
    <div className="h-screen bg-green-600 flex flex-col-reverse lg:flex-row items-center mt-14">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start  lg:mt-28 px-8 lg:pl-[176px] gap-4">
        {/* Heading */}
        <h1 className="max-w-[376px] font-bold text-[28px] text-white">
        
         Babar Bamsi is a plant seller passionate about adding greenery to every space.
        </h1>

        {/* Paragraph */}
        <p className="max-w-[376px] text-[20px] font-normal text-white">
        
        Plants improve air quality, reduce stress, and boost mood. They create a calming atmosphere, enhance focus, and promote overall well-being, making any space healthier and more vibrant
        </p>

        {/* Button */}
        <button className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-red-600 flex items-center rounded-md text-white">
          CONTACT ME
        </button>

        {/* Contact Information */}
        <p className="font-bold text-white mt-4">Phone: +92 308 273 5132</p>
        <p className="font-bold text-white">Fax: + 451 215 215</p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image src="/bamsi.jpg" alt="Image description" width={450} height={900} />
      </div>
    </div>
  </div>
   
   
  <div>
  <div className="relative w-full h-[50vh] md:h-[70vh]">
  <Image
    src="/plants.jpg"
    alt="banner"
    layout="fill"
    objectFit="cover"
    className="w-full h-full"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-yellow-100">
      Services I Provide
    </h1>
    <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mt-4">
      Appreciated for consistently outperforming client <br /> expectations and providing exceptional results.
    </p>
  </div>
</div>


      </div>
   
   
    </div>
  )
}

export default page
