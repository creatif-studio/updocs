import React from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import NavbarComp from '../../components/Navbar/Navbar'

export default function Navbar(): JSX.Element {

  const menuRoute = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Product',
      path: '/product',
    },
    {
      label: 'Resource',
      path: '/resource',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Contact Us',
      path: '/contact-us',
    },
  ];

  return (
    // <NavbarLayout>
    //   <NavbarContent />
    // </NavbarLayout>
    <NavbarComp route={menuRoute} />
  );
}
