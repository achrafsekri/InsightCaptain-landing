import { routes } from "@/shared/routes";
import Link from "next/link";
import React from "react";
import { GiCrystalGrowth  } from "react-icons/gi";

const NavBar = () => {
  return (
    <header className="z-50 flex flex-wrap w-full py-3 mx-auto mt-2 text-sm max-w-7xl md:justify-start md:flex-nowrap md:py-0">
      <nav className="w-full px-4 md:px-6 lg:px-8" aria-label="Global">
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="flex items-center gap-x-3">
                <GiCrystalGrowth  className="w-10 h-10 text-theme-primary" />
                <span className="text-xl font-bold text-theme-primary">
                  Linanmoo
                </span>
              </span>
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-2 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-collapse-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-900 "
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-4 h-4 hs-collapse-open:hidden"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hidden w-4 h-4 hs-collapse-open:block"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-with-animation"
            className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
              <div className="flex flex-col mt-5 divide-y divide-gray-200 gap-x-0 divide-dashed md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid ">
                {routes.map((route: { path: string; lable: string }) => (
                  <Link
                    href={route.path}
                    key={route.path}
                    className="py-3 font-medium text-gray-600 hover:text-gray-500 md:py-6 "
                    aria-current="page"
                  >
                    {route.lable}
                  </Link>
                ))}

                {/* <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                  <button
                    type="button"
                    className="flex items-center w-full font-medium text-gray-600 hover:text-gray-400 "
                  >
                    Resources
                    <svg
                      className="ml-2 w-2.5 h-2.5 text-gray-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4  before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                    <div className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                      <div className="flex flex-col mx-1 md:mx-0">
                        <a
                          className="flex p-4 text-gray-800 rounded-md group gap-x-5 hover:bg-gray-100 "
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 ">
                              Support Docs
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 ">
                              Explore advice and explanations for all of
                              Preline&apos;s features.
                            </p>
                          </div>
                        </a>

                        <a
                          className="flex p-4 text-gray-800 rounded-md group gap-x-5 hover:bg-gray-100 "
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 ">
                              Integrations
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 ">
                              Discover the huge range of tools that Preline
                              integrates with.
                            </p>
                          </div>
                        </a>

                        <a
                          className="flex p-4 text-gray-800 rounded-md group gap-x-5 hover:bg-gray-100 "
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 ">
                              API Reference
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 ">
                              Build custom integrations with our first-className
                              API.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="flex flex-col mx-1 md:mx-0">
                        <a
                          className="flex p-4 text-gray-800 rounded-md group gap-x-5 hover:bg-gray-100 "
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 ">
                              Help Center
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 ">
                              Learn how to install, set up, and use Preline.
                            </p>
                          </div>
                        </a>

                        <a
                          className="flex p-4 text-gray-800 rounded-md group gap-x-5 hover:bg-gray-100 "
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 ">
                              Developer Hub
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 ">
                              Learn how to integrate or build on top of Preline.
                            </p>
                          </div>
                        </a>

                        <a
                          className="flex p-4 text-gray-800 rounded-md group gap-x-5 hover:bg-gray-100 "
                          href="#"
                        >
                          <svg
                            className="flex-shrink-0 w-6 h-6 mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                          </svg>
                          <div className="grow">
                            <p className="font-medium text-gray-800 ">
                              Community Forum
                            </p>
                            <p className="text-sm text-gray-500 group-hover:text-gray-800 ">
                              Learn, share, and connect with other Preline
                              users.
                            </p>
                          </div>
                        </a>
                      </div>

                      <div className="flex flex-col pt-4 mx-1 md:pt-0 md:mx-0">
                        <span className="text-sm font-semibold text-gray-800 uppercase ">
                          Customer stories
                        </span>

                        <a
                          className="flex items-center mt-4 group gap-x-5"
                          href="#"
                        >
                          <img
                            className="w-32 h-32 rounded-lg"
                            src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                            alt="Image Description"
                          />
                          <div className="grow">
                            <p className="text-gray-800 ">
                              Preline Projects has proved to be most efficient
                              cloud based project tracking and bug tracking
                              tool.
                            </p>
                            <p className="inline-flex items-center mt-3 text-sm font-semibold text-gray-800 gap-x-2 ">
                              Learn more
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
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

                <Link
                  className="py-3 font-medium text-gray-600 hover:text-gray-500 md:py-6 "
                  href="#"
                >
                  Login
                </Link>

                <div className="pt-3 md:pt-0">
                  <a
                    className="inline-flex justify-center items-center gap-x-2 text-center bg-blue-700 hover:bg-blue-600 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 "
                    href="#"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
