import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.svg";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${
        scrolling ? "backdrop-blur-md" : "backdrop-blur-none"
      } fixed top-0 left-0 right-0  z-50 pb-3 transition-all duration-100`}
    >
      <Link href="#result">
        <Image
          src={logo} // Path to the image in the 'public' folder
          alt="Logo"
          height={35} // Adjust the height as needed
          className=" pl-6 mt-4"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
