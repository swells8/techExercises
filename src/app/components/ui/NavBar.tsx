
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';


const NavBar = () => {
    return(
        <nav className="border-2 w-full flex justify-between items center p-4 bg-black bg-opacity-60 text-white fixed top-0 z-50">
            <div className="text-xl font-bold"> Argus Serveillance</div>

            <ul className="flex space-x-8">
                {['main', 'about', 'program', 'contact'].map((link) => (
                    <li key={link} className="capitalize hover:text-green-400 cursor-pointer font-mono">
                        <Link href={`/${link}`}>
                        {link}
                        </Link>

                    </li>
                ))}
            </ul>

            <div className="flex space-x-4">
                <Link href="http://www.instagram.com">
                    <FaInstagram className="hover:text-green-200 cursor-pointer" size={20}/>
                </Link>
                <Link href="http://www.facebook.com">
                    <FaFacebook className="hover:text-blue-600 cursor-pointer" size={20}/>
                </Link>
                <Link href="http://www.linkedin.com">
                    <FaLinkedin className="hover:text-blue-500 cursor-pointer" size={20}/>
                </Link>
            </div>
        </nav>

    );
}

export default NavBar;