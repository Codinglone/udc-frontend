import React, { useState } from 'react'

function Apply() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];

      setSelectedFile(file);
    };
    const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {

    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="overflow-hidden container my-28 w-full lg:h-[135vh] mx-auto">
      <form className="max-w-lg mx-auto my-44 p-10 bg-blue-50 shadow-xl rounded">
        <h2 className="text-5xl mt-2 text-blue-700 font-semibold my-6 m-4">Apply Now</h2>

        <div className="mb-4 m-4">
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

        <div className="mb-4 m-4">
          <label htmlFor="name" className="block text-sm font-bold text-gray-600">
          Phone Number
          </label>
          <input
            type="number"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="250 789 321 876"
          />
        </div>

      
        <div className="mb-4 m-4">
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

      <div className="select-container m-4">
      <label htmlFor="selectInput" className="block my-2 text-md font-bold text-gray-600">Select Your Field:</label>
      <select id="selectInput" value={selectedOption} onChange={handleSelectChange} 
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <option value="">Select Your Field</option>
        <option value="option1">Civil Engineering</option>
        <option value="option2">Architectural Design</option>
        <option value="option3">Land Surveying</option>
        <option value="option3">Cost Estimation & Quality Surveying</option>
      </select>
      {selectedOption && (
        <p>Selected Option: {selectedOption}</p>
      )}
    </div>

        <div className='m-4'>
        <label htmlFor="" className="block my-2 text-md font-bold text-gray-600">
            Send Your Resume
          </label>
      <input type="file" onChange={handleFileChange} className='rounded-lg bg-white mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'/>
      {selectedFile && (
        <p>Selected File: {selectedFile.name}</p>
      )}
    </div>
        
        <div className="my-4 m-4">
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

        <div className="mt-8 text-center m-4">
              <button className="px-8 py-4 bg-blue-700 hover:from-blue-500 hover:to-yellow-300 text-white font-semibold rounded-md hover:bg-[gold] focus:outline-none focus:bg-gray-600">
                Apply
              </button>
            </div>
      </form>
    </div>
    </>
  );
};
export default Apply
