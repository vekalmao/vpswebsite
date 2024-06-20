// Add the "use client" directive at the top of the file
"use client";

import React, { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);
  const [serverName, setServerName] = useState('');

  const handleCreateCloud = () => {
    setStep(2);
  };

  const handleSaveServerName = () => {
    // Logic to save server name (if needed)
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="w-full max-w-5xl flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-purple-600">LylaNodes</h1>
          <p className="text-sm text-purple-600">/VirtuHost</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-purple-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Services</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Features</a></li>
            <li><a href="#" className="text-purple-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Company</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">VirtuHost</h2>
        <p className="text-sm mb-4 text-purple-600">Your Premier VPS Hosting Solution. Elevate Your Web Presence with Top-Tier Services!</p>
        <div className="grid grid-cols-2 gap-8">
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Dashboard</h3>
            <p className="text-sm text-gray-600">Access your hosting dashboard for managing servers.</p>
          </a>
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Account Settings</h3>
            <p className="text-sm text-gray-600">Manage your account settings and preferences.</p>
          </a>
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Our Services</h3>
            <p className="text-sm text-gray-600">Explore the services we offer to enhance your hosting experience.</p>
          </a>
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">Our Features</h3>
            <p className="text-sm text-gray-600">Discover the top-tier features included in all our hosting plans.</p>
          </a>
        </div>
      </section>

      {/* Cloud Server Setup Section */}
      {step === 1 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Let&apos;s Get Your New Cloud Server Setup</h2>
          <div className="mb-4">
            <label className="block text-left mb-2 text-purple-600">Enter a name for your cloud server:</label>
            <input 
              type="text" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full" 
              value={serverName} 
              onChange={(e) => setServerName(e.target.value)} 
            />
          </div>
          <button 
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
            onClick={handleSaveServerName}
          >
            Next
          </button>
        </section>
      )}

      {/* Cloud Server Location Selection Section */}
      {step === 2 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Select Your Location</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div>
              <img src="https://th.bing.com/th/id/OIP.HO0IBUJz_3oGqI9zA3PklwHaD4?rs=1&pid=ImgDetMain" alt="USA" className="h-24 mb-2" />
              <p className="text-gray-600">Ashburn, Virginia</p>
            </div>
            <div>
              <img src="/images/germany.png" alt="Germany" className="h-24 mb-2" />
              <p className="text-gray-600">Frankfurt, Germany</p>
            </div>
          </div>
          <button 
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
            onClick={() => setStep(3)}
          >
            Next
          </button>
        </section>
      )}

      {/* Cloud Server Project Type Selection Section */}
      {step === 3 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Choose Your Project</h2>
          <div className="grid grid-cols-2 gap-8">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
              Shared CPU
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
              Dedicated CPU
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-16 mb-4 text-center text-gray-500 text-sm">
        <p>&copy; 2019 - 2024 - All Rights Reserved. Made with ❤️ by LylaNodes</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">About</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Contact</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Resources</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Services</a>
        </div>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Legal</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-purple-900 dark:hover:text-blue-600">Imprint</a>
        </div>
      </footer>
    </main>
  );
}
