import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { IoIosArrowDown } from 'react-icons/io';

function ContactUs() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="container my-16">
        <section className="py-10 text-center">
          <div className="flex flex-col items-center">
            <Heading as="h1" className="font-jakarta text-[2.625rem] text-black font-bold">
              Contact Us
            </Heading>
            <p className="hero__subtitle text-[#545454] text-base w-full md:w-1/2 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </section>
        <section className="rounded-2xl shadow-2xl p-8 mx-auto flex flex-col gap-5 max-w-[800px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label className="block text-lg font-semibold">First name</label>
              <input
                type="text"
                placeholder="James Brone Junior"
                className="form-input border border-solid border-[#B6B6B6] rounded-lg h-12 px-4 py-3 w-full"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold">Last name</label>
              <input
                type="text"
                placeholder="James Brone Junior"
                className="form-input border border-solid border-[#B6B6B6] rounded-lg h-12 px-4 py-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label className="block text-lg font-semibold">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="James Brone Junior"
                className="form-input border border-solid border-[#B6B6B6] rounded-lg h-12 px-4 py-3 w-full"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-semibold">Email</label>
              <input
                type="email"
                placeholder="James Brone Junior"
                className="form-input border border-solid border-[#B6B6B6] rounded-lg h-12 px-4 py-3 w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold">Company</label>
            <select
              name="company"
              className="form-select border-[#B6B6B6] rounded-lg h-12 px-4 py-3 w-full row-start-1 col-start-1"
            >
              <option selected>Select Company</option>
              <option value="agency">Agency</option>
              <option value="agency1">Agency1</option>
              <option value="agency2">Agency2</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold">Country</label>
            <select
              name="company"
              className="form-select border-[#B6B6B6] rounded-lg h-12 px-4 py-3 w-full row-start-1 col-start-1"
            >
              <option value="indonesia">Indonesia</option>
              <option value="malaysia">Malaysia</option>
              <option value="thailand">Thailand</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold">Inquiry type</label>
            <select
              name="company"
              className="form-select border-[#B6B6B6] rounded-lg h-12 px-4 py-3 w-full row-start-1 col-start-1"
            >
              <option selected>Select</option>
              <option value="indonesia">Indonesia</option>
              <option value="malaysia">Malaysia</option>
              <option value="thailand">Thailand</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold">Message</label>
            <textarea
              placeholder="Type here"
              className="form-textarea resize-none border border-solid border-[#B6B6B6] rounded-lg h-[235px] px-4 py-3 w-full"
            />
          </div>
          <p>
            By submitting this form, you acknowledge and agree that HashiCorp
            will process your personal information in accordance with the{' '}
            <a href="#">Privacy Policy</a>
          </p>
          <button className="bg-black text-white rounded-full py-3 px-8 w-full cursor-pointer">
            Submit
          </button>
        </section>
      </main>
    </Layout>
  );
}

export default ContactUs;
