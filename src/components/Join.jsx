import React from 'react'

function Join() {
  return (
    <div className="py-3">  
    <div className="container m-auto px-6  md:px-12 xl:px-6">
        <div className="max-w-6xl m-auto ">
          <div className='flex flex-wrap'>
              <div className="w-1/5">
              </div>
              <div className='w-3/5 p-2 text-white space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
      <section className=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-10">
      <h1 className="text-2xl font-bold text-indigo-900 capitalize dark:text-white">Apply Now</h1>
      <form>
         <div className='flex flex-wrap pt-8'>
          <div className='w-1/2'>
             <label className="text-black text-sm dark:text-gray-200">Firstname</label>
             <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 font-none bg-white border-2 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
          </div>
          <div className='w-1/2 pl-3'>
              <label className="text-black text-sm dark:text-gray-200">Lastname</label>
              <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 font-none bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
          </div>
          <div className='w-1/2 pt-2'>
            <label className="text-black text-sm dark:text-gray-200">Email Address</label>
            <input  type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 font-none bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
          </div>
          <div className='w-1/2 pl-3 pt-2'>
            <label className="text-black text-sm dark:text-gray-200">Location</label>
            <input  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 font-none bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
          </div>
          <div className='w-1/2 pt-2'>
            <label className="text-black text-sm dark:text-gray-200">Date of Birth</label>
            <input  type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 font-none bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
          </div>
          <div className='w-1/2 pl-3 pt-2'>
             <label className="text-black text-sm dark:text-gray-200">Sex</label>
              <div className="flex items-center pt-4">
                <input id="country-option-1" type="radio" name="sex" value="Female" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                 Female
                </label>
               <input id="country-option-1" type="radio" name="sex" value="Male" className="ml-4 h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
               <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                Male
               </label>
               <input id="country-option-1" type="radio" name="sex" value="prefer not to say" className="ml-4 h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
               <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                Prefer not to say
               </label>
          </div>
          </div>
          <div className='w-1/2 pt-2'>
             <label className="text-black text-sm dark:text-gray-200">Level of Education</label>
               <select className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                 <option className='text-xs font-none'>Undergraduate Level</option>
                 <option className='text-xs font-none'>Postgraduate Level</option>
                 <option className='text-xs font-none'>Bachelors Degree</option>
                 <option className='text-xs font-none'>Masters Degree</option>
              </select>
          </div>
          <div className='w-1/2 pl-3 pt-2'>
            <label className="text-black text-sm dark:text-gray-200">Course Interested in</label>
             <select className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
               <option className='font-none'>IOT</option>
               <option className='font-none'>Software Development</option>
             </select>
          </div>
          <div className='w-2/2 w-full pt-2'>
            <label className="text-black text-sm dark:text-gray-200">Add Bio</label>
            <textarea className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white font-none border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
          </div>
          <div className='w-2/2 w-full pt-2'>
             <label className="text-black text-sm dark:text-gray-200">Add Profile</label>
            <label htmlFor="dropzone-file" className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Upload your CV</h2>
              <p className="mt-2 text-gray-500 tracking-wide text-xs">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
         </div>
  
          <div className="flex justify-center mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-pink-500 focus:outline-none focus:bg-gray-600">Submit</button>
          </div>
        </form>
       </section>
      </div>
              <div className='w-1/5'></div>   
          </div>
  
        </div>
    </div>
   
  </div>


  )
}

export default Join