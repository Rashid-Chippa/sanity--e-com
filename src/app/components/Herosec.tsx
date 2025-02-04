import Image from 'next/image'
import React from 'react'



const Herosec = () => {
  return (
    <>
    <div className="allhero h-screen -mt-11 xl:pl-14 flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-evenly bg-black ">

       {/* bigtext */}

    <div className='big-text-and-btns text-start '>
          <h1 className='  font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '>Its Quick & Amusing!</h1>
          <h1 className='  font-bold text-[46px] md:font-bold md:text-[60px]  text-white '><span className='text-custom-yellow'>Th</span>e Art of speed <br />
          food Quality</h1>
          <p className='w-[500px] h-[54px] text-[18px]  text-white mt-3'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>



      <div className='space-x-3 mt-9 pb-8 flex items-center justify-start'>
              <button className=' border-[1px] py-3 px-6  rounded-3xl bg-custom-yellow  text-white '>Start learning now</button>
      </div>



          </div>



          {/* image */}
          
          <div className='flex items-center '>
            <Image src={"/images/foodplate.svg"} height={900 } width={640} alt='img' className='hidden md:flex' />
          </div>
    </div>

          </>
  )
}

export default Herosec