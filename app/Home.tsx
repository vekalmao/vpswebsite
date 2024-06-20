// Home.js

import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100">
      {/* Header */}
      <header className="w-full max-w-5xl flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">LylaNodes</h1>
          <p className="text-sm text-blue-600">/VirtuHost</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-600 hover:text-purple-900">Home</a></li>
            <li><a href="#" className="text-blue-600 hover:text-purple-900">Services</a></li>
            <li><a href="#" className="text-blue-600 hover:text-purple-900">Features</a></li>
            <li><a href="#" className="text-blue-600 hover:text-purple-900">Company</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Your Premier VPS Hosting Solution</h2>
        <p className="text-lg text-gray-600 mb-4">
          Elevate Your Web Presence with Top-Tier Services
        </p>
        <div className="relative w-full h-72 mb-6">
          <Image src="/home-image.jpg" alt="Homepage Image" layout="fill" objectFit="cover" className="rounded-lg shadow-md" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a href="#" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Create Cloud VPS
          </a>
          <a href="#" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            View Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Reliable Service</h3>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate commodo lectus.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">24/7 Support</h3>
            <p className="text-lg text-gray-600">
              Sed rhoncus, tortor sed eleifend tristique, tortor mauris consectetur dolor.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">High Performance</h3>
            <p className="text-lg text-gray-600">
              Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto text-center text-gray-500 text-sm">
        <div className="py-4 bg-white">
          <p>&copy; 2024 LylaNodes. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-900">About</a>
            <a href="#" className="hover:text-blue-900">Contact</a>
            <a href="#" className="hover:text-blue-900">Terms</a>
            <a href="#" className="hover:text-blue-900">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
