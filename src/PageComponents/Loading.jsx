import gsap from 'gsap';
import React, { useLayoutEffect } from 'react'
import CountUp from "react-countup";
import { Link } from 'react-router-dom';

const LoadingPage = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const transOne = gsap.timeline();
      transOne.from("#button",{
        opacity: 0,
        duration: 1.5,
        delay: 2
      })
    })
    return () => ctx.revert()
  },[])
  return (
    <>
        <section className='h-screen w-screen flex flex-col justify-center items-center gap-8'>
            <div className='text-[10vw] font-space text-center'>
          <CountUp start={0} end={100} duration={2} delay={0.5}/>%
        </div>
        <div>
            <button id='button' className='border border-black text-[2vw] p-4 rounded-3xl bg-gradient-to-r from-[#103ce7] to-[#64e9ff] font-black text-white'>
            <Link to='./Home'>
                BEGIN THE JOURNEY
                </Link>
            </button>
        </div>
        </section>
    </>
  )
}

export default LoadingPage