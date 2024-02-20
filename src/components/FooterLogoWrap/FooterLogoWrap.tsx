import React from 'react';
import { ImFacebook, ImTwitter, ImLinkedin, ImYoutube } from 'react-icons/im';
import { AiFillInstagram } from "react-icons/ai";

function FooterLogoWrap(props) {
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full mb-6">
      <div className="flex flex-col gap-5 flex-1">
        <img src="/img/logo1.svg" alt="logo" className="w-28" />
        <p className='w-full sm:w-1/2'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
        <div className="flex flex-row gap-8">
          <ImFacebook className="w-6 h-6 text-[#272727]" />
          <ImTwitter className="w-6 h-6 text-[#272727]" />
          <AiFillInstagram className="w-6 h-6 text-[#272727]" />
          <ImLinkedin className="w-6 h-6 text-[#272727]" />
          <ImYoutube className="w-6 h-6 text-[#272727]" />
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default FooterLogoWrap;
