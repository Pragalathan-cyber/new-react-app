import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footmain = () => {
  return (
    <div className='sm:w-full lg:w-1/3 lg:ml-20'>
            <h4 className='font-bold text-4xl'>Easy <p className='ml-1 text-blue-700'>ahead</p></h4>
            <p className='text-gray-600 mt-10'>We take the work out of connecting with others so you can accomplish more.</p>
            <select className='w-full mt-10 border border-gray-300 p-2 rounded font-semibold outline-none '>
                <option  value="english">English (Us)</option>
                <option value="Tamil">Tamil</option>
                <option value="Malayalam">Malayalam</option>
            </select>
            <div className="store-links flex w-1/2 mt-10 ">
                <img src="/images/footer_1.png" alt="" />
                <img src="/images/footer_2.png" className='stimg2 h-1/3 mt-4 lg:mt-3 md:mt-2  ' alt="" />
            </div>
            <div className="icons mt-10 flex gap-x-5 pl-1">
                <a href="https://twitter.com/" className='text-2xl'><FaTwitter/></a>
                <a href="https://www.facebook.com/" className='text-2xl'><FaFacebook/></a>
                <a href="https://www.instagram.com/" className='text-2xl'><FaInstagram/></a>
                <a href="https://www.linkedin.com/" className='text-2xl'><FaYoutube/></a>
            </div>
   </div>
  )
}

export default Footmain