import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/logo.svg'


const Navbar = () =>{
 return (
    <nav className=' fixed top-0 left-0 right-0'>
        <Link href="/">
          <Image
            src={logo} // Path to the image in the 'public' folder
            alt="Logo"
            height={35} // Adjust the height as needed
            className=' pl-6 mt-4'
          />
      </Link>
    </nav>
 )
}

export default Navbar