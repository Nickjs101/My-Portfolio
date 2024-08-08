import React from 'react'

const Contact = () => {
  return (
    <div className='bg-secondary-color max-w-[1200px] mx-auto p-5 md:py-[50px] my-0 md:my-[100px]' id='contact'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me
            </h2>
        </div>

        <div className='max-w-[800px] mx-auto'>
            <div className='mt-6 bg-fourth-color rounded-3xl'>
                <div className='p-6 md:p-10'>
                    <form action="https://getform.io/f/pagxqmdb" method='POST'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                            
                            <div >
                                <div className='mt-2.5 '>
                                    <input type="text" name="Name" id="" placeholder='Your Name' 
                                    className='bg-[#0b121f] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-[#9fef00]'/>
                                </div>
                            </div>

                            <div>
                                <div className='mt-2.5 '>
                                    <input type="email" name="Email" id="" placeholder='Your Email' 
                                    className='bg-[#0b121f] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-[#9fef00]'/>
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <div className='mt-2.5 '>
                                    <textarea  name="Message" id="" placeholder='Your Message' 
                                    className='bg-[#0b121f] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-[#9fef00]'rows="4"/>
                                </div>
                            </div>

                            <div className='sm:col-span-2'>
                                <div className='mt-2.5 '>
                                    <button type="submit" 
                                    className='text-xl w-full p-4 mt-2 font-semibold text-black bg-primary-color rounded-md'>
                                                    Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact