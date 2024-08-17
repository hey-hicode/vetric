import React from 'react'
import Image from 'next/image'
const Explore = () => {
  return (
    <div className="container">
      <div className='justify-center flex flex-col text-center pt-24 items-center'>
        <div className="max-w-[545px] mx-auto">
          <h1 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white to-[#96EA63] text-transparent bg-clip-text mt-6">
          Explore Our Feature
          </h1>
          <p className="text-[19px] leading-[30px] text-white tracking-tight mt-5">
          Discover the powerful features that make our platform stand out
          </p>
        </div>
      </div>
<div className="justify-center flex flex-col text-center py-16 items-center">
<div className="gap-4 grid grid-cols-1  md:grid-cols-2 justify-center ">
    <Image src='/Container.png' width={500} height={200} alt='' />
    <Image src='/Button container.png' width={500} height={200} alt='' />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-4">
    <Image src='/Vertical container.png' width={300} height={200} alt='' />
    <Image src='/Vertical container (2).png' width={300} height={200} alt='' />
    <Image src='/Vertical container.png' width={300} height={200} alt='' />
  </div>
</div>
</div>


  )
}

export default Explore
