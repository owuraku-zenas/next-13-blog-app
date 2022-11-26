'use client'

import React, { useEffect } from 'react'
import { AiFillApple, AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsMicrosoft, BsTwitter } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { useRouter } from 'next/navigation'

import { auth } from '../../utils/firebase'
import { GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {}

const page = (props: Props) => {

    const [user, loading] = useAuthState(auth)

    const router = useRouter();

    // Google Auth
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user)
        } catch (error) {
            console.log(error)
        }
    }

    // Twitter Auth
    const twitterProvider = new TwitterAuthProvider();
    const twitterLogin = async () => {
        try {
            const result = await signInWithPopup(auth, twitterProvider);
            console.log(result.user)
        } catch (error:any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (user) {
            router.back()
        }

    }, [user])

    return (
        <div className='h-full flex items-center justify-center w-full md:h-[800px]'>
            <div className="bg-white md:max-w-[650px] md:h-auto h-full w-full flex flex-col items-center justify-center md:justify-start p-10 text-center sm:px-20 md:shadow-xl md:rounded-lg">
                <h2 className='font-bold text-[40px]'>Welcome to Next Buzz</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
                <div className="py-6 w-full flex flex-col items-center gap-4">
                    {/* FIXME: Align Logos and Texts with Grid */}
                    <button className='flex gap-2 items-center w-full p-4 rounded-lg text-lg justify-center bg-black text-white hover:shadow-2xl ease-in-out duration-200'> <AiFillApple className='text-white' size={30} /> Continue with Apple</button>
                    <button className='flex gap-2 items-center w-full p-4 rounded-lg text-lg justify-center bg-[#333] text-white hover:shadow-2xl ease-in-out duration-200'> <BsGithub className='text-white' size={30} /> Continue with GitHub</button>
                    <button onClick={googleLogin} className='flex gap-2 items-center w-full p-4 rounded-lg text-lg justify-center bg-[#4285F4] text-white hover:shadow-2xl ease-in-out duration-200'> <FcGoogle size={30} /> Continue with Google</button>
                    <button onClick={twitterLogin} className='flex gap-2 items-center w-full p-4 rounded-lg text-lg justify-center bg-[#1DA1F2] text-white hover:shadow-2xl ease-in-out duration-200'> <BsTwitter className='text-white' size={30} /> Continue with Twitter</button>
                    <button className='flex gap-2 items-center border w-full p-4 rounded-lg text-lg justify-center hover:shadow-2xl ease-in-out duration-200'> <AiFillFacebook className='text-[#4267B2]' size={30} /> Continue with Facebook</button>
                    <button className='flex gap-2 items-center border w-full p-4 rounded-lg text-lg justify-center bg-white text-black hover:shadow-2xl ease-in-out duration-200'> <BsMicrosoft className='text-[#737373]' size={30} /> Continue with Microsoft</button>
                    <button className='flex gap-2 items-center border w-full p-4 rounded-lg text-lg justify-center bg-white text-black hover:shadow-2xl ease-in-out duration-200'> <GoMail size={30} /> Continue with Email</button>

                </div>
            </div>
        </div>
    )
}

export default page