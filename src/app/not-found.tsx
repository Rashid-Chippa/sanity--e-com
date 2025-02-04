import React from 'react'

function notfound() {
  return (
    <div className='w-screen h-[450px] bg-white flex flex-col items-center justify-center '>
      <div className='text-[96px] text-custom-yellow font-bold'>404</div>
      <div className='text-[32px] text-black pb-5 '>
      Oops! Look likes something going wrong
      </div>
      <div className='text-[18px] text-gray-400 text-center'>Page Cannot be found! we’ll have it figured out in no time.<br />
      Menwhile, cheek out these fresh ideas:</div>
      <div className='pt-9'>
        <button className='px-14 py-4 bg-custom-yellow text-white rounded-md'>
            <p className='text-[18px]'>Go to home</p>
        </button>
      </div>
    </div>
  )
}

export default notfound