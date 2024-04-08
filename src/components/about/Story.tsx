import React from "react";

const Story = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl ">
            Our
            <span className="ml-2 text-blue-600">Story</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 ">
            How we started, where we are now and where we are going.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mt-10">
          <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

          <div className="absolute inset-0 w-full h-full">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <a
                className="inline-flex justify-center items-center gap-x-1.5 text-center text-sm bg-white text-gray-800 hover:text-gray-600 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 "
                href="#"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                </svg>
                Play the overview
              </a>
            </div>
          </div>

          <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg ">
            <div className="w-48 h-48 bg-white rounded-lg "></div>
          </div>

          <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
            <div className="w-48 h-48 bg-white rounded-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
