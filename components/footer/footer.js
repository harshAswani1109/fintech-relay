import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.jpg";
import logoText from "../assets/logoText.png";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center max-md:justify-center max-md:items-center">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Image src={logo} className="h-16 w-16 rounded-full" />
              <Image
                  src={logoText}
                  className="h-16 w-full mt-2"/>
            </div>
            
            {/* Vertical line */}
            <div className="h-32 w-px bg-gray-600 mx-16 max-md:hidden"></div>

            {/* Quick Links */}
            <div className="flex flex-col flex-wrap justify-center max-md:justify-center max-md:items-center max-md:p-8">
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className='flex flex-row gap-32'>
                <div className='flex flex-col'>
                  <Link href="/" className="text-gray-300 hover:text-white mb-2">
                    HOME
                  </Link>
                  <Link href="/aboutUS" className="text-gray-300 hover:text-white mb-2">
                    ABOUT US
                  </Link>
                  <Link href="/compare" className="text-gray-300 hover:text-white mb-2">
                    SERVICES
                </Link>
                </div>
                <div className='flex flex-col'>
                  <Link href="/faq" className="text-gray-300 hover:text-white mb-2">
                    FAQ
                  </Link>
                  <Link href="/info" className="text-gray-300 hover:text-white">
                    INFO
                  </Link>
                </div>
              </div>
            </div>

            {/* Vertical line */}
            <div className="h-32 w-px bg-gray-600 mx-16 max-md:hidden"></div>

            {/* Contact Info */}
            <div className="flex flex-col max-md:items-center max-md:pb-8">
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              {/* <p className="text-gray-300 mb-2">
                Abode Valley, Kakkan Street <br/>
                Potheri, Chennai-603203
              </p> */}
              <p className="text-gray-300 mb-1">Harsh Aswani: +91 9680928107</p>
              <p className="text-gray-300 mb-1">Sashikanta Mohanty: +91 6371294381</p>
              <p className='text-gray-300 mb-1'>Ayush Garg: +91 9548832402 </p>
              <p className='text-gray-300'>Arnabya Agarwal: +91 79785640736 </p>
            </div>

            {/* Vertical line */}
              <div className="h-32 w-px bg-gray-600 mx-16 max-md:hidden"></div>

            {/*GitHub Repo*/ }
              <div className='flex flex-col justify-center items-center'>
              <h4 className="text-lg font-bold mb-4">GitHub Repository</h4>
              <Link href="https://github.com/harshAswani1109/fintech-relay">
                <BsGithub
                  className='w-6 h-6'
                />
              </Link>
              </div>
          </div>
        </div>
        <div className="py-6 justify-center text-center">
            <p className="text-gray-300 font-bold">
              © {new Date().getFullYear()} Fintech Relay. All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;


