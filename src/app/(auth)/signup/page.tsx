import React from 'react'
import SignupForm from '@/components/SignupForm'



const page = () => {
  return (
    <div className='bg-zinc-100 px-7 py-5 rounded flex flex-col  justify-center items-center'>
      <h2 className='text-xl font-normal pb-4 '>Signup</h2>
      <SignupForm/>
    </div>
  )
}

export default page
