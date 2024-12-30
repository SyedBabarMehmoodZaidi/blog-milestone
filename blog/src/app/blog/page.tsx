import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="relative w-full">
  <Image src="/banner1.jpg" alt="banner" layout="responsive" width={100} height={50} objectFit="cover" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
  {/* Centered Text */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-6 w-full max-w-lg">
    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Buy Quality Plants for a Greener, Healthier Space</h1>
    <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-yellow-100">
    Babar Bamsi provides plants that beautify your space, improve air quality, and create a calming atmosphere.
    </p>
  </div>
</div>



            <div className="bg-green-600 p-8 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {/*card 1*/}
                  <div className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300">
                    <Image src="/rose.jpeg" alt="Image 1" width={100} height={100} className="w-32 h-32 object-cover mb-4 rounded-2xl"/>
                    <h1 className="text-lg font-bold mb-2">Rose</h1>
                    <p className="text-center mb-4">A rose is a stunning flower symbolizing love and beauty, known for its fragrant petals and vibrant colors.</p>
                    <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">Read More</button>
                  </div>
                  {/*card 2*/}
                  <div className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300">
                    <Image src="/Orchid.jpeg" alt="Image 2" width={100} height={100} className="w-32 h-32 object-cover mb-4 rounded-2xl "/>
                    <h1 className="text-lg font-bold mb-2">Orchid</h1>
                    <p className="text-center mb-4">Orchids are exotic, elegant flowers known for their unique shapes and vibrant colors, symbolizing luxury, beauty, and strength.</p>
                    <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">Read More</button>
                  </div>
                  {/*card 3*/}
                  <div className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300">
                    <Image src="/Marigold.jpeg" alt="Image 3" width={100} height={100} className="w-32 h-32 object-cover mb-4 rounded-2xl"/>
                    <h1 className="text-lg font-bold mb-2">Marigold</h1>
                    <p className="text-center mb-4">Marigolds are bright, cheerful flowers with golden-yellow hues, often symbolizing positivity, warmth, and creativity.</p>
                    <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">Read More</button>
                  </div>
                  {/*card 4*/}
                  <div className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300">
                    <Image src="/jasminewhite.jpg" alt="Image 4" width={100} height={100} className="w-32 h-32 object-cover mb-4 rounded-2xl"/>
                    <h1 className="text-lg font-bold mb-2">Jasmine</h1>
                    <p className="text-center mb-4">Jasmine is a fragrant, delicate flower known for its pure white or yellow petals, symbolizing love, beauty, and elegance.</p>
                    <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">Read More</button>
                  </div>
                  {/*card 5*/}
                  <div className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300">
                    <Image src="/lily.jpeg" alt="Image 5" width={100} height={100} className="w-32 h-32 object-cover mb-4 rounded-2xl"/>
                    <h1 className="text-lg font-bold mb-2">Lily</h1>
                    <p className="text-center mb-4">Purple lilies are stunning flowers known for their rich, vibrant color, symbolizing admiration, royalty, and elegance.</p>
                    <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">Read More</button>
                  </div>
                 {/*card 6*/}
                  <div className="bg-gray-800 text-white p-4 flex flex-col items-center rounded-2xl hover:shadow-xl hover:scale-[1.05] transition duration-300">
                    <Image src="/daffodil.jpeg" alt="Image 6" width={100} height={100} className="w-32 h-32 object-cover mb-4 rounded-2xl"/>
                    <h1 className="text-lg font-bold mb-2">Daffodil</h1>
                    <p className="text-center mb-4">Daffodils are bright, trumpet-shaped flowers, symbolizing renewal and hope, often blooming in vibrant yellow hues in early spring.</p>
                    <button className="bg-blue-500 hover:bg-red-600 text-white px-4 py-2 rounded">Read More</button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default page
