import React from 'react';
import { NavbarDesktop } from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';

export interface IMenuRoute {
  label: string;
  path: string
}

interface INavbar {
  route: IMenuRoute[];
}

const logo = [
  {
    name: '',
    img: '/logo1.svg',
    path: ''
  },
  {
    name: 'Setapp',
    img: '/logo2.svg',
    path: 'setapp'
  }
]

function Navbar({ route }: INavbar) {
  return (
    <div>
      <NavbarDesktop className="hidden" route={route} />
      <NavbarMobile className="block xl:hidden" route={route} />
    </div>
  )
}

export default Navbar