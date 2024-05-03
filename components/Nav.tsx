import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface props {
     nav: boolean;
     openNav:()=>void
}
const Nav = ({nav,openNav}:props) => {
  
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-black shadow-md'> 
     <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
      <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
        MU
      <span className='text-[#008080]'>XXIII</span>
      </h1>
      <div className='nav-link'>HOME</div>
      <div className='nav-link'>SERVICES</div>
      <div className='nav-link'>ABOUT</div>
      <div className='nav-link'>PROJECT</div>
      <div className='nav-link'>BLOG</div>
      <div className='nav-link'>CONTACT</div>
      <div onClick={openNav}>
         <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-[#008080]'/>
      </div> 
     </div>


    </div>
  )
}

export default Nav