import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* <!-- Title --> */}
            <div className="max-w-2xl mt-5">
              <h1 className="block text-2xl font-semibold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200">
                Helping small businesses grow.
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className="max-w-3xl mt-5">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                InsightCaptin aims to help small businesses grow and thrive in
                the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
