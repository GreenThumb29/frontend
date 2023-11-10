import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#011603] ">
      <div className="container">
        <div className=" flex flex-col py-6 text-yellow-50">
          <Link href="/">
            <Image
              src={logo} // Path to the image in the 'public' folder
              alt="Logo"
              height={35} // Adjust the height as needed
              className=""
            />
          </Link>

          <Link href="/" className=" mt-3 text-xs ">
            An e2fSystems Initiative
          </Link>
        </div>
        <div className=" text-yellow-50">
          <h3 className=" text-base lg:text-lg font-semibold tracking-wider  border-b border-dotted border-app.yellow mb-6 pb-1">
            Explore e2fSystems
          </h3>
          <div className=" grid grid-cols-2 text-sm pb-6">
            <a
              className=" mr-4 mb-2 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              Home
            </a>
            <a
              className=" mr-4 mb-2 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              Solutions
            </a>
            <a
              className=" mr-4 mb-2 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              About Us
            </a>
            <a
              className=" mr-4 mb-2 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              Case Studies
            </a>
            <a
              className=" mr-4 mb-2 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              Contact
            </a>
            <a
              className=" mr-4 mb-2 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              Careers
            </a>
            <a
              className=" mr-4 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              Blog
            </a>
            <a
              className=" mr-4 border-b border-transparent hover:border-b border-dotted hover:border-yellow-50"
              href=""
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className=" border-t border-dotted border-app.yellow text-xs text-app.yellow py-2">
          Copyright © 2023 E2F Systems All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
