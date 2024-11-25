// components/Navbar.tsx
import React from "react";
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
    const router = useRouter();

    return (
        <nav className='bg-blue-400 p-4'>
            <ul className="flex space-x-4">
                <li>
                    <button onClick={() => router.push('/')} className='font-semibold text-white'>Home</button>
                </li>
                <li>
                    <button onClick={() => router.push('/about')} className='font-semibold text-white'>About</button>
                </li>
                <li>
                    <button onClick={() => router.push('/contact')} className='font-semibold text-white'>Contact</button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;