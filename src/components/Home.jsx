import React from 'react'
import hero from '../assets/hero.jpg'
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact'
import SocialLinks from './SocialLinks';
import { MdKeyboardArrowRight } from "react-icons/md";
function Home() {
  return <>
    <div name="home" className='h-screen w-full bg-gradient-to-b  from-black to-gray-800 '>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className=' flex flex-col justify-center h-full'>
                <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className=' text-gray-500 py-4 max-w-md'>
                    I have 2 years of Experience building and disigning software.
                    Curently , I love to work on web application using technologies like 
                    React, Tailwind, Next JS and GraphQl.
                </p>
                <div>
                    <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio 
                        <span className=' group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={22} className=' ml-2'/> 
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={hero} alt="MyPhoto" className= "rounded-2xl mx-auto w-2/3 md:w-full" />
          </div>
        </div>
    </div>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <SocialLinks/>
    </>
}

export default Home