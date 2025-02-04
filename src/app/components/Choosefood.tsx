import React from 'react'
import Image from 'next/image'
import { Cookie, Hamburger, Wine } from '@phosphor-icons/react/dist/ssr'
function Choosefood() {
  return (
    <div className='bg-black  '>

{/* headings */}
<div className='big-text-and-btns bg-black text-center mb-14'>
          <h1 className=' pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '> Food Category</h1>
          <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white '><span className='text-custom-yellow'>Ch</span>oose Food Items</h1>
    </div>

{/* cards */}
    <div className=' lg:flex lg:items-center lg:justify-center md:gap-y-7  lg:gap-x-7'>

<div className="flex flex-col items-center justify-center  xl:flex xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-7 ">
    <div>
    <Image src={"/images/cdim1.svg"} height={328 } width={305} alt='img' className='rounded-xl' />
    </div>
    <div>
    <Image src={"/images/cdim2.svg"} height={328 } width={305} alt='img' className='rounded-xl' />
    </div>
</div>
<div className=" hidden lg:flex flex-col items-center justify-center xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-7">
    <div>
    <Image src={"/images/cdim3.svg"} height={328 } width={305} alt='img' className='rounded-xl' />
    </div>
    <div>
    <Image src={"/images/cdim4.svg"} height={328 } width={305} alt='img' className='rounded-xl' />
    </div>
</div>
    </div>



    <div className="allhero mt-28 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-evenly bg-black ">


 {/* 7-image stack */}
   
 <div >
    <div className='flex flex-col gap-y-4'>


    <div className='xl:flex gap-x-4  items-start'>
{/* img 1 */}
    <div>
    <Image src={"/images/cardim1.svg"} height={362 } width={356} alt='img' className='hidden md:flex rounded-xl ' />
    </div>
    <div className=' hidden lg:flex justify-center space-x-3'>
{/* img2 */}
    <div className='mt-[120px]'>
    <Image src={"/images/cardim2.svg"} height={231} width={281} alt='img' className='rounded-xl' />
    </div>

    </div>
    </div>

    <div className='flex flex-col xl:flex xl:flex-row  md:gap-x-4 gap-y-4 '>

    {/* img3 */}
    <div>
    <Image src={"/images/cardim3.svg"} height={306 } width={244} alt='img' className='rounded-xl' />
    </div>

    {/* img4 */}
    <div>
    <Image src={"/images/cardim4.svg"} height={226 } width={221} alt='img' className='rounded-xl' />
    </div>

    <div className='flex flex-col gap-y-3'>
        {/* img5 */}
    <div>
    <Image src={"/images/cardim5.svg"} height={168 } width={161} alt='img' className='rounded-xl' />
    </div>
        {/* img6 */}
    <div>
    <Image src={"/images/cardim6.svg"} height={166 } width={161} alt='img' className='rounded-xl' />
    </div>
    </div>


    </div>

   </div>
    </div>


{/* bigtext */}

<div className='big-text-and-btns text-start h-screen'>
   <h1 className=' pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '>About us</h1>
   <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white '><span className='text-custom-yellow'>Ex</span>ta ordinary <br /> taste
   And Experienced 
</h1>
   <p className='w-[500px]  text-[18px] text-wrap  text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

<div className='flex items-center justify-start gap-x-6 mt-6'>

   <div className='flex flex-col items-center  justify-center'>
   <div className="bg-custom-yellow rounded-sm p-4">
   <Hamburger size={33} color="white" weight="light" />
            </div>
            <div className='text-sm mt-2'><p>Fast Food</p></div>
   </div>
   <div className='flex flex-col items-center justify-center'>
   <div className="bg-custom-yellow rounded-sm p-4">
   <Cookie size={33} color="white" weight="light" />
            </div>
            <div className='text-sm mt-2'><p>Lunch</p></div>
   </div>
   <div className='flex flex-col items-center justify-center'>
   <div className="bg-custom-yellow rounded-sm p-4">
   <Wine size={33} color="white" weight="light" />
            </div>
            <div className='text-sm mt-2'><p>Dinner</p></div>
   </div>
</div>




<div className='space-x-3 mt-9  bg-custom-yellow rounded-md  lg:flex lg:items-center lg:justify-start mr-24'>
      <div className='ml-4 w-full py-2 bg-white flex items-center justify-between px-20 rounded-md'>

       <div className='text-[48px] text-custom-yellow'>30+</div>
       <div className='text-custom-dark-gray'>Years of<br /><span className='text-[24px] text-black font-semibold'>Experienced</span></div>
      </div>
</div>


   </div>



  




</div>


    </div>
  )
}

export default Choosefood