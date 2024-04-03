import React from 'react'
import Footcontent from './Footcontent'

const Footer = () => {
  return (
    <div>
        <Footcontent/>
        
        <div className='flex justify-between px-10 py-5 mt-5'>
            <p className='text-gray-400 '>Copyright &copy; Calendly : 2024</p>
            <p className='text-gray-400'>Calendly Staus</p>
            <p className='text-gray-400'>Privacy / Terms and Conditions</p>
        </div>
    </div>
  )
}

export default Footer