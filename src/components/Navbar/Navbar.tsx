import React from 'react';
import { NavbarDesktop } from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';

export interface IMenuRoute {
  label: string;
  path: string
}

interface INavbar {
  route: IMenuRoute[];
}

const routeLogo = [
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
  const secondaryMenu = useNavbarSecondaryMenu();
  console.log(secondaryMenu.content)
  return (
    <div className='navbar'>
      <NavbarDesktop className="hidden" route={route} />
      <NavbarMobile className="block xl:hidden" route={route} />
    </div>
  )
}

export default Navbar