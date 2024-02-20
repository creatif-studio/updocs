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

function Navbar({ route }: INavbar) {
  return (
    <div>
      <NavbarDesktop className="hidden" route={route} />
      <NavbarMobile className="block md:hidden" route={route} />
    </div>
  )
}

export default Navbar