import React from 'react'

const Contact = () => {
  return (
    <div className=''>
             <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-30 w-[98vw] h-[40vw]"></div>
        <img
          src="src/assets/project2.jpg"
          className="max-h-[40vw] object-cover min-w-[98vw]"
        />
        <h1 className="absolute font-extrabold font-sans lg:px-[3vw] text-white text-2xl z-50 ">
      Contact Us</h1>
      <p className="absolute font-extrabold font-sans lg:px-[3vw] text-white text-6xl z-50 py-48">
         <br /></p>
      </div>
      <div className='flex items-center justify-center m-2'>
      <h1 className="m-2 font-extrabold  lg:px-[12vw]  text-blue-800 text-lg z-50">QUICK FOLLOW ON : <span>
      <a href="https://twitter.com/udc_ltd_rw?s=11&t=G_K-2j6VehuI_IK7huZdcA" target='_blank' className="text-gray-800 text-sm dark:text-gray-400 font-extrabold mt-2 ml-12 hover:underline">TWITTER</a>
      <a href="https://instagram.com/udc.ltd?igshid=NTc4MTIwNjQ2YQ==" target='_blank' className="text-gray-800 text-sm dark:text-gray-400 font-extrabold mt-2 ml-12 hover:underline ">INSTAGRAM</a> 
      <a href="https://facebook.com/" target='_blank' className="text-gray-800 text-sm dark:text-gray-400 font-extrabold mt-2 ml-12 hover:underline ">FACEBOOK</a></span></h1>
      <h1 className='text-blue-800 text-lg font-extrabold mr-32'>OR</h1>
               <h1 className='text-blue-800 text-lg font-extrabold p-4'> EMAIL US :
                <span className='text-gray-800 text-md dark:text-gray-400 font-extrabold mb-16'> universaldesignandcons@gmail.com</span></h1>
                </div>
                </div>
  )

}

export default Contact