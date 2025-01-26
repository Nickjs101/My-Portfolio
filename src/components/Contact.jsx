import React from 'react'

export default function Contact() {
    return (
        <div id='Contact' className='bg-secondary-color max-w-[1200px] mx-auto px-5 py-24 md:py-20 '>
            <div className='text-center'>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Contact Me</h2>
                <div className="h-1 w-20 mx-auto rounded-full" style={{
                    backgroundColor: 'var(--button-bg)'
                }}></div>
            </div>

            <div className='card max-w-[800px] mx-auto'>
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
                                        className='button w-full p-4 mt-2 text-lg font-semibold rounded-md'
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