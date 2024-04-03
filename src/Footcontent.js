import React from 'react'
import Footmain from './Footmain'
import Footnav from './Footnav'

const Footcontent = () => {
  return (
    <div className='flex justify-center'>
        <div className='flex  justify-center lg:mx-auto px-5'>
            
            <Footmain/>
             
            <Footnav/>

        </div>
    </div>
  )
}

export default Footcontent