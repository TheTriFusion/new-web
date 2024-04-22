import React, { useLayoutEffect, useRef } from 'react'
import NavbarPage from './Navbar'
import FooterPage from './Footer';
import gsap from 'gsap';

const AboutPage = () => {
    const about = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const incoming = gsap.timeline()
            incoming.from("#about-box",{
                yPercent: '-100',
                duration: 1.5,
                delay: 0.5
            })
        },about)
        return () => ctx.revert()
    },[])
  return (
    <>
        <section ref={about} >
        <div id='about-box'>
            <article>
            <NavbarPage/>
            </article>
            <article className='my-8 flex flex-col justify-center items-center'>
                <div className='w-full'>
                    <h1 className='font-serif text-[5vw] font-bold text-center'>ABOUT</h1>
                    <h1 className='font-serif text-[8vw] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]'>THE TRIFUSION</h1>
                </div>
                <div className='w-full flex gap-0 '>
                    <div className='w-[70vw]'>
                        <article className='text-wrap text-[2vw] p-8 text-justify'>
                        The TriFusion is a dynamic company at the forefront of innovation in
            web development, app development, sales, and digital marketing.
            Founded with a vision to revolutionize these industries, we combine
            cutting-edge technology with creative strategies to empower
            businesses of all sizes. Our team of skilled professionals is
            dedicated to delivering tailored solutions that drive growth and
            success. With a focus on quality, efficiency, and customer
            satisfaction, Tri Fusion strives to exceed expectations and make a
            lasting impact in the digital world.
                        </article>
                    </div>
                    <div className='w-[30vw]'>
                        <img src="../Images/footer-logo.png" alt="" />
                    </div>
                </div>
            </article>
            <article>
                <FooterPage/>
            </article>
            </div>
        </section>
    </>
  )
}

export default AboutPage