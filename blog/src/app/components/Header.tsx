import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-green-600 text-white'>
      <div className='font-extrabold'>Bamsi Blog</div>

    <div className='flex justify-center items-center gap-8'>
        <div className=' font-semibold'><Link href="/"> Home </Link></div>
        <div className=' font-semibold'><Link href="clientSide"> Reviews  </Link></div>
        
    </div>
    </div>
  )
}

export default Header