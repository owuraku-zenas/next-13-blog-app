'use client'
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

type Props = {}

const page = (props: Props) => {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      <h2 className='font-bold text-[40px]'>Welcome to Next Buzz</h2>
      <p>Enter Email and Passowrd</p>
      <form className="py-6 w-full flex flex-col items-center gap-4">
        <input required className='border w-full text-lg p-2 rounded-lg' type="text" placeholder='example@gmail.com' />
        {/* FIXME: focus group for enabling outline */}
        <div className='border p-2 w-full focus:outline focus:outline-black rounded-lg flex items-center'>
          <input required className='text-lg flex-1 focus:outline-none' type={hidden ? 'password' : 'text'} placeholder='password' />
          <div onClick={() => setHidden(!hidden)}>
            {
              hidden ?
                <AiOutlineEye size={25} /> :
                <AiOutlineEyeInvisible size={25} />
            }
          </div>
        </div>
        <button type='submit' className='w-full rounded-lg p-2 border border-blue-600 font-semibold text-white px-4 hover:underline bg-blue-600'>Login</button>
      </form>
    </>
  )
}

export default page