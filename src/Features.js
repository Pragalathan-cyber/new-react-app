import React from 'react'

const Features = () => {
  return (
    <div className='flex justify-center mt-10'>
        <div className='flex '>
            <ul>
                <li className='flex'>
                    <img className='w-10 ml-1' src="/images/icons__1.png" alt="" />
                    <span className='mt-3 text-blue-600'>Setting up your first event</span>
                </li>
                <li className='flex'>
                    <img className='w-10' src="/images/icons__2.png" alt="" />
                    <span className='mt-3 text-blue-600'>Schedule with video conferencing</span>
                </li>
                <li className='flex'>
                    <img className='w-10 mt-1' src="/images/icons__3.png" alt="" />
                    <span className='mt-3 text-blue-600'>Automate tasks with Worksflow</span>
                </li>
            </ul>
            <ul className='ml-2'>
                <li className='flex'>
                    <img className='w-10' src="/images/icons__4.png" alt="" />
                    <span className='mt-3 text-blue-600'>Troubleshooting availabity</span>
                </li >
                <li className='flex mt-3'>
                    <img className='w-10 mt-2' src="/images/icons__5.png" alt="" />
                    <span className='mt-3 text-blue-600'>Embed options overview</span>
                </li>
                <li className='flex mt-3'>
                    <img className='w-10 mt-1' src="/images/icons__6.png" alt="" />
                    <span className='mt-3 text-blue-600'>Using Calendly for Chrome</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Features