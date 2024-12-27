import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <div className='bg-green-600 text-white'>
      <div>
        <h1 className=' flex items-center justify-center font-bold text-4xl mt-4'>Flowers</h1>
      </div>

      <div className="">
        <Image src="/jasmine.jpg" alt='flower' width={600} height={600}/>
        <h1>JASMINE</h1>
        <p>Jasmine flower, also known as Jasminum, is a fragrant and beautiful <br />
             flowering plant that belongs to the Oleaceae family. Known for its<br />
             delicate white, yellow, or pink flowers, jasmine is often associated <br />
             with purity, love, and beauty. It is commonly grown for its strong,<br />
             sweet scent, which is used in perfumes, teas, and aromatherapy. <br />
             Jasmine flowers bloom in the spring and summer, attracting pollinators<br />
             like bees and butterflies. The plant is also known for its medicinal<br />
             properties, often used in traditional medicine for its calming and soothing effects.</p>
      </div>
    </div>
  )
}

export default Products
