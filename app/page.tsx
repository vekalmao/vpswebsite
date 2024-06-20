// Add the "use client" directive at the top of the file
"use client";

import React, { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);

  const handleCreateCloud = () => {
    setStep(2);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="w-full max-w-5xl flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">LylaNodes</h1>
          <p className="text-sm">/ VirtuHost</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Company</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Signup for TrestHost</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-left mb-2">First Name</label>
            <input type="text" id="firstName" name="firstName" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-left mb-2">Last Name</label>
            <input type="text" id="lastName" name="lastName" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-2">
            <label htmlFor="email" className="block text-left mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-2">
            <label htmlFor="password" className="block text-left mb-2">Password</label>
            <input type="password" id="password" name="password" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
          </div>
          <div className="col-span-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-16 mb-4 text-center text-gray-500 text-sm">
        <p>&copy; 2019 - 2024 - All Rights Reserved. Made with ❤️ by LylaNodes</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">About</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Resources</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Features</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Pricing</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Services</a>
        </div>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Legal</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Imprint</a>
        </div>
      </footer>
    </main>
  );
}
