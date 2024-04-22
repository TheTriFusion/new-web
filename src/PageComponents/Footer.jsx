import React from 'react'
import { Link } from 'react-router-dom'

const FooterPage = () => {
  return (
    <>
        <section>
            <article className="flex flex-col gap-8 w-full justify-center items-center">
          <div className="my-4 text-[3vw] px-8 font-sans text-start w-full">
            <p>
              We love crafting unforgettable digital <br/>experiences, brands and
              websites with<br/> people like you.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] w-[75vw] text-[3vw] rounded-3xl text-white font-medium p-8">
            <p>
              Let’s start with a conversation<br/> about how we can help You! Give <br/>us
              a call, we’re a nice bunch
            </p>
            <button className="bg-white rounded-3xl text-black w-56 font-serif font-normal">
            <Link to='../Contact'>
            Let’s Talk
            </Link>
            </button>
          </div>
          <div className="flex flex-col gap-8 justify-between xxm:flex-row">
            <div className="w-[50vw] h-[50vh]  flex justify-center items-center xxm:w-[20vw]">
              <img src="../Images/footer-logo.png" alt="" className='w-full h-full'/>
            </div>
            <div  className="w-[50vw] h-[50vh]  flex flex-col justify-center items-center xxm:w-[20vw]">
              <h1 className="text-center text-[2vw] font-serif">GET IN TOUCH</h1>
              <ul className=" flex flex-col gap-2 text-[1.5vw] font-sans ">
                <li>Sector-5, R.C. Vyas Colony
                        <br/>
                        Bhilwara, Rajasthan, 311001</li>
                <li>+91-6378122780 /<br/> +91-8005814384</li>
                <li>thetrifusion@gmail.com</li>
                <li>www.thetrifusion.com</li>
              </ul>
            </div>
            <div  className="w-[50vw] h-[50vh]  flex flex-col justify-center items-center xxm:w-[20vw]">
               <h1 className="text-center text-[2vw] font-serif">Important Links</h1>
                <ul className=" flex flex-col gap-2 text-[1.5vw] font-sans underline underline-offset-4">
                    
                        <a href="https://www.instagram.com/thetrifusion/">
                        <li>Instagram</li>
                        </a>
                    <a href="https://wa.me/6378133780">
                        <li>Whatsapp</li>
                        </a>
                        <a href="https://www.linkedin.com/in/the-trifusion-4660032b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <li>LinkedIn</li>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61557420276022">
                        <li>Facebook</li>
                        </a>
                </ul>
            </div>
            <div  className="w-[50vw] h-[50vh] flex-col flex justify-center items-center xxm:w-[20vw]">
              <h1 className="text-center text-[2vw] font-serif">Get to Us</h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7210.395256932822!2d74.6326986376564!3d25.36469220502349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2550919a8a7%3A0xb52d32f05198ba59!2sSector%205%2C%20R%20C%20Vyas%20Colony%2C%20Bhilwara%2C%20Rajasthan%20311001!5e0!3m2!1sen!2sin!4v1710324788989!5m2!1sen!2sin"
                  allowfullscreen=""
                  referrerpolicy="no-referrer-when-downgrade"
                  title="companyAddress"
                  className="w-full h-48 py-8 px-8"
                ></iframe>
            </div>
          </div>
        </article>
        </section>
    </>
  )
}

export default FooterPage