import { List } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import Image from 'next/image'
function OurMenu() {
  return (
    <div className='h-screen'>

<div className='big-text-and-btns bg-black text-center pb-14'>
          <h1 className=' pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '>Choose & pick</h1>
          <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white '><span className='text-custom-yellow'>Fr</span>om Our Menu</h1>

          <div className="flex items-center pt-2 justify-center sm:hidden">
        <List size={40} color="white" weight="thin" />
        </div>
          <ul className='hidden  sm:flex-row sm:justify-center items-center sm:flex md:justify-center md:items-center sm:gap-x-4 lg:gap-x-24 mt-11 '>
             <li className='text-[20px]  text-custom-yellow hover:text-gray-300 cursor-pointer'>Home</li>
             <li className='text-[20px]  hover:text-custom-yellow transition-all cursor-pointer'>Menu</li>
             <li className='text-[20px]  hover:text-custom-yellow transition-all cursor-pointer'>Blog</li>
             <li className='text-[20px]  hover:text-custom-yellow transition-all cursor-pointer'>Pages</li>
             <li  className='text-[20px]  hover:text-custom-yellow transition-all cursor-pointer'>About</li>
             <li  className='text-[20px]  hover:text-custom-yellow transition-all cursor-pointer'>Shop</li>
             <li  className='text-[20px]   hover:text-custom-yellow transition-all cursor-pointer'>Contact</li>
         </ul>
</div>



{/* main 2 divide */}
 <div className='  flex flex-col items-center justify lg:flex lg:flex-row lg:items-center lg:justify-center gap-x-7'>
{/* image */}
<div className="flex items-center justify-center ">
    
<div className='flex'>
<Image src="/images/corri.svg" alt="" height={406} width={515} />
                

       </div>
<div className='absolute  '>
<Image src="/images/vegplate.svg" alt="" height={362} width={366} />
                 

       </div>
    </div>

    {/* cards 2 cols */}
    <div className=" hybrib text 6x6  lg:flex  gap-x-6 ">
 {/* col 1 */}
      <div className='flex flex-col gap-y-4'>
{/* card 1 */}
      <div className='flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white">Lettuce Leaf</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>

       </div>

       {/* card 2 */}

      <div className='flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white">Fresh Breakfast</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>

       </div>

{/* card 3*/}

      <div className='flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white">Mild Butter</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>

       </div>

{/* card 4 */}

      <div className='flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white">Glow Cheese</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>

       </div>

{/* col1 end */}
     </div>
{/* col 2 */}
       <div className='hidden lg:flex flex-col gap-y-4 ' >

{/* card 5 */}

      <div className=' flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white">Italian Pizza</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>

{/* card 6 */}

       </div>
      <div className='flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white">Sllice Beef</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>


       </div>

       {/* card 7 */}

      <div className='flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white">Mushaom Pizza</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>

       </div>

{/* card 8 */}

      <div className='flex'>
<Image src="/images/sprinkle.svg" alt="" height={79} width={80} className='rounded-md' />
                <div className="pl-3">
                  <p className="text-[20px] text-white ">Is fast food good for your body?</p>
                  <p className="text-[14px] text-gray-400">Lacus nisi, et ac dapibus velit in consequat.</p>
                  <p className="text-[18px] text-custom-yellow font-semibold">12.5$</p>
                </div>

{/* col2  end */}
       </div>

</div>

</div>


 </div>








 
    </div>
  )
}

export default OurMenu