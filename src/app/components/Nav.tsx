import React from 'react'
import Image from 'next/image'
import { List, MagnifyingGlass, Tote, User } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'


const Nav = () => {
  return (


<>
  
       


 
                   {/* Navbar */}


    <nav className='flex items-center justify-between px-6 lg:justify-evenly h-[90px] bg-black '>
      
      <div className="logo flex items-center cursor-pointer">
        <Link href={'/'}>
      <Image src={'/images/Foodtuck.svg'} height={32 }
width={109} alt=' logo'/>
</Link>
      </div>
      
      
      <div>  

        <div className="flex items-center pt-2 justify-end lg:hidden">
        <List size={40} color="white" weight="thin" />
        </div>
      <ul className='hidden  lg:flex lg:items-center lg:space-x-7 '>
      
      <li className='text-[16px] text-white hover:text-custom-yellow transition-all cursor-pointer'>
        <Link href="/">Home</Link>
      </li>
      <li className='text-[16px] text-white hover:text-custom-yellow transition-all cursor-pointer'>
        <Link href="/foodcategory">Menu</Link>
      </li>
      <li className='text-[16px] text-white hover:text-custom-yellow transition-all cursor-pointer'>
        <Link href="/shop/shoppingCart">Shop</Link>
      </li>
      <li className='text-[16px] text-white hover:text-custom-yellow transition-all cursor-pointer'>
        <Link href="/pages">Pages</Link>
      </li>
      <li className='text-[16px] text-white hover:text-custom-yellow transition-all cursor-pointer'>
        <Link href="/faqs">About</Link>
      </li>
      <li className='text-[16px] bg-custom-yellow px-2 hover:text-custom-yellow hover:bg-gray-400 transition-all cursor-pointer'>
        <Link href="/signup">Sign Up</Link>
      </li>
      <li className='text-[16px] border bg-custom-yellow px-2 hover:text-custom-yellow hover:bg-gray-400 transition-all cursor-pointer'>
        <Link href="/signin">Login</Link>
      </li>


         </ul>

  {/* Auth-buttons */}



            </div>

         <div className=' hidden lg:flex space-x-3'>
             <button className=''>
             <MagnifyingGlass size={24} className=' hover:text-custom-yellow transition-all cursor-pointer' />
             </button>
             <button className=''>
             <User size={24} className=' hover:text-custom-yellow transition-all cursor-pointer' />
             </button>
             <button className=''>
             <Tote size={24} className=' hover:text-custom-yellow transition-all cursor-pointer'/>
             </button>
            
           
            </div>
    </nav>
  

  </>
  )
}

export default Nav