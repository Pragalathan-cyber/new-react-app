import React from 'react'

const Footnav = () => {
  return (
    <div className='w-2/3 ml-20 hidden md:block'>

            <div className='flex ml-10 lg:ml-20 gap-x-20'>
                <div >
                    <p className='text-xl font-bold'>About</p>
                    <ul className='grid gap-3 mt-6'>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>About Calendly</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Contact Sales</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Newsroom</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Careers</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Security</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold'> Solutions</p>
                    <ul className='grid gap-3 mt-6'>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Customer Succes</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Sales</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Recruiting</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Information Technology</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Marketting</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold'>Popular Features</p>
                    <ul className='grid gap-3 mt-6'>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Embed Calendly</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Availablity</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Sending Notifications</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Using Calendly Mobile</li>
                    </ul>
                </div>
            </div>
            <div className='flex ml-10 lg:ml-20 gap-x-20 mt-8'>
                <div>
                    <p className='text-xl font-bold '>Support</p>
                    <ul className='grid gap-3 mt-6'>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Help Center</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Video Tutorials</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold'>Add-Ons</p>
                    <ul className='grid gap-3 mt-6'>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Download for Chrome</li>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Download for Firefox</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold'>Developers</p>
                    <ul className='grid gap-3 mt-6'>
                        <li className='text-gray-600 cursor-pointer hover:text-blue-500'>Developer Tools</li>
                    </ul>
                </div>
            </div>

   </div>
  )
}

export default Footnav