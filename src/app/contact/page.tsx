import React from "react";
import { BsCalendar4 } from "react-icons/bs";

const Page = () => {
  return (
    <div className="px-4 py-10 mx-auto mb-8 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
      <div className="max-w-2xl mx-auto lg:max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 ">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>

        <div className="grid items-center gap-6 mt-12 lg:grid-cols-2 lg:gap-16">
          {/* <!-- Card --> */}
          <div className="flex flex-col p-4 border rounded-xl sm:p-6 lg:p-8 ">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
              Fill in the form
            </h2>

            <form>
              <div className="grid gap-4">
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="block w-full px-4 py-3 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows={4}
                    className="block w-full px-4 py-3 text-sm border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 "
                    placeholder="Details"
                  ></textarea>
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="grid mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white transition bg-blue-600 border border-transparent rounded-md gap-x-3 hover:bg-blue-700 lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white "
                >
                  Send inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          {/* <!-- End Card --> */}

          <div className="divide-y divide-gray-200 ">
            {/* <!-- Icon Block --> */}
            <div className="flex py-6 gap-x-7">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-800 ">Help center</h3>
                <p className="mt-1 text-sm text-gray-500">
                  our Help center has answers to your most common questions.
                </p>
                <a
                  className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 "
                  href="#"
                >
                  Visit Help center
                  <svg
                    className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex py-6 gap-x-7">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-800 ">FAQ</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Search our FAQ for answers to anything you might ask.
                </p>
                <a
                  className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 "
                  href="#"
                >
                  Visit FAQ
                  <svg
                    className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex py-6 gap-x-7">
              <BsCalendar4 className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 " />
              <div>
                <h3 className="font-semibold text-gray-800 ">Book a meeting</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Book a meeting with us to discuss your needs.
                </p>
                <a
                  className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 "
                  href="#"
                >
                  Book a meeting
                  <svg
                    className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex py-6 gap-x-7">
              <svg
                className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-800 ">
                  Contact us by email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  If you wish to write us an email instead please use
                </p>
                <a
                  className="inline-flex items-center mt-2 text-sm font-medium text-gray-600 gap-x-2 hover:text-gray-800 "
                  href="#"
                >
                  hello@insightcaptin.com
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
