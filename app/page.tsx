"use client"
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import AOS from 'aos';
import 'aos/dist/aos.css';

import React,{ useEffect, useState } from "react";

export default function App() {

const [nav,setNav] = useState(false)
const openNav = () => setNav(true);
const closeNav = () => setNav(false);

useEffect(()=>{
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

},[])

  return (
    <div className=" overflow-x-hidden">
     <div>
           {/* navbar */}
          <Nav openNav={openNav} nav={nav}/>
          <MobileNav nav={nav} closeNav={closeNav}/>
          {/* hero section */}
          <Hero/>
          <div className="relative z-[30]"> 
          <About/>
          <Services/>
          <Skills/>
          <Project/>
          <Testimonial/>
          <Blogs/>
          <Footer/>
           </div>
     </div>

    </div>
  );
}
