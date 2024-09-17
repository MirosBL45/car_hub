import Link from 'next/link';

import Logo from './Logo';

import { footerLinks, footerLinksSmall } from '@/constants';

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Logo />
          <p className="text-base text-gray-700">
            Carhub 2024 <br /> All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((linko) => (
                <Link
                  href={linko.url}
                  key={linko.title}
                  className="text-gray-500"
                >
                  {linko.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          {footerLinksSmall.map((link) => (
            <Link className="text-gray-500" key={link.title} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
