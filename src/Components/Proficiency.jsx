import React from 'react';


function Proficiency() {
  return (
    <div className="text-white sm:py-16" id='proficiency'>
      <div className=" mx-auto flex justify-between items-center md:flex-row flex-col">
        <div className="sm:w-2/5 w-4/5 mx-8">
          <h1 className="text-3xl font-semibold mb-6">Proficiency</h1>
          <div className="mb-8">
            <div className="mb-4">
              <p className="text-lg text-gray-600">Frontend/Design</p>
              <div className="bg-gray-300 h-4 rounded-full">
                <div className="bg-purple-500 h-4 rounded-full w-11/12"></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-lg text-gray-600">Backend</p>
              <div className="bg-gray-300 h-4 rounded-full">
                <div className="bg-purple-500 h-4 rounded-full w-10/12"></div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-600">Programming</p>
              <div className="bg-gray-300 h-4 rounded-full">
                <div className="bg-purple-500 h-4 rounded-full w-9/12"></div>
              </div>
            </div>
          </div>
          <div className='text-center'>
          <button className="bg-purple-600 text-white py-2 px-4 rounded-full font-medium text-sm">
            <a href="https://drive.google.com/file/d/1M8JcTj9GebFdUsgj_HVBfiYzjBigh7K1/view?usp=drive_link" alt="my resume">View Resume</a>
          </button>
          </div>
        </div>
        <div className="sm:w-3/5 ">
          <div className="sm:w-4/12 w-full sm:mx-auto mx-0">
          <lottie-player src="https://lottie.host/119efc5f-3e25-4aa1-9b1f-4d0fa27a5481/Bfm9QZ5yG7.json" background="transparent"  speed="1"  loop  autoplay></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proficiency;
