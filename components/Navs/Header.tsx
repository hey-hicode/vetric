import React from 'react';
import Logoss from '../Icons/Logoss';
import Container from '../Container';
import Hamburger from '../Icons/Hamburger';
import { navLinks } from '@/lib/constant';
import Button from '../Button';
const Header = () => {
  return (
<div className='sticky top-0 left-0 w-full z-[999]  backdrop-blur-sm'>
      <Container className='flex py-4 justify-between items-center'>
        <Logoss />
        <nav className='hidden e lg:flex gap-x-10 '>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-white/40 hover:text-blue-500 text-sm transition-colors duration-300'
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className='hidden e lg:flex  items-center gap-6'>
<span className='text-white text-sm'>Login</span>
<Button className='btn text-black text-sm py-2 px-8'  >
  Signup
</Button>
        </div>
       <div className='lg:hidden e flex '>
       <Hamburger />
       </div>
      </Container>
    </div>
  );
};

export default Header;
