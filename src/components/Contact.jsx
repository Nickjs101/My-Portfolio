import React from 'react'

export default function Contact() {
    return (
        <div id='Contact' className='bg-secondary-color max-w-[1200px] mx-auto p-5 md:py-[50px] my-0 md:my-[100px]'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold leading-tight primary-color'>
                    Contact Me
                </h2>
            </div>

            <div className='max-w-[800px] mx-auto'>
                <div className='mt-6 card rounded-3xl'>
                    <div className='p-6 md:p-10'>
                        <form action="https://getform.io/f/pagxqmdb" method='POST'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                                <div>
                                    <div className='mt-2.5'>
                                        <input 
                                            type="text" 
                                            name="Name" 
                                            placeholder='Your Name'
                                            className='input w-full px-4 py-4 rounded-md focus:outline-none'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className='mt-2.5'>
                                        <input 
                                            type="email" 
                                            name="Email" 
                                            placeholder='Your Email'
                                            className='input w-full px-4 py-4 rounded-md focus:outline-none'
                                        />
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <div className='mt-2.5'>
                                        <textarea  
                                            name="Message" 
                                            placeholder='Your Message'
                                            className='input w-full px-4 py-4 rounded-md focus:outline-none'
                                            rows="4"
                                        />
                                    </div>
                                </div>

                                <div className='sm:col-span-2'>
                                    <button 
                                        type="submit"
                                        className='button w-full p-4 mt-2 font-semibold rounded-md'
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}