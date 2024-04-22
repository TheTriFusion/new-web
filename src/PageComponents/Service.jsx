import React, { useLayoutEffect, useRef } from "react";
import NavbarPage from "./Navbar";
import FooterPage from "./Footer";
import gsap from "gsap";

const ServicePage = () => {
  const service = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const incoming = gsap.timeline();
      incoming.from("#service-box", {
        yPercent: "-100",
        duration: 1.5,
        delay: 0.5,
      });
    }, service);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section ref={service}>
        <div id="service-box">
          <article>
            <NavbarPage />
          </article>
          <article className="border-b border-black p-8">
            <div className="flex flex-col gap-4 justify-center items-center xxm:justify-start xxm:items-start">
              <h1 className="text-[4vw] font-serif font-semibold">
                WE’RE GOOD AT
              </h1>
              <p className="text-[2vw] font-serif font-medium">
                Designing digital products with an emphasis on
                <br />
                the user and visual design
              </p>
              <img
                src=""
                alt=""
                className="border border-black rounded-full w-[50vw] h-[25vh]  mx-8 xxm:w-[90vw] xxm:h-[35vh] "
              />
            </div>
          </article>
          <article className="border-b border-black my-8">
            <div className="m-8 text-center xxm:text-left">
              <h1 className="font-serif text-[4vw] font-bold">THE SERVICES</h1>
              <div className="flex gap-4 text-center xxm:text-left">
                <h1 className="font-serif text-[4vw] font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#103ce7] to-[#64e9ff]">
                  TRIFUSION{" "}
                </h1>
                <h1 className="font-serif text-[4vw] font-bold">OFFERS</h1>
              </div>
            </div>
            <section className="flex flex-col gap-10">
              <div className="bg-gray-100 h-max w-full flex gap-0 flex-col xxm:flex-row justify-center items-center p-8">
                <div className="w-[60vw] p-8">
                  <h1 className="text-[3vw] font-mono">
                    MOBILE APP DEVELOPMENT
                  </h1>
                  <p className="text-[2vw] p-8 text-wrap">
                    Cutting-edged app development solutions tailored to your
                    unique business needs. With our expertise in mobile
                    technology and user-centric design, we help businesses of
                    all sizes create innovative and engaging mobile applications
                    that drive success in today digital landscape.
                  </p>
                  <ul className="font-serif text-[2vw] p-4 list-disc list-inside">
                    <li>Native IOS App Development</li>
                    <li>Native Android App Development</li>
                  </ul>
                </div>
                <div className="w-[40vw] ">
                  <img
                    src="../Images/services-mobile-app-development.png"
                    alt=""
                    className="h-full shadow-xl shadow-black"
                  />
                </div>
              </div>
              {/* --- */}
              <div className="bg-gray-100 h-max w-full flex gap-0 flex-col xxm:flex-row justify-center items-center p-8">
                <div className="w-[60vw]  p-8">
                  <h1 className="text-[3vw] font-mono"> WEB DEVELOPMENT</h1>
                  <p className="text-[2vw] p-8 text-wrap">
                    Specialized in crafting exceptional web experiences tailored
                    to meet your unique business objectives. Our team of
                    experienced developers utilizes the latest technologies and
                    best practices to deliver highquality, responsive websites
                    that drive results.
                  </p>
                  <ul className="font-serif text-[2vw] p-4 list-disc list-inside">
                    <li>Custom Website Development</li>
                    <li>e-Commerce Store Development</li>
                    <li>Full-Stack Development</li>
                    <li>Responsive Web Apps</li>
                  </ul>
                </div>
                <div className="w-[40vw] ">
                  <img
                    src="../Images/img-services-web-development.jpg"
                    alt=""
                    className="h-full shadow-xl shadow-black"
                  />
                </div>
              </div>
              {/* --- */}
              <div className="bg-gray-100 h-max w-full flex gap-0 flex-col xxm:flex-row justify-center items-center p-8">
                <div className="w-[60vw] p-8">
                  <h1 className="text-[3vw] font-mono">UI / UX</h1>
                  <p className="text-[2vw] p-8 text-wrap">
                    UI/UX design is the catalyst behind the success of any web
                    or mobile app. We are with a knack of turning great ideas
                    into meaningful interactions. From the initial concept to
                    information architecture, visual identity, and UX design, we
                    offer a full range of design services.
                  </p>
                  <ul className="font-serif text-[2vw] p-4 list-disc list-inside">
                    <li>Responsive Web Design</li>
                    <li>UI Design</li>
                    <li>Mobile App Design</li>
                  </ul>
                </div>
                <div className="w-[40vw] ">
                  <img
                    src="../Images/img-services-ui-ux-design.png"
                    alt=""
                    className="h-full shadow-xl shadow-black"
                  />
                </div>
              </div>
              {/* --- */}
              <div className="bg-gray-100 h-max w-full flex gap-0 flex-col xxm:flex-row justify-center items-center p-8">
                <div className="w-[60vw] p-8">
                  <h1 className="text-[3vw] font-mono">DIGITAL MARKETING</h1>
                  <p className="text-[2vw] p-8 text-wrap">
                    Specialized in elevating your online presence through
                    strategic digital marketing. From SE O to social media, our
                    tailored solutions are designed to boost your brand
                    visibility and drive results
                  </p>
                  <ul className="font-serif text-[2vw] p-4 list-disc list-inside">
                    <li>Social Media Marketing</li>
                    <li>Influencer Marketing</li>
                    <li>Ad's Campaign</li>
                    <li>Content Creation</li>
                    <li>Corporate Videos</li>
                  </ul>
                </div>
                <div className="w-[40vw] ">
                  <img
                    src="../Images/img-services-ui-ux-design.png"
                    alt=""
                    className="h-full shadow-xl shadow-black"
                  />
                </div>
              </div>
              {/* --- */}
              <div className="bg-gray-100 h-max w-full flex gap-0 flex-col xxm:flex-row justify-center items-center p-8">
                <div className="w-[60vw]  p-8">
                  <h1 className="text-[3vw] font-mono">SALES & MARKETING</h1>
                  <p className="text-[2vw] p-8 text-wrap">
                    From lead generation to conversion optimization, we offer a
                    full suite of services tailored to meet your unique sales
                    and marketing needs.
                  </p>
                  <ul className="font-serif text-[2vw] p-4 list-disc list-inside">
                    <li>Field Marketing</li>
                    <li>Offline Campaigns</li>
                    <li>Market Strategy</li>
                  </ul>
                </div>
                <div className="w-[40vw] ">
                  <img
                    src="../Images/img-services-web-development.jpg"
                    alt=""
                    className="h-full shadow-xl shadow-black"
                  />
                </div>
              </div>
              {/* --- */}
              <div className="bg-gray-100 h-max w-full flex gap-0 flex-col xxm:flex-row justify-center items-center p-8">
                <div className="w-[60vw]  p-8">
                  <h1 className="text-[3vw] font-mono">BRANDING</h1>
                  <p className="text-[2vw] p-8 text-wrap">
                    From lead generation to conversion optimization, we offer a
                    full suite of services tailored to meet your unique sales
                    and marketing needs.
                  </p>
                  <ul className="font-serif text-[2vw] p-4 list-disc list-inside">
                    <li>Field Marketing</li>
                    <li>Offline Campaigns</li>
                    <li>Market Strategy</li>
                  </ul>
                </div>
                <div className="w-[40vw] border border-red-300">
                  <img
                    src="../Images/img-services-web-development.jpg"
                    alt=""
                    className="h-full shadow-xl shadow-black"
                  />
                </div>
              </div>
            </section>
          </article>
          <article>
            <FooterPage />
          </article>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
