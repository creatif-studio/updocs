import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

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

function Blog() {
  const { siteConfig } = useDocusaurusContext();

  const imageBlog = [
    '/img/blog-image/ales.jpg',
    '/img/blog-image/douglas.jpg',
    '/img/blog-image/hans-vivek.jpg',
    '/img/blog-image/marvin-meyer.jpg',
    '/img/blog-image/stefano-bazzoli.jpg',
    '/img/blog-image/thisisengineering.jpg',
    '/img/blog-image/yassine-khalfalli.jpg',
    '/img/blog-image/neom.jpg',
  ];

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="container flex flex-col justify-center">
        <section className="py-10 text-center">
          <div className="flex flex-col items-center">
            <Heading as="h1" className="hero__title text-black font-bold">
              Keep updating news about us
            </Heading>
            <p className="hero__subtitle text-[#545454] text-base w-full md:w-1/2 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-center items-center gap-5 mt-7">
            <input
              type="text"
              className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your email"
            />
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Subscribe
            </button>
          </div>
        </section>

        <section className="text-left flex flex-col lg:flex-row gap-14">
          <div className="flex-none">
            <img
              src="/img/blog-image/glenn-carstens.jpg"
              alt="blog1"
              className="rounded-2xl object-cover w-full h-full lg:w-[731px] lg:h-[388px]"
            />
            <div>
              <span className="text-[#4D4EF1]">12, Oct 2023</span>
              <h2 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h2>
              <p className="line-clamp-2 w-full md:w-[513px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-5">
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/img/blog-image/alex-knight.jpg"
                alt="blog1"
                className="max-w-[186px] max-h-[164px] rounded-2xl object-cover"
              />
              <div>
                <span className="text-[#4D4EF1] text-xs">12, Oct 2023</span>
                <h2 className="text-base font-semibold m-0">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className="line-clamp-2 text-sm m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="m-0 text-lg font-semibold mt-2">Read More</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/img/blog-image/alexandre.jpg"
                alt="blog1"
                className="max-w-[186px] max-h-[164px] rounded-2xl object-cover"
              />
              <div>
                <span className="text-[#4D4EF1] text-xs">12, Oct 2023</span>
                <h2 className="text-base font-semibold m-0">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className="line-clamp-2 text-sm m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="m-0 text-lg font-semibold mt-2">Read More</p>
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <img
                src="/img/blog-image/ilya-pavlov.jpg"
                alt="blog1"
                className="max-w-[186px] max-h-[164px] rounded-2xl object-cover"
              />
              <div>
                <span className="text-[#4D4EF1] text-xs">12, Oct 2023</span>
                <h2 className="text-base font-semibold m-0">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p className="line-clamp-2 text-sm m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="m-0 text-lg font-semibold mt-2">Read More</p>
              </div>
            </div>
          </div>
        </section>

        <section className='my-10'>
          <h2 className="text-2xl font-semibold mb-8">All Blog</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {imageBlog.map((itemImage, i) => (
              <div key={i}>
                <img
                  src={itemImage}
                  alt="blog"
                  className="w-full md:max-w-[295px] max-h-[177px] rounded-2xl object-cover"
                />
                <div>
                  <h2 className="text-base font-semibold w-full md:w-[210px]">
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
          <section>
            <div className="hidden md:block w-full">
              <div className="flex flex-row justify-between">
                <PrevButton />
                <ul className="pagination">
                  <li className="pagination__item disabled">
                    <a className="pagination__link" href="#url">
                      &laquo;
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#url">
                      1
                    </a>
                  </li>
                  <li className="pagination__item pagination__item--active">
                    <a className="pagination__link" href="#url">
                      2
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#url">
                      3
                    </a>
                  </li>
                  <li className="pagination__item">
                    <span>...</span>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#url">
                      &raquo;
                    </a>
                  </li>
                </ul>
                <NextButton />
              </div>
            </div>
            <div className="block md:hidden w-full">
              <div className="flex flex-col items-center justify-center">
                <ul className="pagination">
                  <li className="pagination__item disabled">
                    <a className="pagination__link" href="#url">
                      &laquo;
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#url">
                      1
                    </a>
                  </li>
                  <li className="pagination__item pagination__item--active">
                    <a className="pagination__link" href="#url">
                      2
                    </a>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#url">
                      3
                    </a>
                  </li>
                  <li className="pagination__item">
                    <span>...</span>
                  </li>
                  <li className="pagination__item">
                    <a className="pagination__link" href="#url">
                      &raquo;
                    </a>
                  </li>
                </ul>
                <div className="flex flex-row justify-between w-full">
                  <PrevButton />
                  <NextButton />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
}

export default Blog;
