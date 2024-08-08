import React from 'react'
import aboutImg  from '../assets/about.jpg'

const About = () => {
    
  return (
    <div id='about' className='secondary-color max-w-[1200px] mx-auto my-[200px]'>
        <h2 className='text-4xl font-bold primary-color mx-6'>
            About Me
        </h2>
        <div className='md:grid md:grid-cols-2'>
            <div className='md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <p className='text-base text-justify lg:text-lg'>
                        I am <span className="primary-color font-bold"> Nick Joshua Montemayor</span>, an IT professional from Angeles City, Pampanga, with a passion for <span className='primary-color font-bold'>software development</span>, <span className='primary-color font-bold'>cybersecurity</span>, and <span className='primary-color font-bold'>innovative technology solutions</span>. 
                        With a strong foundation in programming and hands-on experience in developing a variety of projects, I am driven by the desire to create impactful and efficient technological solutions. My expertise spans multiple programming languages and technologies, 
                        including <span className='underline decoration-2 decoration-[#9fef00] primary-color'>C#</span>, <span className='underline decoration-2 decoration-[#9fef00] primary-color'>Python</span>, <span className='underline decoration-2 decoration-[#9fef00] primary-color'>Javascript</span>, and <span className='underline decoration-2 decoration-[#9fef00] primary-color'>SQL,</span> and I have successfully led and contributed to projects involving game development, AI chatbots, and mobile applications. 
                        In addition to my development skills, I excel in <span className='underline decoration-2 decoration-[#9fef00] primary-color'>troubleshooting</span> and <span className='underline decoration-2 decoration-[#9fef00] primary-color'>computer maintenance</span>, ensuring optimal performance and resolving technical issues efficiently. I am constantly seeking new challenges and opportunities to apply my skills in dynamic and growth-oriented tech environments.
                    </p>
                    
                    
                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0 shadow-md shadow-[#9fef00] mt-2 md:mt-0 border-[#9fef00] border-2' src={aboutImg} alt="About" width={300} height={300} />
        </div>
    </div>
  )
}

export default About