import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Grid --> */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="lg:col-span-7">
          {/* <!-- Grid --> */}
          <div className="grid items-center grid-cols-12 gap-2 sm:gap-6 lg:-translate-x-10">
            <div className="col-span-4">
              <Image
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-3">
              <Image
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-5">
              <img
                className="rounded-xl"
                src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                alt="Image Description"
              />
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Col --> */}

        <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            {/* <!-- Title --> */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl ">
                Our Mission
              </h2>
              <p className="text-gray-500">
                Our mission is to provide you with the tools and resources you
                need to build a successful relationship with your customers. We
                strive to make it easy for you to understand your
                customers&apos; needs so that you can provide them with the best
                possible service.
              </p>
            </div>
            {/* <!-- End Title --> */}
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default Mission;
