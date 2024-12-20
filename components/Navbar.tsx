// components/Navbar.tsx
import React from "react";
import Link from "next/link"

const NavBar: React.FC = () => {

    return (
        <nav className='bg-blue-400 p-4'>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className='font-semibold text-white'>Home</Link> 
                </li>
                <li>
                    <Link href="/about" className='font-semibold text-white'>About</Link> 
                </li>
                <li>
                    <Link href="/contact" className='font-semibold text-white'>Contact</Link> 
                </li>
                <li>
                    <Link href="/navbar" className="font-semibold text-white">Navigation</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;