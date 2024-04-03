import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import LargeNav from './LargeNav';
import SmallNav from './SmallNav';
import './App.css'


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <header className='flex justify-between px-5 py-2'>
        
        <div className="logo-container flex">
            <img 
               src="/images/calendlylogo.png" 
               className='logo w-36'
               alt="" 
             />
            <p className='text-xl mt-2 cursor-pointer'>| Help Center</p>
        </div>    

        <div 
            className="menu-icon text-2xl mt-2 pr-1  block md:hidden"
            onClick={toggleNavbar}
         >
            {isOpen ? <FaTimes /> : <FaBars />}
        </div>

      <SmallNav
         isOpen={isOpen}
         toggleNavbar={toggleNavbar}
      />

      <LargeNav/>

    </header>
  )
}

export default Header