import React from 'react'


const LargeNav = () => {
  return (
    <div 
    className='nav lg:pr-16 md:pr-1 lg:mt-1 md:mt-3  hidden md:block' 
>
    <ul 
       className='flex gap-8'
    >
        <li 
           className='cursor-pointer flex  hover:text-sky-500'
        >
            Developers 
            <img 
               src="/images/littleicon.png" 
               className='w-8 h-8 '
               alt=''
            />

        </li>
        <li 
           className='cursor-pointer flex hover:text-sky-500'
        > 
             Report 
             <span className='ml-1'> Abuse </span>
             <img 
                src="/images/littleicon.png"  
                className='w-8 h-8 '
                alt=''
              />
        </li>
        <li 
           className='cursor-pointer  hover:text-sky-500'
         >
            Contact Us
        </li>
        <li>|</li>
        <li 
            className='cursor-pointer  hover:text-sky-500'
        >
             Log In
        </li>
        <li 
            className='cursor-pointer  hover:text-sky-500'
        > 
            Sign Up
        </li>
    </ul>
</div>
  )
}

export default LargeNav