import React from 'react'
import CatogoriesBoxs from './CatogoriesBoxs'

const Catogories = () => {
  return (
    <div className='flex justify-center w-full '>

      <div className='mt-20 w-full'>

          <div className="w-full flex justify-center">
            <h2 className='font-bold text-gray-700 text-2xl lg:text-4xl mx-auto'>Catogories</h2>
          </div>
          
          <CatogoriesBoxs/>
      </div>

    </div>
  )
}

export default Catogories