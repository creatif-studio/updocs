import React, { useState } from 'react';
import { IMenuRoute } from '@site/src/components/Navbar/Navbar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@site/src/components/ui/hover-card';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

export interface INavbarAllScreen {
  className: string;
  route: IMenuRoute[];
}

export const NavbarDesktop = ({
  className,
  route,
}: INavbarAllScreen): JSX.Element => {
  const { pathname } = useLocation();

  const [showMenuResource, setShowMenuResource] = useState(false);

  return (
    // <div className={className}>
    //   <ul
    //     className={`md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 opacity-0 transition-all ease-in duration-500 ${
    //       show ? 'top-20 opacity-100 z-[1] h-full' : 'top-[-400px] z-[-1]'
    //     }`}
    //   >
    //     {route.map((item) => (
    //       <li className="px-4 py-6 pl-7 md:py-0 bg-neutral-950 md:bg-transparent" key={item.label}>
    //         <a
    //           href="#"
    //           className="text-base hover:text-cyan-500 duration-500 text-white rounded md:bg-transparent md:text-neutral-950 dark:text-white md:dark:text-neutral-950"
    //         >
    //           {item.label}
    //         </a>
    //       </li>
    //     ))}

    //     <div className="flex md:hidden pl-7">
    //       <button className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
    //         Sign Up
    //       </button>
    //       <button className="text-white bg-neutral-950 hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:focus:ring-neutral-700">
    //         Sign In
    //       </button>
    //     </div>
    //   </ul>
    // </div>
    <nav
      className={`bg-white shadow md:flex items-center justify-between ${className} p-6`}
    >
      <div className="flex justify-between items-center">
        <img
          src="/logo1.svg"
          alt="Logo"
          width={0}
          height={0}
          className="w-20"
        />
        {/* <button
          type="button"
          onClick={() => setShow(!show)}
          className="inline-flex items-center border-[1px] p-3 w-15 h-15 justify-center text-sm text-gray-500 rounded-full border-black md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          {show ? <HiOutlineX size={25} /> : <HiMenu size={25} />}
        </button> */}
      </div>

      <ul
        className={`md:flex md:items-center md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 md:opacity-100 opacity-0`}
      >
        {route.map((item) => {
          if (item.label === 'Resource') {
            // <li
            //   className="bg-neutral-950 md:bg-transparent"
            //   key={item.label}
            // >
            //   <p
            //     // href={item.path}
            //     className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 ${
            //       pathname === item.path ? 'text-black' : 'text-[#7F7F7F]'
            //     } cursor-pointer px-4 py-6 pl-7 `}
            //     onMouseEnter={() => {
            //       setShowMenuResource(true);
            //     }}
            //     // onMouseLeave={() => {
            //     //   setShowMenuResource(false);
            //     // }}
            //   >
            //     {item.label}
            //   </p>
            // </li>
            return (
              <li key={item.label}>
                <HoverCard openDelay={0} closeDelay={200}>
                  <HoverCardTrigger asChild>
                    {/* <Button variant="link">@nextjs</Button> */}
                    <p
                      tabIndex={0}
                      role="button"
                      // href={item.path}
                      className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 ${
                        pathname === item.path ? 'text-black' : 'text-[#7F7F7F]'
                      } cursor-pointer px-4 pl-7 `}
                    >
                      {item.label}
                    </p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-screen px-[3.25rem] py-8 bg-white">
                    <div className="flex flex-col justify-center">
                      <div
                        className={`flex justify-evenly p-8 pointer-events-none h-fit`}
                      >
                        <div>
                          <h3 className="font-sans font-medium text-2xl mb-6">
                            Server
                          </h3>
                          <div className="flex flex-row gap-5">
                            <img
                              src="/products/setapp-light-transparent.png"
                              alt="Logo"
                              width={42}
                              height={42}
                              className="object-contain"
                            />
                            <div>
                              <h4 className="font-jakarta text-base font-bold">
                                Setapp
                              </h4>
                              <p className="font-sans text-[#545454] text-sm">
                                Server management
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-sans font-medium text-2xl mb-6">
                            Management
                          </h3>
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/taktik-light-transparent.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Taktik
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/bambu-light.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Bambu
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/monito-light-transparent.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Monito
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-sans font-medium text-2xl mb-6">
                            Education
                          </h3>
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/eduka-light.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Eduka
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/hashtag-light-transparent.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Hashtag
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-sans font-medium text-2xl mb-6">
                            Application
                          </h3>
                          <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/setapp-light-transparent.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Setapp
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/keepr-light.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Keepr
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5">
                              <img
                                src="/products/paraf-light.png"
                                alt="Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                              />
                              <div>
                                <h4 className="font-jakarta text-base font-bold">
                                  Paraf
                                </h4>
                                <p className="font-sans text-[#545454] text-sm">
                                  Server management
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="w-fit self-center text-white bg-neutral-950 hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-700 font-medium rounded-full text-sm px-6 py-3 text-center me-2 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:focus:ring-neutral-700">
                        View all product
                      </button>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                {/* <p
                  tabIndex={0}
                  role="button"
                  // href={item.path}
                  className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 ${
                    pathname === item.path ? 'text-black' : 'text-[#7F7F7F]'
                  } cursor-pointer px-4 pl-7 `}
                >
                  {item.label}
                </p>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] card card-compact w-screen p-2 shadow bg-white -translate-x-[40%]"
                >
                  <div
                    className={`flex justify-evenly p-8 pointer-events-none  w-[100vw] h-fit`}
                  >
                    <div>
                      <h3 className="font-sans font-medium text-2xl mb-6">Server</h3>
                      <div className="flex flex-row gap-5">
                        <Image
                          src="/products/setapp-light-transparent.png"
                          alt="Logo"
                          width={42}
                          height={42}
                          className="object-contain"
                        />
                        <div>
                          <h4 className="font-jakarta text-base font-bold">
                            Setapp
                          </h4>
                          <p className="font-sans text-[#545454] text-sm">
                            Server management
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-2xl mb-6">
                        Management
                      </h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/taktik-light-transparent.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Taktik
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/bambu-light.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Bambu
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/monito-light-transparent.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Monito
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-2xl mb-6">
                        Education
                      </h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/eduka-light.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Eduka
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/hashtag-light-transparent.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Hashtag
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans font-medium text-2xl mb-6">
                        Application
                      </h3>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/setapp-light-transparent.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Setapp
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/keepr-light.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Keepr
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5">
                          <Image
                            src="/products/paraf-light.png"
                            alt="Logo"
                            width={42}
                            height={42}
                            className="object-contain"
                          />
                          <div>
                            <h4 className="font-jakarta text-base font-bold">
                              Paraf
                            </h4>
                            <p className="font-sans text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </li>
            );
          }

          return (
            <li
              className="px-4 py-6 pl-7 md:py-0 bg-neutral-950 md:bg-transparent"
              key={item.label}
            >
              <Link
                href={item.path}
                className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 ${
                  pathname === item.path ? 'text-black' : 'text-[#7F7F7F]'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
        {/* <li className="dropdown dropdown-open px-4 py-6 pl-7 md:py-0 bg-neutral-950 md:bg-transparent">
          <div tabIndex={0} role="button">
            Click
          </div>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[100vw] flex flex-row"
          >
            <div>
              <h4 className='font-sans font-normal text-2xl'>Server</h4>
              <div className='flex flex-row'>
                
              </div>
            </div>
          </div>
        </li> */}
      </ul>
      <div className="hidden md:flex md:items-center">
        <button className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Sign Up
        </button>
        <button className="text-white bg-neutral-950 hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:focus:ring-neutral-700">
          Sign In
        </button>
      </div>
    </nav>
  );
};
