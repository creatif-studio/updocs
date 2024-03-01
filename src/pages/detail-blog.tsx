import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
import { IoSend } from 'react-icons/io5';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

function PrevButton() {
  return (
    <button className="bg-white border-1 border-gray-300 text-gray-700 rounded-xl h-9 border-2 px-5 flex items-center gap-2 ">
      <GrLinkPrevious />
      <span>Previous</span>
    </button>
  );
}
function NextButton() {
  return (
    <button className="bg-white border-1 border-gray-300 text-gray-700 rounded-xl h-9 border-2 px-5 flex items-center gap-2">
      <span>Next</span>
      <GrLinkNext />
    </button>
  );
}

function DetailBlog() {
  const { siteConfig } = useDocusaurusContext();

  const imageBlog = [
    '/img/blog-image/ales.jpg',
    '/img/blog-image/douglas.jpg',
    '/img/blog-image/hans-vivek.jpg',
    '/img/blog-image/marvin-meyer.jpg',
  ];

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="container flex flex-col justify-center font-poppins py-16">
        <section className="py-16">
          <h1 className="font-bold text-5xl font-plusJakartaSans">
            Technology Innovations: Case Studies of Leading IT Companies
          </h1>
          <div className="flex flex-row gap-3 items-center mt-5">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src="/img/testimoni/closeup.jpg"
              alt="profile image"
            />
            <div>
              <h5 className="font-semibold text-lg mb-0 font-poppins">
                Courtney Henry
              </h5>
              <p className="text-[#808080] text-base mb-0 font-poppins">
                12, August 2023
              </p>
            </div>
          </div>
          <img
            className="w-full mt-5 rounded-lg object-cover h-[546px]"
            src="/img/blog-image/alex-knight.jpg"
            alt="photo"
          />
        </section>

        <section className="font-poppins text-base">
          <p>
            In the ever-evolving world of technology, innovation is the driving
            force behind progress. Leading IT companies are at the forefront of
            this innovation, constantly pushing boundaries and changing the way
            we live, work, and connect. In this blog, we'll delve into some case
            studies of prominent IT companies that have set new standards
            through their innovations.
          </p>
        </section>

        <section>
          <h3 className="font-bold text-2xl">Hot news for you</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {imageBlog.map((itemImage, i) => (
              <div key={i}>
                <img
                  src={itemImage}
                  alt="blog"
                  className="w-full md:max-w-[295px] max-h-[177px] rounded-2xl object-cover"
                />
                <div className="font-plusJakartaSans">
                  <h2 className="text-base font-semibold w-full md:w-[210px] mb-2">
                    Lorem ipsum dolor sit amet consectetur
                  </h2>
                  <p className="line-clamp-2 text-xs m-0 w-full md:w-[210px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="text-xs font-semibold mt-2 text-[#4D4EF1]">
                    Read More
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Comments (100)</h2>
          <div className="flex flex-col xl:flex-row gap-3 mb-5">
            <input
              type="text"
              className="form-input rounded-full border border-solid border-[#D5D5D5] bg-[#F6F6F6] w-full h-[52px]"
            />
            <button className="w-full sm:w-auto text-white bg-gray-800 flex flex-row gap-3 items-center justify-center hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <span className="font-poppins font-medium">Send</span>
              <IoSend className="text-white h-6 w-6" />
            </button>
          </div>

          <div className='flex flex-col gap-5'>
          {Array.apply(null, Array(3)).map((x, i) => (
            <div className="flex flex-row gap-5 p-5 shadow-xl rounded-2xl" key={i}>
              <div>
                <p className="font-poppins text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="flex flex-row gap-3 items-center mt-5">
                  <img
                    className="w-9 h-9 rounded-full object-cover"
                    src="/img/testimoni/closeup.jpg"
                    alt="profile image"
                  />
                  <div>
                    <h5 className="font-semibold text-lg mb-0 font-poppins">
                      Theresa Webb
                    </h5>
                    <p className="text-[#808080] text-base mb-0 font-poppins">
                      2 minutes ago
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <PiDotsThreeOutlineVerticalFill className="text-[#868686] w-6 h-6" />
              </div>
            </div>
          ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default DetailBlog;
