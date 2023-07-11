import React from 'react'

const Contact = () => {
  return (
    <div className=''>
             <div className='grid justify-center items-center'>
        <div className="bg-gray-800 absolute z-50 opacity-40 w-[98vw] h-[40vw]"></div>
        <img
          src="src/assets/project2.jpg"
          className="max-h-[40vw] object-cover min-w-[98vw]"
        />
     </div>
     <div className='w-2/5 p-8 text-white space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
    <section className="justify-center items-center p-12 mx-auto bg-white rounded-md shadow-xl dark:bg-gray-800 mt-10">
     <h1 className="text-2xl pb-4 font-bold text-blue-700 capitalize dark:text-white">Contact Us</h1>
    <form>
       <div className='flex flex-wrap'>
        <div className='w-1/2 pb-2'>
           <label className="text-black text-lg dark:text-gray-200  font-bold">Firstname</label>
           <input  type="text" className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>
        <div className='w-1/2 pl-5'>
            <label className="text-black text-lg dark:text-gray-200 font-bold ">Lastname</label>
            <input  type="text" className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>
        <div className='w-1/2 pt-2'>
          <label className="text-black text-lg dark:text-gray-200  font-bold">Email Address</label>
          <input  type="email" className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>
        <div className='w-1/2 pl-5 pt-2'>
            <label className="text-black text-lg dark:text-gray-200 font-bold ">Phone Number</label>
            <input  type="number" className="block w-full px-4 py-3 mt-4 text-gray-700 font-none bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>
        <div className='w-2/2 w-full pt-4'>
          <label className="text-black text-lg dark:text-gray-200 font-bold ">Write your message here</label>
          <textarea className=" w-full h-[12rem] py- mt-4 text-gray-700 bg-white font-none border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
        </div>
        <div className="flex justify-center mt-6">
            <button className="px-10 py-5 leading-5 text-lg font-bold text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-[gold] focus:outline-none focus:bg-gray-600">Submit</button>
        </div>
     </div>
     </form>
     </section>
     </div>
     
      <div className='flex items-center justify-center m-4'>
      <h1 className="font-extrabold  lg:px-[12vw]  text-blue-800 text-lg z-50 ml-14">CALL US ON: 
      <span className='m-4 text-gray-800 text-md dark:text-gray-400 font-extrabold mb-16'>+250785540475</span>
      </h1>
      <h1 className="font-extrabold  lg:px-[2vw]  text-blue-800 text-lg z-50 mr-14">QUICK FOLLOW ON : <span>
      <a href="https://twitter.com/udc_ltd_rw?s=11&t=G_K-2j6VehuI_IK7huZdcA" target='_blank' className="text-gray-800 text-sm dark:text-gray-400 font-extrabold mt-2 ml-8 hover:underline">TWITTER</a>
      <a href="https://instagram.com/udc.ltd?igshid=NTc4MTIwNjQ2YQ==" target='_blank' className="text-gray-800 text-sm dark:text-gray-400 font-extrabold mt-2 ml-8 hover:underline ">INSTAGRAM</a> 
      <a href="https://facebook.com/" target='_blank' className="text-gray-800 text-sm dark:text-gray-400 font-extrabold mt-2 ml-8 hover:underline ">FACEBOOK</a></span></h1>
               <h1 className='text-blue-800 text-lg font-extrabold'> EMAIL US :
                <span className='text-gray-800 text-md dark:text-gray-400 font-extrabold'> universaldesignandcons@gmail.com</span></h1>
                </div>
                </div>
  )

}

export default Contact
