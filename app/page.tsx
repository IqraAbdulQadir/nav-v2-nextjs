

import React from 'react';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
      <NavBar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">This is the home page content.</p>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;