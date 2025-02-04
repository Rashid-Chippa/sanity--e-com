import React from 'react'
import Image from 'next/image'
import { ChatDots, ShareNetwork, ThumbsUp } from '@phosphor-icons/react/dist/ssr'
function Blogcards() {
  return (





    <><div className='text-center pb-14  '>

          <h1 className=' pt-9 font-great-vibes  text-[32px]  md:text-[32px]  text-custom-yellow '>Blog Post</h1>
          <h1 className='  font-bold text-[30px] md:font-bold md:text-[48px]  text-white '><span className='text-custom-yellow'>La</span>test News & Blog</h1>
      </div><div className='flex flex-col gap-y-5 justify-center items-center lg:flex lg:flex-row lg:row lg:justify-center lg:items-center gap-x-4'>




      <div className="card1 group border border-slate-300 pb-4 w-[250px]"> {/* Restricted width */}
  <div className="relative w-full rounded-md">
    <div className="flex justify-center items-center">
      <Image
        src="/images/burg.svg"
        alt="Example Image"
        width={423}
        height={349}
        className="object-cover"
      />
    </div>
  </div>

  {/* Card Details */}
  <div className="space-y-5 px-4">
    <p className="text-custom-yellow text-sm pt-4">10 February 2022</p>

    {/* Ensure text stays within the card's width */}
    <p className="text-white text-[16px] pt-2 line-clamp-2">
      Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
    </p>

    <div className="flex justify-between">
      <p className=" text-[14px] text-gray-400">Learn More</p>
      <div className="flex justify-end items-center space-x-[5px]">
        <ThumbsUp size={16} weight="light" />
        <ChatDots size={16} weight="light" className="text-custom-yellow" />
        <ShareNetwork size={16} weight="light" />
      </div>
    </div>
  </div>
</div>






      <div className="card2 group border border-slate-300 pb-4 w-[250px]"> {/* Restricted width */}
  <div className="relative w-full rounded-md">
    <div className="flex justify-center items-center">
      <Image
        src="/images/piz.svg"
        alt="Example Image"
        width={423}
        height={349}
        className="object-cover"
      />
    </div>
  </div>

  {/* Card Details */}
  <div className="space-y-5 px-4">
    <p className="text-custom-yellow text-sm pt-4">10 February 2022</p>

    {/* Ensure text stays within the card's width */}
    <p className="text-white text-[16px] pt-2 line-clamp-2">
    Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
    </p>

    <div className="flex justify-between">
      <p className=" text-[14px] text-gray-400">Learn More</p>
      <div className="flex justify-end items-center space-x-[5px]">
        <ThumbsUp size={16} weight="light" />
        <ChatDots size={16} weight="light" className="text-custom-yellow" />
        <ShareNetwork size={16} weight="light" />
      </div>
    </div>
  </div>
</div>








      <div className="card3 group border border-slate-300 pb-4 w-[250px]"> {/* Restricted width */}
  <div className="relative w-full rounded-md">
    <div className="flex justify-center items-center">
      <Image
        src="/images/tac.svg"
        alt="Example Image"
        width={423}
        height={349}
        className="object-cover"
      />
    </div>
  </div>

  {/* Card Details */}
  <div className="space-y-5 px-4">
    <p className="text-custom-yellow text-sm pt-4">10 February 2022</p>

    {/* Ensure text stays within the card's width */}
    <p className="text-white text-[16px] pt-2 line-clamp-2">
    Curabitur rutrum velit ac congue malesuada
    </p>

    <div className="flex justify-between">
      <p className=" text-[14px] text-gray-400">Learn More</p>
      <div className="flex justify-end items-center space-x-[5px]">
        <ThumbsUp size={16} weight="light" />
        <ChatDots size={16} weight="light" className="text-custom-yellow" />
        <ShareNetwork size={16} weight="light" />
      </div>
    </div>
  </div>
</div>
     



             






             



          </div></>
  )
}

export default Blogcards