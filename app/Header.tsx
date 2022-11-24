'use client'

import Image from 'next/image'
import type { ImageLoaderProps } from 'next/image';
import Link from 'next/link'
import React from 'react'
import logo from "./../public/logo.png"
import { HiSearch } from "react-icons/hi";
import { AiOutlineBell } from "react-icons/ai"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'

type Props = {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Header = (props: Props) => {

  const [user, loading] = useAuthState(auth)

  return (
    <header className='bg-white h-14 border-b shadow'>
      <div className='flex flex-row justify-between max-w-[1240px] m-auto h-full p-1'>
        <div className="flex flex-row h-full gap-3">
          <div className="flex h-full w-16  object-cover overflow-hidden">
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="h-full flex-row bg-white align-middle rounded-md border w-[420px] hidden md:flex">
            <input className='h-full pl-1 focus:outline-none rounded-md flex-1' placeholder='Search...' type="text" />
            <div className='flex items-center justify-center h-fullrounded-md w-14 hover:bg-blue-100'>
              <HiSearch className='hover:bg-blue-100 hover:text-blue-600' size={25} />
            </div>
          </div>
        </div>
        <div className="flex flex-row h-full gap-3">
          <Link href={"/search"}>
            <div className='flex items-center justify-center rounded-md h-full w-14 md:hidden hover:bg-blue-100'>
              <HiSearch className='hover:bg-blue-100 hover:text-blue-600' size={25} />
            </div>
          </Link>
          {
            !user && (
              <Link href={"/login"}>
                <button className='h-full border border-blue-600 font-semibold text-blue-600 rounded-md px-4 hover:underline hover:text-white hover:bg-blue-600'>Login</button>
              </Link>
            )
          }
          {
            user && (
              <>
                <Link href={"/new"}>
                  <button className='h-full border border-blue-600 font-semibold text-blue-600 rounded-md px-4 hover:underline hover:text-white hover:bg-blue-600 hidden md:block'>Create Post</button>
                </Link>
                <Link href={"/notifications"}>
                  <div className='flex items-center justify-center rounded-md h-full w-14 hover:bg-blue-100'>
                    <AiOutlineBell className='hover:bg-blue-100 hover:text-blue-600' size={25} />
                  </div>
                </Link>
                <Menu as="div" className="relative inline-block text-left">
                  <div className='w-12'>
                    <Menu.Button className="inline-flex w-full justify-center rounded-full object-cover overflow-hidden border hover:bg-blue-100 hover:ring-4 border-gray-300 bg-white shadow-sm focus:outline-none">
                      {/* FIXME: Find solution for this error */}
                      <Image src={user?.photoURL} alt={"user photo"} width={48} height={48} />
                      {/* <img src={user.photoURL} alt="" srcset="" /> */}
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 p-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/[user_name]"}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              <h3 className='font-semibold'>{user.displayName}</h3>
                              <p>[user_name]</p>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Dashboard
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/new"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Create Post
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Bookmarks
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/settings"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={() => auth.signOut()}
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Sign Out
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            )
          }
        </div>
      </div>
    </header>
  )
}

export default Header