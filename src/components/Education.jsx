import React from "react";
import gradpic from '../assets/gradpic.JPG'
import org from '../assets/org.jpg'
import comp from '../assets/comp.jpg'

const Education = () => {
    return (
        <div id='Education' className='text-white max-w-[1200px] mx-auto my-[200px]'>
            <h2 className='text-4xl font-bold primary-color mx-6'>
                Education
            </h2>
            <div className='md:grid md:grid-cols-2'>
                <div className='md:mt-0 text-left flex '>
                    <div className='my-auto mx-6'>
                        <p className='text-2xl md:text-3xl'>Bachelor of Science in Information Technology</p>  
                        <p className='text-md md:text-lg'>STI College-Angeles</p>
                        <p className='text-sm md:text-md'>2019 - 2023</p>
                        <ul className="list-inside list-disc">
                            <li>Graduated Magna Cum Laude</li>
                            <li>Competed in Huawei Cloud ICT competition.</li>
                            <li>Served as President of the ICT organization, Tech Matrix.  </li>
                        </ul>                   
                    </div>
                </div>
                <div className="relative h-[60vh] w-full my-[50px] px-[10px] lg:w-4/6 md:mx-auto">
                    <img className='absolute top-[-30px] left-2 w-auto h-2/5 bg-gray-200 rounded-xl border border-white shadow-2xl' src={comp} alt="About Image" width={300} height={300} />
                    <img className='absolute top-1/4 right-3 lg:right-0 w-auto h-3/5 z-10 bg-gray-300 rounded-xl border border-white shadow-2xl' src={gradpic} alt="About Image" width={300} height={300} />
                    <img className='absolute bottom-[-50px] lg:bottom-[-30px] left-2 lg:left-[-20px] w-auto h-2/5 bg-gray-400 rounded-xl border border-white shadow-2xl' src={org} alt="About Image" width={300} height={300} />
                </div>
            </div>
        </div>
    );
}

export default Education;