import React from 'react'

function Apply() {
  return (
    <>
      <div className="overflow-hidden mt-32 lg:h-[110vh] container mx-auto">
      <form className="max-w-md mx-auto my-24 p-10 bg-blue-50 shadow-xl rounded">
        <h2 className="text-5xl text-blue-700 font-semibold my-6">Apply Now</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold text-gray-600">
          Full Names
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Ray Bay"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold text-gray-600">
          Phone Number
          </label>
          <input
            type="number"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="+250 789 321 876"
          />
        </div>

      
        <div className="mb-4">
          <label htmlFor="email" className="block text-md font-bold text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 w-full border rounded-md"
            placeholder="myname@gmail.com"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-md font-bold text-gray-600">
            Cover Letter
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Cover Letter"
          ></textarea>
        </div>

        <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-blue-700 hover:from-blue-500 hover:to-yellow-300 text-white font-semibold rounded-md hover:bg-[gold] focus:outline-none focus:bg-gray-600">
                Apply
              </button>
            </div>
      </form>
    </div>
    </>
  )
}

export default Apply
