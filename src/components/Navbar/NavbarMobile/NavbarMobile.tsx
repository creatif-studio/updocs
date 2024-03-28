import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@site/src/components/ui/dialog';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import React, { useState } from 'react';
import { INavbarAllScreen } from '../NavbarDesktop/NavbarDesktop';
import { SlArrowRight } from 'react-icons/sl';
import { IoArrowBack } from 'react-icons/io5';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import { useThemeConfig } from '@docusaurus/theme-common';

type showResourceType = 'primary' | 'secondary' | 'resource';

const path = ['setapp'];

function NavbarMobile({ className, route }: INavbarAllScreen): JSX.Element {
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  // const [show, setShow] = useState(false);
  const [showResource, setShowResource] = useState<showResourceType>('primary');
  // const [showSecondaryMenu, setShowSecondaryMenu] = useState(false);

  const isPrimaryMenuEmpty = useThemeConfig();
  const secondaryMenu = useNavbarSecondaryMenu();

  React.useEffect(() => {
    onChangeMenu();
  }, [pathname]);

  React.useEffect(() => {
    setOpenModal(false);
  }, [pathname]);

  const onChangeMenu = () => {
    const find = path.find((item) => pathname.includes(item));
    if (find) {
      setShowResource('secondary');
    }
  };

  return (
    <Dialog onOpenChange={(val) => setOpenModal(val)} open={openModal}>
      <nav
        className={`bg-white flex items-center justify-between ${className} p-6`}
      >
        <img
          src="/logo1.svg"
          alt="Logo"
          width={112}
          height={50.91}
          className="w-20"
        />
        <DialogTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center border-[1px] p-3 w-15 h-15 justify-center text-sm text-gray-500 rounded-full border-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <HiMenu size={25} />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-screen w-screen h-screen overflow-auto bg-white">
          <div>
            <div
              className={`bg-white flex items-center justify-between ${className}`}
            >
              <img
                src="/logo1.svg"
                alt="Logo"
                width={112}
                height={50.91}
                className="w-20"
              />
              {showResource == 'resource' ? (
                <button
                  type="button"
                  onClick={() => {
                    // if (showResource == 'secondary') {
                    //   setShowResource('resource');
                    //   // setShowResource("primary")
                    // }
                    if (showResource == 'resource') {
                      setShowResource('primary');
                    }
                  }}
                  className="inline-flex items-center border-[1px] p-3 w-15 h-15 justify-center text-sm text-gray-500 rounded-full border-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open main menu</span>
                  <IoArrowBack size={25} />
                </button>
              ) : (
                <DialogClose asChild>
                  <button
                    type="button"
                    onClick={() => onChangeMenu()}
                    className="inline-flex items-center border-[1px] p-3 w-15 h-15 justify-center text-sm text-gray-500 rounded-full border-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  >
                    <span className="sr-only">Open main menu</span>
                    <HiOutlineX size={25} />
                  </button>
                </DialogClose>
              )}
            </div>

            <div className="space-x-2 mt-8">
              {showResource === 'resource' ? (
                <div className="flex flex-col gap-8 items-center ">
                  <div
                    className={`flex flex-col w-full h-fit gap-8`}
                  >
                    <div>
                      <h3 className="font-poppins font-medium text-2xl mb-5">
                        Server
                      </h3>
                      <Link to="/products/setapp" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                          <p className="font-poppins text-[#545454] text-sm">
                            Server management
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-2xl mb-5">
                        Management
                      </h3>
                      <div className="flex flex-col gap-3">
                        <Link to="/products/taktik" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                        <Link to="/products/bambu" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                        <Link to="/products/monito" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-2xl mb-5">
                        Education
                      </h3>
                      <div className="flex flex-col gap-3">
                        <Link to="/products/eduka" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                        <Link to="/products/hashtag" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-poppins font-medium text-2xl mb-5">
                        Application
                      </h3>
                      <div className="flex flex-col gap-3">
                        <Link to="/products/setapp" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                        <Link to="/products/keepr" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                        <Link to="/products/paraf" className="flex flex-row gap-5 text-black hover:text-[#7F7F7F] hover:no-underline">
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
                            <p className="font-poppins text-[#545454] text-sm">
                              Server management
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link href="/" className="w-fit self-center text-white bg-neutral-950 hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-700 font-medium rounded-full text-sm px-6 py-3 text-center me-2 hover:no-underline hover:text-neutral-200 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:focus:ring-neutral-700">
                    View all product
                  </Link>
                </div>
              ) : secondaryMenu.content ? (
                secondaryMenu.content
              )  :
              (
                <ul
                  className={`flex flex-col w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 opacity-100`}
                >
                  {route.map((item) => {
                    return (
                      <li
                        className="py-6 bg-transparent list-none"
                        key={item.label}
                        role="button"
                        onClick={() => setShowResource('resource')}
                      >
                        {item.label === 'Resource' ? (
                          <div className="flex items-center">
                            <p
                              className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 mb-0 ${
                                pathname === item.path
                                  ? 'text-black'
                                  : 'text-[#7F7F7F]'
                              }`}
                            >
                              {item.label}
                            </p>
                            <SlArrowRight
                              className={`w-6 h-6 stroke-[1rem] ml-2 ${
                                pathname === item.path
                                  ? 'text-black'
                                  : 'text-[#7F7F7F]'
                              }`}
                            />
                          </div>
                        ) : (
                          <Link
                            href={item.path}
                            className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 ${
                              pathname === item.path
                                ? 'text-black'
                                : 'text-[#7F7F7F]'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )
              }

              {/* <ul
                className={`flex flex-col w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 opacity-100`}
              >
                {route.map((item) => {
                  return (
                    <li
                      className=" py-6 bg-transparent"
                      key={item.label}
                      role="button"
                    >
                      {item.label === 'Resource' ? (
                        <div className="flex items-center">
                          <p
                            className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 ${
                              pathname === item.path
                                ? 'text-black'
                                : 'text-[#7F7F7F]'
                            }`}
                          >
                            {item.label}
                          </p>
                          <SlArrowRight
                            className={`w-6 h-6 stroke-[1rem] ml-2 ${
                              pathname === item.path
                                ? 'text-black'
                                : 'text-[#7F7F7F]'
                            }`}
                          />
                        </div>
                      ) : (
                        <Link
                          href={item.path}
                          className={`text-base font-medium hover:text-black duration-500 rounded  dark:text-white md:dark:text-neutral-950 ${
                            pathname === item.path
                              ? 'text-black'
                              : 'text-[#7F7F7F]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul> */}
            </div>
            {/* <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button type="button">Close</button>
            </DialogClose>
          </DialogFooter> */}
          </div>
        </DialogContent>
      </nav>
    </Dialog>
  );
}

export default NavbarMobile;
