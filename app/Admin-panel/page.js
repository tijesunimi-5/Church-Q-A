import React from 'react'

const page = () => {
  return (
    <div>
      <div className='mt-10'>
        <h1 className='text-2xl text-center font-semibold'>Admin Panel</h1>

        {/*User who submitted form*/}
        <div className='submitted-form bg-gray-200'></div> 


        {/*Submitted answers */}
        <div className='submitted-answer bg-gray-200'></div>
      </div>
    </div>
  )
}

export default page
