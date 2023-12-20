import React from 'react'

function Apply() {
  return (
    
      <div className="overflow-hidden mt-44 lg:h-[85vh] container mx-auto">
      <form className="max-w-md mx-auto p-10 bg-white shadow-lg rounded">
        <h2 className="text-2xl font-semibold mb-14">Contact Us</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 w-full border rounded-md"
            placeholder="myemail@example.com"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Your message..."
          ></textarea>
        </div>

        <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-300 to-blue-500 hover:from-blue-500 hover:to-yellow-300 text-white font-semibold rounded-md hover:bg-[gold] focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </div>
      </form>
    </div>
  
  )
}

export default Apply
