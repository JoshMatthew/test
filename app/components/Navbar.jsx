import {RxHamburgerMenu} from 'react-icons/rx';
import {AiOutlineDown} from 'react-icons/ai';
import {IoBagOutline} from 'react-icons/io5';
import {Link} from '@remix-run/react';

export function Navbar() {
  return (
    <header className="-bg-main-bg px-4 py-5 flex lg:px-24 snap-start">
      <h1 className="font-normal text-xl -text-main-fg font-inria-serif items-center cursor-pointer">
        Cleo<span className="font-bold">Hair</span>
      </h1>
      <Links />
      <span className="hidden -text-main-fg lg:flex -bg-main-fg bg-opacity-5 py-2 px-4 items-center gap-2 rounded-full cursor-pointer">
        <IoBagOutline className="text-xl mb-1" />
        <span className="font-inter text-base">Cart</span>
      </span>
      <RxHamburgerMenu className="ml-auto text-2xl -text-main-fg cursor-pointer lg:hidden" />
    </header>
  );
}

function Links() {
  return (
    <ul className="hidden font-inter -text-main-fg lg:flex lg:mx-auto lg:gap-5">
      <LinkItem>
        products <AiOutlineDown className="text-xs" />
      </LinkItem>
      <LinkItem>bestsellers</LinkItem>
      <LinkItem>about us</LinkItem>
      <LinkItem>contact us</LinkItem>
      <LinkItem>
        <Link to="#_section_blogs">blog</Link>
      </LinkItem>
    </ul>
  );
}

function LinkItem({children}) {
  return (
    <li className="capitalize text-base cursor-pointer flex items-center gap-2">
      {children}
    </li>
  );
}
