import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import Glow from '../Icons/Glow'
import Button from '../Button'

const Hero = () => {
  return (
    <div className='relative text-white overflow-x-clip'>
      <Container>
        <div className='relative'>
          <Image
            src='/Glow.png'
            width={2000}  // Maximum width for mobile
            height={300}
            alt=''
            className='absolute hidden lg:flex w-full h-auto' // Responsive width
          />
          <div className='absolute lg:hidden flex w-full h-auto [mask-image:linear-gradient(to_left,transparent,black,transparent)]'>
            <Image
              src='/Glow (3).png'
              width={800}  // Maximum width for mobile
              height={300}
              alt=''
              className='w-full h-auto' // Responsive width
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 text-center max-w-[660px] min-h-[70vh] mx-auto w-full'>
          <h1 className='md:text-[70px] text-[47px] font-groove leading-[55px] font-[900] md:leading-[70px]'>
            Build the Future with Web
          </h1>
          <p className='text-white/60 text-base'>
            Discover how we can help you connect with the next generation of the internet.
          </p>
          <div className='flex items-center gap-6 mt-6'>
            <Button className='btn text-black text-sm py-3 px-8'>
              Sign up
            </Button>
            <Button className='text-white text-sm py-3 px-8'>
              Contact sales
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
