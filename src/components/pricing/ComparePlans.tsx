"use client";
import React, { useState } from "react";

const ComparePlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <div className="relative">
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-14 lg:py-20">
        <div className="max-w-2xl mx-auto mb-10 text-center lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight ">
            Compare plans
          </h2>
        </div>

        {/* <!-- Header --> */}
        <div className="sticky top-0 left-0 hidden py-2 lg:block bg-white/60 backdrop-blur-md ">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2">
              <span className="text-lg font-semibold text-gray-800 ">
                Features
              </span>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <span className="text-lg font-semibold text-gray-800 ">Free</span>
              <p className="mt-2 text-sm text-gray-500">Free forever</p>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <span className="text-lg font-semibold text-gray-800 ">
                Startup
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $39 per month billed annually
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <span className="text-lg font-semibold text-gray-800 ">Team</span>
              <p className="mt-2 text-sm text-gray-500">
                $89 per month billed annually
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <span className="text-lg font-semibold text-gray-800 ">
                Enterprise
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $149 per month billed annually
              </p>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Header --> */}

        {/* <!-- Section --> */}
        <div className="space-y-4 lg:space-y-0">
          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 ">
                General
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Number of seats
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <span className="text-sm text-gray-800 ">1</span>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <span className="text-sm text-gray-800 ">Up to 3</span>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <span className="text-sm text-gray-800 ">Up to 10</span>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <span className="text-sm text-gray-800 ">Unlimited</span>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Storage
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <span className="text-sm text-gray-800 ">15 GB</span>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <span className="text-sm text-gray-800 ">1 TB</span>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <span className="text-sm text-gray-800 ">15 TB</span>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <span className="text-sm text-gray-800 ">Unlimited</span>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Email sharing
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Any time, anywhere access
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}
        </div>
        {/* <!-- End Section --> */}

        {/* <!-- Section --> */}
        <div className="mt-6 space-y-4 lg:space-y-0">
          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 ">
                Financial data
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Open/High/Low/Close
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Price-volume difference indicator
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}
        </div>
        {/* <!-- End Section --> */}

        {/* <!-- Section --> */}
        <div className="mt-6 space-y-4 lg:space-y-0">
          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 ">
                On-chain data
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Network growth
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Average token age consumed
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Exchange flow
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Total ERC20 exchange funds flow
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Transaction volume
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Total circulation (beta)
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Velocity of tokens (beta)
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                ETH gas used
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}
        </div>
        {/* <!-- End Section --> */}

        {/* <!-- Section --> */}
        <div className="mt-6 space-y-4 lg:space-y-0">
          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 ">
                Social data
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Dev activity
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Topic search
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}

          {/* <!-- List --> */}
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            {/* <!-- Item --> */}
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="text-sm font-semibold text-gray-800 lg:font-normal ">
                Relative social dominance
              </span>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Free
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Startup
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Team
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 ">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="text-sm text-gray-800 lg:hidden md:col-span-2 ">
                  Enterprise
                </span>
                <svg
                  className="w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </div>
            </li>
            {/* <!-- End Item --> */}
          </ul>
          {/* <!-- End List --> */}
        </div>
        {/* <!-- End Section --> */}

        {/* <!-- Footer --> */}
        <div className="hidden mt-6 lg:block">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2"></div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <a
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 "
                href="#"
              >
                Get started
              </a>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <a
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 rounded-lg gap-x-3 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white "
                href="#"
              >
                Get started
              </a>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <a
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 "
                href="#"
              >
                Get started
              </a>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <a
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 "
                href="#"
              >
                Get started
              </a>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Footer --> */}

        {/* <!-- Button Group --> */}
        <div className="flex items-center justify-center mt-8 md:mt-12 gap-x-3">
          <p className="text-sm text-gray-500 ">Need a custom plan?</p>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 "
          >
            Contact us
          </button>
        </div>
        {/* <!-- End Button Group --> */}
      </div>
    </div>
  );
};

export default ComparePlans;
