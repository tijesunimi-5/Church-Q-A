import Success from '@/components/Success';
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='mt-32 ml-2 justify-center align-middle'>
        {/**Component to show if login is successfull */}
        <Success />
      </div>
    </div>
  );
}

export default page
