import React from 'react'
import heroimage from '../assets/Profilepic.png'
import resume from '../assets/NICK_JOSHUA_MONTEMAYOR_RESUME.pdf'
import {TypeAnimation} from 'react-type-animation'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Hero = () => {
    const gotoSection = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        const navbarHeight = document.querySelector('.sticky').offsetHeight; // get the navbar height
        window.scrollTo({
          top: section.offsetTop - navbarHeight, // adjust the scroll position
          behavior: 'smooth',
        });
    }
    //
  return (
    <div id='Home' className='bg-secondary-color grid grid-cols-1 lg:grid-cols-3 lg:gap-8 max-w-[1200px]  md:h-auto lg:h-[50vh] mx-auto py-8 mt-0 md:mt-[50px]'>
        <div className='bg-gradient-to-r from-slate-900 to-slate-700 col-span-1 my-auto mx-auto h-auto w-[200px] sm:w-[250px] md:w-[400px] lg:w-[400px] rounded-[50%] shadow-xl'>
            <img className='rounded-[50%]' src={heroimage} alt='Hero Image'/>
        </div>
        <div className='col-span-2 px-5 my-auto'>
            <h1 className=' my-5 lg:my-0 text-white text-4xl sm:text-5xl lg:text-6xl font-bold'>
                <span className='primary-color text-xl md:text-3xl'>
                    I'm a
                </span> <br/>
                <TypeAnimation sequence={[
                    "Software Developer", 1000,
                    "IT", 1000,
                    "Cybersecurity Enthusiast", 1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}/>
            </h1>
            <p className='secondary-color sm:text-lg mt-5 lg:text-xl w-full'>
                Welcome to my professional portfolio.
            </p>
            <p className='secondary-color sm:text-lg lg:text-xl w-full'>
                Hi, I'm <span className='primary-color font-bold'>Nick Joshua Montemayor</span>. I specialize in IT Troubleshoorting & Maintenance, Software Development, and Cybersecurity. Explore my work and accomplishments below.
            </p>

            <div className='my-8 flex flex-row gap-2'>
                <a href="https://www.linkedin.com/in/nickjmont" target="_blank" rel="noopener noreferrer" class="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                    <svg y="0"xmlns="http://www.w3.org/2000/svg"x="0"width="100"viewBox="0 0 100 100"preserveAspectRatio="xMidYMid meet"height="100"class="w-8 h-8 shrink-0 fill-neutral-50">
                        <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                    </svg>
                    <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                        LinkedIn
                    </span>
                </a>
                <a href="https://github.com/Nickjs101"  target="_blank" rel="noopener noreferrer" class="group w-12 hover:w-44 h-12 hover:bg-slate-600 relative bg-slate-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" height="100" viewBox="0 0 496 512" preserveAspectRatio="xMidYMid meet" class="w-8 h-8 shrink-0 fill-neutral-50">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                    <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                        GitHub
                    </span>
                </a>
                <a href={resume} download class="group w-12 hover:w-44 h-12 hover:bg-lime-600 relative bg-lime-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" height="100" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" class="w-8 h-8 shrink-0 fill-neutral-50">
                        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z"/>
                    </svg>
                    <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                        Resume/CV
                    </span>
                </a>
                <a onClick={(e) => gotoSection(e, 'contact')} href="#" class="group w-12 hover:w-44 h-12 hover:bg-rose-600 relative bg-rose-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                    <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" height="100" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet" class="w-8 h-8 shrink-0 fill-neutral-50">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>

                    <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                        Contact Me
                    </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero