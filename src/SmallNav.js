import React from 'react'

const SmallNav = ({isOpen,toggleNavbar}) => {
  return (
    <ul 
    className={isOpen ? 'nav-menu active' : 'nav-menu'}
>
    <li className="nav-item">
      <p 
        
        className="nav-links cursor-pointer hover:text-blue-500" 
        onClick={toggleNavbar}
       >
        Contact Us
      </p>
    </li>
    <li className="nav-item cursor-pointer hover:text-blue-500">
      <p 
     
        className="nav-links" 
        onClick={toggleNavbar}
      >
        Log In
      </p>
    </li>
    <li className="nav-item cursor-pointer hover:text-blue-500">
      <p 
       
        className="nav-links" 
        onClick={toggleNavbar}
      >
        Sign Up
      </p>
    </li>
    </ul>
  )
}

export default SmallNav