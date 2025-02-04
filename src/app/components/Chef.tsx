'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Chef } from '../../../types/chefs'
import { client } from '@/sanity/lib/client'
import {  all } from '@/sanity/lib/queries'// ,chefs
import { urlFor } from '@/sanity/lib/image'
//import { IoChevronForwardCircle } from 'react-icons/io5'
import Link from 'next/link'
import { addToCart } from '../actions/actions'
import Swal from 'sweetalert2'
function Chefs() {
  const [chef, setChef] =useState <Chef[]>([])
  useEffect(() => {
    async function fetchchef(){
      const fetchedchef : Chef[] = await client.fetch(all)
      setChef(fetchedchef)
    }
    fetchchef()
  },[])

  const handleAddToCart =(e: React.MouseEvent,chef: Chef ) => {
    e.preventDefault()
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${chef.name} added to cart`,
      showConfirmButton: false,
      timer: 1500
    })
    addToCart(chef )
  }

  
  return (
    <>
    <div className='pt-9 text-white items-center'>
      <h1 className='pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow text-center'>Food For Order</h1>
      <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white text-center'><span className='text-custom-yellow'>Ch</span>oose Food</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-center'>
     {chef.map((chef) => (
      <div key={chef.name}>
        {chef.experience}
        <Link href={`/chef/${chef.slug.current}`}>
        {chef.image &&(
          <Image 
          src={urlFor(chef.image).url()}
          alt="image"
          height={200}
          width={200}
          />
         
        )}
        <h2 className='text-lg font-semibold mt-4'>{chef.name}</h2>
          <button  className='bg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform
          duration-300 ease-in-out'
          onClick={(e) => handleAddToCart(e, chef)}>
          Add To Card

          </button>
          </Link>
        </div>
      
     ))} 
       </div>
<div className='text-center pb-14  '>

          <h1 className=' pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '> Food Category</h1>
          <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white '><span className='text-custom-yellow'>Ch</span>oose Food Items</h1>
</div>
      </div>
      
{/* cards */}
      <div className=' lg:flex lg:items-center lg:justify-center md:gap-y-7  lg:gap-x-7'>
              <div className="flex flex-col items-center justify-center  xl:flex xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-7 ">
                  <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white '>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '>Chief Chef</p>
                      </div>
                      <Image src={"/images/p1.svg"} height={391} width={312} alt='img' className='rounded-xl' />
                  </div>
                  <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white'>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '>Chief Chef</p>
                      </div>
                      <Image src={"/images/p2.svg"} height={391} width={312} alt='img' className='rounded-xl' />
                  </div>
              </div>
              <div className=" hidden lg:flex flex-col items-center justify-center xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-7">
              <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white'>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '>Chief Chef</p>
                      </div>
                      <Image src={"/images/p3.svg"} height={391} width={312} alt='img' className='rounded-xl' />
                  </div>
                  <div className='relative'>
                      <div className='absolute left-0 bottom-0 px-9 bg-white'>
                        <p className='text-[18px] text-start text-black'>D.Estwood</p>
                        <p className='text-[14px] text-start text-custom-gray-4 '>Chief Chef</p>
                      </div>
                      <Image src={"/images/p4.svg"} height={391} width={312} alt='img' className='rounded-xl' />
                  </div>
              </div>


          </div>
              <div className='space-x-3 mt-9 pb-8 flex items-center justify-center lg:flex lg:items-center  lg:justify-center'>
              <button className=' border-[2px] py-3 px-8  rounded-3xl  border-custom-yellow    text-white '>See More</button>
      </div>

    
    </>
  )
}

export default Chefs