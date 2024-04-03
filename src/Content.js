import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Features from './Features'
import Catogories from './Catogories'



const Content = () => {

  const [input,setInput] = useState('')

  return (
    <main className='pb-32'>
      
      <SearchBar
           input={input}
           setInput={setInput}
        />
        <Features/>
        <Catogories/>
   
      
    </main>
  )
}

export default Content