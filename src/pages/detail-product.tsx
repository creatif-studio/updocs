import Layout from '@theme/Layout';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IoPlaySharp } from 'react-icons/io5';
import { HiMiniSpeakerWave } from 'react-icons/hi2';
import { FaCheck } from 'react-icons/fa';

function CardManagement() {
  return (
    <div className="flex flex-col gap-5 shadow-lg rounded-lg p-5">
      <div className="rounded-full bg-black shadow-[#39A6EC] h-[52px] w-[52px] flex justify-center items-center">
        <HiMiniSpeakerWave className="text-white h-[32px] w-[32px]" />
      </div>
      <h3 className="mb-0">Server Management</h3>
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
function CardTestimoni() {
  return (
    <div className="shadow-xl p-5 rounded-2xl">
      <div className="flex flex-row gap-5 items-center">
        <div className="w-[75px] h-[75px] rounded-full">
          <img
            src="/img/testimoni/closeup.jpg"
            alt="testimoni-close-up"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div>
          <h3 className="m-0">Jane Cooper</h3>
          <p className="m-0">
            Software developer at <span className="text-[#4E4FEB]">MAGIKA</span>
          </p>
        </div>
      </div>
      <p className="m-0 mt-5">
        This team knows their stuff. I'm grateful for their guidance. The
        expertise and knowledge demonstrated by this team were invaluable to me.
      </p>
    </div>
  );
}

function DetailProduct() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className='overflow-x-hidden'>
        <div className="hidden xl:block relative">
          <img
            src="/img/detail-product1.svg"
            alt="Image Promo"
            className="w-[726.5px] max-w-max absolute left-[65%]"
          />
        </div>
        <div className="container mt-5">
          <section className="flex flex-col xl:flex-row xl:items-center mt-28 gap-12">
            <div className="flex-1 w-full md:w-1/2 lg:w-full flex flex-col gap-5">
              <h1 className="font-semibold font-poppins text-[3.25rem] leading-[4.875rem] w-fit md:w-[577px]">
                Easiest way to deploy your application
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className="flex flex-row gap-5">
                <button className="bg-black text-white rounded-md py-3 px-8">
                  Get Started
                </button>
                <button className="rounded-md border-0 bg-white py-3 px-8">
                  <div className="flex flex-row gap-2 items-center">
                    <div className="rounded-full p-2 bg-[#4E4FEB] bg-opacity-10">
                      <IoPlaySharp />
                    </div>
                    <p className="m-0">How It Work</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="/img/detail-product1-cut.svg"
                alt="Image Promo"
                className="md:w-[726.5px] lg:max-w-max xl:hidden"
              />
            </div>
          </section>

          <section className="pt-20 xl:pt-40 pb-20 flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-none">
              <div className="rounded-xl lg:w-[505px] lg:h-[486px]">
                <img
                  src="/img/detail-product2.png"
                  alt="Image Promo"
                  className="object-cover w-full h-auto lg:h-full"
                />
              </div>
            </div>
            <div className="flex-1 grow">
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <button className="bg-black text-white rounded-md py-3 px-8">
                Get Started
              </button>
            </div>
          </section>

          <section className="py-20">
            <h1 className="w-full md:w-1/2 mx-auto text-center mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
              {Array.apply(null, Array(6)).map((_, i) => (
                <CardManagement key={i} />
              ))}
            </div>
          </section>

          <section className="my-16">
            <h1 className="w-full md:w-1/3 mx-auto text-center mb-10">
              Affordable plan for every developer
            </h1>
            <div className="flex flex-col xl:flex-row gap-10 justify-between">
              <div className="shadow-2xl rounded-lg p-8">
                <h1 className="text-center font-semibold text-5xl">FREE</h1>
                <h4 className="text-center font-semibold text-xl mb-2">
                  Basic plan
                </h4>
                <p className="text-center text-gray-400">Billed annually</p>
                <ul className="list-none flex flex-col gap-5 text-gray-400 my-9">
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Access to all basic features
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Basic reporting and analytics
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Up to 10 individual users
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    20GB individual data each user
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Basic chat and email support
                  </li>
                </ul>
                <button className="bg-black text-white rounded-md py-3 px-8 w-full">
                  Get Started
                </button>
              </div>

              <div className="shadow-2xl rounded-lg p-8 scale-100 xl:scale-105 bg-black text-white">
                <h1 className="text-center font-semibold text-5xl">$20/mth</h1>
                <h4 className="text-center font-semibold text-xl mb-2">
                  Business plan
                </h4>
                <p className="text-center">Billed annually</p>
                <ul className="list-none flex flex-col gap-5 my-9">
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    200+ integrations 
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Advanced reporting and analytics
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Up to 20 individual users
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    40GB individual data each user
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Priority chat and email support
                  </li>
                </ul>
                <button className="text-black bg-white rounded-md py-3 px-8 w-full">
                  Get Started
                </button>
              </div>

              <div className="shadow-2xl rounded-lg p-8">
                <h1 className="text-center font-semibold text-5xl">FREE</h1>
                <h4 className="text-center font-semibold text-xl mb-2">
                  Basic plan
                </h4>
                <p className="text-center text-gray-400">Billed annually</p>
                <ul className="list-none flex flex-col gap-5 text-gray-400 my-9">
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Access to all basic features
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Basic reporting and analytics
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Up to 10 individual users
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    20GB individual data each user
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <div className="rounded-full bg-[#D1FADF] flex flex-row justify-center items-center w-6 h-6">
                      <FaCheck className="text-[#12B76A] w-3" />
                    </div>
                    Basic chat and email support
                  </li>
                </ul>
                <button className="bg-black text-white rounded-md py-3 px-8 w-full">
                  Get Started
                </button>
              </div>
            </div>
          </section>

          <section className="my-20">
            <div className="text-center">
              <p className="text-[#4E4FEB] m-0">
                Loved by thousand of developers
              </p>
              <h1>This is what people are saying about RILIS</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {Array.apply(null, Array(6)).map((_, i) => (
                <CardTestimoni key={i} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default DetailProduct;
