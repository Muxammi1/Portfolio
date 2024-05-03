import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'

const Hero = () => {
  return (
    <div className="flex h-[88vh] bg-[url('/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle/>
      <div className='w-[80%] grid-cols-2 mx-auto grid lg:grid-col-2 gap-[3rem] h-[100%] items-center'>
        <div>
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
          Hi,I'M  <span className='text-[#008080]'>MUZAMMIL</span>
        </h1>
        <TextEffect/>
        <p className='mt-[2rem] text-[18px] text-[#ffffff92]'>
         Muzammil Yasir here,I'm currently pursuing a Bachelor degree in Computer Science.My core interests are AI and cyber security.
        </p>
        <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6 '>
          <button className='px-[2rem] hover:bg-[#008080] transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
            <p>Download CV</p>
            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
          </button>

        </div>
        </div>
        <div data-aos='zoom-in' className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]' >
          <Image src="/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
        </div>
        

      </div>
    </div>
  )
}

export default Hero