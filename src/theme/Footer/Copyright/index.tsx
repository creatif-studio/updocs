import React from 'react';
import type {Props} from '@theme/Footer/Copyright';

export default function FooterCopyright({copyright}: Props): JSX.Element {
  return (
    // <div
    //   className="footer__copyright"
    //   // Developer provided the HTML, so assume it's safe.
    //   // eslint-disable-next-line react/no-danger
    //   dangerouslySetInnerHTML={{__html: copyright}}
    // />
    <div className="flex flex-row justify-center md:justify-between text-[#3F3F3F] w-full">
      <h5 className='text-base font-normal'>©2023 Bina. All rights reserved <span className='inline-block md:hidden'>Created by Creatif Studio</span></h5>
      <h5 className='hidden md:block text-base font-normal'>Created by Creatif Studio</h5>
    </div>
  );
}
