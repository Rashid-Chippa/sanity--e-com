import { CheckFat } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import React from 'react'



const Createbest = () => {
  return (
    <>
    <div className="allhero h-screen flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-evenly bg-black ">

       {/* bigtext */}

    <div className='big-text-and-btns text-start '>
          <h1 className=' pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '>About us</h1>
          <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white '><span className='text-custom-yellow'>We</span> Create the best<br />
foody product
</h1>
          <p className='w-[500px]  text-[18px] text-wrap  text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

<div className='space-y-6 mt-6'>

          <p className='flex'><CheckFat size={24} weight="fill" />Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <p className='flex'><CheckFat size={24} weight="fill" />Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
          <p className='flex'><CheckFat size={24} weight="fill" />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>



      <div className='space-x-3 mt-9 pb-8 flex items-center justify-center lg:flex lg:items-center  lg:justify-start'>
              <button className=' border-[1px] py-3 px-6  rounded-3xl bg-custom-yellow  text-white '>Read More</button>
      </div>



          </div>



          {/* 3image stack */}
          
          <div className='flex flex-col items-center lg:space-y-3 '>
           <div>
           <Image src={"/images/img1.svg"} height={330 } width={660} alt='img' className='hidden md:flex rounded-xl' />
           </div>
           <div className=' hidden lg:flex items-center justify-center space-x-3'>
{/* img2 */}
           <div>
           <Image src={"/images/img2.svg"} height={194} width={322} alt='img' className='rounded-xl' />
           </div>

           {/* img3 */}
           <div>
           <Image src={"/images/img3.svg"} height={194 } width={322} alt='img' className='rounded-xl' />
           </div>

          </div>
           </div>
    </div>

          </>
  )
}

export default Createbest