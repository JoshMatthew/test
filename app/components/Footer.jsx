import {AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';
import {BsVimeo, BsYoutube} from 'react-icons/bs';

export function Footer() {
  return (
    <main className="relative">
      <footer className="-bg-main-fg w-[90%] mx-auto py-2 lg:px-24 mt-10 rounded-t-lg lg:mt-40 relative z-20">
        <div className="px-3 py-4 grid grid-cols-1 gap-2 text-center lg:flex lg:items-center lg:px-24 lg:gap-8 lg:mx-auto lg:w-fit lg:py-16">
          <h1 className="font-inria-serif text-xl md:text-lg lg:text-3xl lg:ml-auto lg:w-fit">
            Subscribe Newsletters
          </h1>
          <span className="font-inter text-sm border -border-accent-border rounded-md grid grid-cols-2 items-center px-3 py-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-4/6 -placeholder-accent-footer-fg-lightest focus:outline-none focus:border-none col-span-1 min-w-full"
            />
            <button className="-bg-accent-rose px-4 py-4 -text-main-fg rounded-md w-11/12 ml-auto">
              Subscribe now
            </button>
          </span>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:flex lg:items-center lg:mt-23">
          <ul className="flex gap-5 mx-auto -text-footer-fg font-inter lg:py-6 lg:gap-20 lg:ml-0">
            <LinkItem>About us</LinkItem>
            <LinkItem>Discover</LinkItem>
            <LinkItem>Explore</LinkItem>
            <LinkItem>Books</LinkItem>
          </ul>
          <ul className="flex gap-5 mx-auto mt-4 text-3xl lg:py-6 lg:mr-0 lg:gap-10">
            <li>
              <AiFillFacebook className="-text-accent-rose" />
            </li>
            <li>
              <AiOutlineTwitter className="-text-accent-rose" />
            </li>
            <li>
              <BsVimeo className="-text-accent-rose" />
            </li>
            <li>
              <BsYoutube className="-text-accent-rose" />
            </li>
          </ul>
        </div>
        <div className="text-center grid grid-cols-1 gap-2 mt-4 lg:border-t-2 lg:mt-5 lg:flex lg:items-center lg:py-8 lg:justify-around lg:flex-row-reverse">
          <ul className="hidden lg:flex -text-footer-fg gap-10 lg:ml-auto">
            <li className="text-sm cursor-pointer">Terms of Service</li>
            <li className="text-sm cursor-pointer">Privacy Policy</li>
          </ul>
          <h1 className="font-normal text-xl -text-secondary-fg font-inria-serif items-center cursor-pointer lg:text-2xl">
            Cleo<span className="font-bold">Hair</span>
          </h1>
          <p className="font-inter text-sm -text-footer-fg opacity-75 mix-blend-normal lg:text-base lg:mr-auto">
            &copy; 2023 CleoHair. All rights reserved.
          </p>
        </div>
      </footer>
      <div className="absolute -bg-accent-rose min-w-[200vw] min-h-[50vh] rounded-b-full bottom-[80%] left-1/2 -translate-x-1/2 mx-auto -z-10 md:bottom-[75%] md:min-w-[120vw] lg:bottom-[87%] lg:min-w-[150vw] lg:min-h-[100vh]"></div>
    </main>
  );
}

function LinkItem({children}) {
  return <li className="cursor-pointer text-sm lg:text-base">{children}</li>;
}
