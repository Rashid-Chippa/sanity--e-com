import React from 'react'
import Image from 'next/image'
function Featurecards() {
  return (


    <><section
          className="relative flex items-center mt-28 justify-center h-[469px] bg-cover bg-center"
          style={{
              backgroundImage: "url('/images/steak.svg')",
          }}
      >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 text-center">
              




<div className=' '>


              <div className=' lg:flex lg:items-center lg:justify-center md:gap-y-7  lg:gap-x-7 xl:gap-x-28 '>

                  <div className="flex flex-col items-center justify-center  xl:flex xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-28">
                      <div className=' flex flex-col justify-center items-center text-center text-white'>
                          <Image src={"/images/icon1.png"} height={120} width={120} alt='img' className='rounded-xl' />
                          <h1 className='text-[24px] mt-2'>Professional Chefs</h1>
                          <h1 className='text-[40px] mt-3'>420</h1>
                      </div>
                      <div className=' flex flex-col justify-center items-center text-center text-white'>
                          <Image src={"/images/icon2.png"} height={120} width={120} alt='img' className='rounded-xl' />
                          <h1 className='text-[24px] mt-2'>Professional Chefs</h1>
                          <h1 className='text-[40px] mt-3'>420</h1>
                      </div>
                  </div>
                  <div className=" hidden lg:flex flex-col items-center justify-center xl:flex-row xl:items-center gap-y-7 xl:justify-center md:gap-x-3 xl:gap-x-28">
                      <div className=' flex flex-col justify-center items-center text-center text-white'>
                          <Image src={"/images/icon3.png"} height={120} width={120} alt='img' className='rounded-xl' />
                          <h1 className='text-[24px] mt-2'>Professional Chefs</h1>
                          <h1 className='text-[40px] mt-3'>420</h1>
                      </div>
                      <div className=' flex flex-col justify-center items-center text-center text-white'>
                          <Image src={"/images/icon4.png"} height={120} width={120} alt='img' className='rounded-xl' />
                          <h1 className='text-[24px] mt-2'>Professional Chefs</h1>
                          <h1 className='text-[40px] mt-3'>420</h1>
                      </div>
                  </div>
              </div>


          </div>





          </div>
      </section>
      
      
      </>
  )
}

export default Featurecards