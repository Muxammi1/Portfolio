import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='heading'>MY <span className='text-[#008080]'>BLOG</span></h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
            <div>
                <div className='w-[100%] h-[400px] relative'>
                    <Image
                    src='/Blog3.jpg'
                    alt='blog'
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                     December 10,2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>By Muxxiii</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                            <p className='text-white'>Comments {2}</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next js Full Stack Development</p>
                </div>
            </div>
            <div>
                <div className='w-[100%] h-[400px] relative'>
                    <Image
                    src='/blog2.jpg'
                    alt='blog'
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                     December 10,2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>By Muxxiii</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                            <p className='text-white'>Comments {2}</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>React js Full Stack Development</p>
                </div>
            </div>
            <div>
                <div className='w-[100%] h-[400px] relative'>
                    <Image
                    src='/Blog1.jpg'
                    alt='blog'
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                     December 10,2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>By Muxxiii</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                            <p className='text-white'>Comments {3}</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>Next js Features</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Blogs