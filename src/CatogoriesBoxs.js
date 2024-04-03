import React from 'react'

const CatogoriesBoxs = () => {
  return (
    <div className='flex flex-wrap mt-5 justify-center lg:w-4/5 lg:mx-auto pb-32 border-b border-dotted border-b-gray-500'>

    <div className="box border-2 rounded-xl  border-sky-600 w-80 h-60 relative m-2">
       <p className='text-xs text-white bg-blue-600 px-5 py-2 rounded-tr-lg rounded-bl-lg absolute top-0 right-0'>New</p>
       <img src="/images/catogories_1.png" className='w-36 mx-auto px-1' alt="" />
       <p className='text-xl font-bold text-center'> Getting Started</p>
       <p className='mx-auto text-center text-gray-600 pb-2'>Learn the basics,correct your calender,and discover features that wil make schedduling easier</p>
    </div>

    <div className="box w-80 h-60 m-2   shadow rounded-xl ">
       <img src="/images/catogories_2.png" className='w-36 mx-auto px-1' alt="" />
       <p className='text-xl font-bold text-center'> Using Calendly</p>
       <p className='mx-auto text-center text-gray-600 pb-2'>Availiablity,Event Type Setting, and Multi-user features</p>
    </div>

    <div className="box w-80 h-60 m-2 shadow rounded-xl ">
       <img src="/images/catogories_3.png" className='w-36 mx-auto px-1' alt="" />
       <p className='text-xl font-bold text-center'>Calendly For Mobile</p>
       <p className='mx-auto text-center text-gray-600 pb-2'>Mobile Apps for IOS & Android</p>
    </div>

    <div className="box w-80 h-60 m-2 shadow rounded-xl ">
       <img src="/images/catogories_4.png" className='w-36 mx-auto px-1' alt="" />
       <p className='text-xl font-bold text-center'> Integrations & Automations</p>
       <p className='mx-auto text-center text-gray-600 pb-2'>Include Calender Connections,Calendly</p>
    </div>

    <div className="box  w-80 h-60 m-2 shadow rounded-xl ">
       <img src="/images/catogories_5.png" className='w-36 mx-auto px-1' alt="" />
       <p className='text-xl font-bold text-center'> Account Setting</p>
       <p className='mx-auto text-center text-gray-600 pb-2'>Includes Billing Security,SAML/SCIM setup,</p>
    </div>

    <div className="box w-80 h-60 m-2 shadow rounded-xl ">
       <img src="/images/catogories_6.png" className='w-36 mx-auto px-1' alt="" />
       <p className='text-xl font-bold text-center'> Video Tutorials</p>
       <p className='mx-auto text-center text-gray-600 pb-2'>Watch these videos to learn about</p>
    </div>

  </div>
  )
}

export default CatogoriesBoxs