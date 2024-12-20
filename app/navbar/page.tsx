"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NavbarPage: React.FC = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  const goToAbout = () => {
    router.push('/about');
  };

  const goToContact = () => {
    router.push('/contact');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow p-6 flex flex-col items-center justify-center">
  <h1 className="text-3xl font-bold mb-4 pt-6">Navbar page with use Router</h1>
  <div className="flex justify-center items-center bg-blue-400 p-6 w-1/2 h-64 flex-grow">
    <button onClick={goToHome} className="bg-blue-500 text-white px-4 py-2 rounded">Home</button>
    <button onClick={goToAbout} className="bg-green-500 text-white px-4 py-2 rounded">About</button>
    <button onClick={goToContact} className="bg-purple-500 text-white px-4 py-2 rounded">Contact</button>
  </div>
</main>
      <Footer />
    </div>
  );
};

export default NavbarPage;
