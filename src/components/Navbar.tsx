import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-zinc-100 '>
    <nav className='flex  w-full p-3 max-w-6xl mx-auto items-center justify-between '>
        <div className='flex items-center gap-1'> 
        <Image width={40} height={50} className='' src='/logo.png' alt='logo'/>
        <p className='text-xl font-semibold text-red-600'>HomieGlobin</p>
        </div>
        <div className='flex gap-5 items-center font-medium'>
          <Link href='/'><div className='hover:text-red-600 cursor-pointer'>Home</div></Link>
        
        <div className='hover:text-red-600 cursor-pointer'>Donate</div>
        <div className='hover:text-red-600 cursor-pointer'>Find Blood</div>
        <Link href='/signin'><Button className=''>Sign in</Button></Link>
        
        </div>
        

    </nav>
    </div>
  )
}

export default Navbar
