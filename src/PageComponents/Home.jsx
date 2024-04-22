import React, { useLayoutEffect, useRef } from "react";
import NavbarPage from "./Navbar";
import FooterPage from "./Footer";
import '../App.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)
const HomePage = () => {
  const home = useRef(null);
 useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const incoming = gsap.timeline();
      incoming.from("#home-box", {
        yPercent: "-100",
        duration: 1.5,
        delay: 0.5,
      });
    }, home);
    return () => ctx.revert();
  }, []);
  const services = [
    "Web Development",
    "App Development",
    "UI/UX",
    "Sales & Marketing",
    "Digital Marketing",
    "Branding",
  ];
  return (
    <>
      
      <section className="h-max flex flex-col gap-2 justify-center items-center w-screen" ref={home}>
      <div id="home-box">
      <article>
      <NavbarPage />
      </article>
        <article className=" border-b border-black w-full flex flex-col gap-0 justify-center items-center">
          <div className="flex flex-row gap-8 text-[7vw] font-extrabold w-[80vw] mt-10">
            <h1>CRAFTING</h1>
            <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">VISION</h1>
          </div>
          <div className="flex flex-row gap-8 text-[7vw] font-extrabold w-[80vw] ">
            <h1>INTO</h1>
            <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">VICTORY</h1>
          </div>
          <div className="text-[2vw] w-[80vw] my-8 flex flex-col justify-start items-start font-mono xxm:flex-row xxm:justify-center xxm:items-center">
            <p className="w-[40vw]">
              WE HELP OUR CLIENTS TELL
              <br />
              THEIR STORIES AND MAKE
              <br />
              THEM UNFORGETTABLE
            </p>
            <button className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] w-48 rounded-full h-10 font-bold xxm:w-56 xxm:h-16">
            <Link to='../Contact'>
              CREATE ONE
              </Link>
            </button>
          </div>
        </article>
        <article id="slider-box" className="border-b border-black w-full text-[10vw] text-center">
          <h1 id="heading">THE TRIFUSION</h1>
        </article>
        <article className="border-b border-black">
          <div className="font-sans text-[4vw] font-semibold px-8">
            <h1>WHY TO CHOOSE</h1>
            <h1>THE TRIFUSION</h1>
          </div>
          <div className="flex flex-col font-medium text-[2vw] justify-center items-center px-8 xxm:flex-row">
            <p>
              Tri Fusion offers comprehensive digital services, including
              digital marketing, app development, and sales tactics. With years
              of experience, they prioritize oneon-one client meetings and
              engagements, ensuring accurate project execution. They are a
              reliable partner for start-ups and established companies in the
              digital sphere.
            </p>
            <img src="../Images/growth.png" alt="" className="w-[30vw]"/>
          </div>
        </article>
        <article className="border-b border-black w-full">
          <div className="font-sans text-[4vw] font-semibold px-8 text-center xxm:text-right" >
            <h1>WHAT YOU GET WITH</h1>
            <h1>THE TRIFUSION</h1>
          </div>
          <div className="flex font-medium text-[2vw] justify-center items-center px-8 flex-col gap-8 my-8 xxm:flex-row">
            <div className="border-4 border-red-400 w-[30vw] h-[50vh] text-center flex flex-col justify-center items-center rounded-3xl">
              <h1 className="font-bold">GROUND LEVEL MARKETING</h1>
              <p>
                Forge authentic connections with grassroots strategies. Immerse
                in local communities for lasting impact and meaningful
                relationships.
              </p>
            </div>
            <div className="border-4 border-green-400 w-[30vw] h-[50vh] text-center flex flex-col justify-center items-center rounded-3xl">
              <h1 className="font-bold">IT SOLUTIONS</h1>
              <p>
                Forge authentic connections with grassroots strategies. Immerse
                in local communities for lasting impact and meaningful
                relationships.
              </p>
            </div>
            <div className="border-4 border-blue-400 w-[30vw] h-[50vh] text-center flex flex-col justify-center items-center rounded-3xl">
              <h1 className="font-bold">TRAINING PROGRAMS</h1>
              <p>
                Empower teams with dynamic training. From sales to digital
                marketing, cultivate expertise for success in today's business
                landscape.
              </p>
            </div>
          </div>
        </article>
        <article className="p-8 w-full text-center border-b border-black">
          <div className="border border-black">
            <h1 className="text-[10vw] font-black tracking-widest text-gray-200 [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]">
              WE DO
            </h1>
          </div>
          <div>
            <ul className="text-start list-inside text-[3vw] font-serif font-medium py-8 flex flex-col gap-8 px-8">
              {services.map((items, index) => {
                return (
                  <>
                    <div>
                      <li key={index} className="p-2">
                        {items}
                      </li>
                      <div className="border border-black w-[30vw]"></div>
                    </div>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="text-[2vw] font-sans flex flex-col gap-0 justify-center items-center xxm:flex-row">
            <p className="w-[50vw] text-center xxm:text-left">
              We build engaging websites, brands & innovative e-commerce
              solutions.
            </p>
            <div className="w-[50vw]">
              <button className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] w-48 h-10 rounded-full  font-bold xxm:w-60 xxm:h-16">
              <Link to='../Service'>
                CHECHOUT
                </Link>
              </button>
            </div>
          </div>
        </article>
        <article className=" w-full p-8 ">
          <div className="flex flex-col gap-8">
            <h1 className="font-sans text-[4vw] font-semibold">OUR TRUST'S</h1>
            <p className="text-[2vw] w-[60vw]">
              We partner with companies of all sizes to solve complex business
              challenges and define their digital strategies and objectives that
              deliver results.
            </p>
          </div>
          <div className="flex flex-col gap-16 my-4">
            <div className="flex flex-col gap-16 justify-center items-center xxm:flex-row xxm:gap-32">
              <img
                className="w-[15vw] h-[15vh]"
                src="../Images/work-a2d.png"
                alt=""
              />
              <img
                className="w-[15vw] h-[15vh]"
                src="../Images/work-eats.png"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-16 justify-center items-center xxm:flex-row xxm:gap-32">
              <img
                className="w-[15vw] h-[15vh]"
                src="../Images/work-rukmanee.jpg"
                alt=""
              />
              <img
                className="w-[15vw] h-[15vh]"
                src="../Images/work-skits.jpg"
                alt=""
              />
            </div>
          </div>
        </article>
        <article className="bg-gradient-to-r from-[#103ce7] to-[#64e9ff] w-full h-[50vh] flex flex-col justify-center items-center">
          <div className="font-serif text-[6vw] text-center text-white font-medium">
            <h1> Crafting Digital</h1>
            <div className="flex gap-4 text-center justify-center">
              <h1 className="font-black" id="exp-char">Experience</h1>
              <h1>Since 2024</h1>
            </div>
          </div>
        </article>
        <article>
          <FooterPage/>
        </article>
        </div>
      </section>
    </>
  );
};

export default HomePage;
