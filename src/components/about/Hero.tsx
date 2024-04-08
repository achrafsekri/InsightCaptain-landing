import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10">
        <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* <!-- Title --> */}
            <div className="max-w-2xl mt-5">
              <h1 className="block text-2xl font-semibold text-gray-800 md:text-5xl lg:text-6xl ">
                Helping small businesses grow.
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className="max-w-3xl mt-5">
              <p className="text-lg text-gray-600 ">
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
