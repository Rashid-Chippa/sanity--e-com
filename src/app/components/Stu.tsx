import React from 'react'

import { Play } from '@phosphor-icons/react/dist/ssr'
function Featurecards() {
  return (


    <>
    
    
    
    
    
    <section
          className=" relative flex items-center mt-28 justify-center w-full h-800px lg:h-[469px] bg-cover bg-center"
          style={{
              backgroundImage: "url('/images/stuimg.svg')",
          }}
      >
          <div className="absolute inset-0 opacity-25 "></div>
          <div className="relative z-10 ">
              




<div className=' '>


              <div className=' lg:flex lg:items-center lg:justify-end mr-6 md:gap-y-7  lg:gap-x-7  '>



              <div className='big-text-and-btns text-end '>
          <h1 className='  font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '>Restaurant Active Process</h1>
          <h1 className='  font-bold text-[46px] md:font-bold md:text-[60px]  text-white '><span className='text-custom-yellow'>We</span>Document Every Food <br />
          Bean Process untile it is saved</h1>
          <p className=' text-[18px] text-end  text-white mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque <br /> bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,  </p>



      <div className='space-x-3 mt-9 pb-8 flex items-center justify-end'>
              <button className=' border-[1px] py-3 px-6  rounded-3xl bg-custom-yellow  text-white '>Start learning now</button>
              <button className=' border-[1px] p-4 rounded-full bg-custom-yellow  text-white '><Play size={24} color="white" weight="light" /></button>
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