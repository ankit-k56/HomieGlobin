import React from 'react'
import SigninForm from '@/components/SigninForm'

const page = () => {
  return (
    <div className='bg-zinc-100 px-7 py-5 rounded flex flex-col  justify-center items-center'>
      <h2 className='text-xl font-normal pb-4 '>Signin</h2>
      <SigninForm/>
    </div>
  )
}

export default page
