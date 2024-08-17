import React from 'react'
import Container from '../Container'

import Base from '../Icons/Base'

const Footer = () => {
  return (
    <div className='text-white/50'>
          <Container className='flex py-4 justify-between border-b border-white/50 items-center'>
           <Base />

           <nav className="flex gap-6 flex-col md:flex-row   ">
  <a href="#" className='text-sm'>About</a>
  <a href="#" className='text-sm'>Feaures</a>
  <a href="#" className='text-sm'>Customers</a>
  <a href="#" className='text-sm'>Pricing</a>
  <a href="#" className='text-sm'>Help</a>
  <a href="#" className='text-sm'>Careers</a>
</nav>


          </Container>
          <Container className='flex py-4 justify-between  py-4 items-center'>
           <h4 className='font-medium  text-[#7A7B85] text-sm'>VETRIC - 2024</h4>
           <div className='rounded-full px-4 py-2 border border-[#7A7B85] text-sm '>
           Operating System
           </div>
           <div className="flex justify-center gap-6 mt0">
  {/* <SocialX />
  <SocialLinkdein />
  <SocialLinkdein />
  <SocialPin /> */}
</div>


          </Container>
    </div>
  )
}

export default Footer