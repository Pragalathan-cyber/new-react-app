import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = ({input,setInput}) => {
  return (
    <div className='flex justify-center'>
      <div className='lg:mt-2'>
         <h1 className='text-4xl lg:text-6xl font-bold py-8 pl-2'>What can we help you with?</h1>

          <div className='flex gap-1 border-2 w-11/12 mx-auto border-gray-300 rounded-3xl py-2 px-3'>
            <FaSearch className='text-gray-400 mt-1'/>
            <input 
                type="search" 
                className=' outline-none w-full pl-1'
                placeholder=' Search our articles'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
          </div>
      </div>
      
      
    </div>
  )
}

export default SearchBar