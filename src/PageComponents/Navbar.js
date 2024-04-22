import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavbarPage = () => {
  useEffect(() => {
    const alpha = window.innerWidth
    console.log(alpha)
  },[])
  return (
    <>
        <section>
        <div className='w-full flex justify-center items-center mt-8'>
           <div className='h-16 w-[90vw] bg-gradient-to-r from-[#103ce7] to-[#64e9ff] rounded-full flex flex-row gap-8 justify-center items-center'>
                <div className='text-[3vw] font-bold text-white'>
                  <h1>TRIFUSION</h1>
                </div>
                <div className='text-[2vw] text-center font-semibold text-white'>
                  <ul className='flex gap-8'>
                    <li className='w-[10vw]'><Link to='../Home'>HOME</Link></li>
                    <li className='w-[10vw]'><Link to='../Service'>SERVICES</Link></li>
                    <li className='w-[10vw]'><Link to='../About'>ABOUT</Link></li>
                    <li className='w-[10vw]'><Link to='../Contact'>CONTACT</Link></li>
                  </ul>
                </div>
            </div>
        </div>
           
        </section>
    </>
  )
}

export default NavbarPage