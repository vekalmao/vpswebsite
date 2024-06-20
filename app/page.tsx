// Add the "use client" directive at the top of the file
"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image for optimized images

// Functional component Home
export default function Home() {
  // State variables
  const [step, setStep] = useState(1);
  const [serverName, setServerName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [vpsCreated, setVpsCreated] = useState<boolean>(false);
  const [ipv4Address, setIpv4Address] = useState<string>(''); // State for IPv4 address

  // Event handler for advancing to step 2
  const handleCreateCloud = () => {
    setStep(2);
  };

  // Event handler for saving server name and advancing to step 2
  const handleSaveServerName = () => {
    // Placeholder for logic to save server name (if needed)
    // For now, we simply advance to the next step
    setStep(2);
  };

  // Event handler for selecting a location and advancing to step 3
  const handleSelectLocation = (location: string) => {
    setSelectedLocation(location);
    setStep(3);
  };

  // Event handler for submitting server setup
  const handleSubmit = () => {
    // Placeholder for logic to submit server setup
    // For now, simulate creation of VPS and generate random IPv4 address
    setVpsCreated(true);
    const randomIpv4 = generateRandomIpv4();
    setIpv4Address(randomIpv4);
    setStep(4); // Advance to step 4 after submission
  };

  // Function to generate a random IPv4 address
  const generateRandomIpv4 = (): string => {
    const ipOctet = () => Math.floor(Math.random() * 256);
    return `${ipOctet()}.${ipOctet()}.${ipOctet()}.${ipOctet()}`;
  };

  return (
    // Main container with styles
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Header section */}
      <header className="w-full max-w-5xl flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">LylaNodes</h1>
          <p className="text-sm text-blue-600">/VirtuHost</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-blue-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-blue-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Services</a></li>
            <li><a href="#" className="text-blue-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Features</a></li>
            <li><a href="#" className="text-blue-600 hover:text-purple-900 dark:text-blue-400 dark:hover:text-blue-600">Company</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content section */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Let&apos;s Get Your New Cloud Server Setup</h2>
            <div className="mb-4">
              <label className="block text-left mb-2 text-blue-600">Enter a name for your cloud server:</label>
              <input 
                type="text" 
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" // Text color set to blue
                value={serverName} 
                onChange={(e) => setServerName(e.target.value)} 
              />
            </div>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={handleSaveServerName}
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Your Location</h2>
            <div className="flex justify-center space-x-8 mb-8">
              <div onClick={() => handleSelectLocation('Ashburn, Virginia')} className="cursor-pointer">
                <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="USA" width={300} height={200} className="h-24 mb-2" />
                <p className="text-gray-600">Ashburn, Virginia</p>
              </div>
              <div onClick={() => handleSelectLocation('Frankfurt, Germany')} className="cursor-pointer">
                <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="Germany" width={300} height={200} className="h-24 mb-2" />
                <p className="text-gray-600">Frankfurt, Germany</p>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Review Your Cloud Server Setup</h2>
            <p className="text-lg mb-4 text-blue-600">Server Name: {serverName}</p>
            <p className="text-lg mb-4 text-blue-600">Location: {selectedLocation}</p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Dashboard - Servers Tab</h2>
            <p className="text-lg mb-4 text-blue-600">Your Servers:</p>
            {vpsCreated && (
              <p className="text-lg mb-4 text-blue-600">ssh root@{ipv4Address}</p>
            )}
            <p className="text-lg mb-4 text-blue-600">Additional content or actions can be placed here...</p>
          </>
        )}
      </section>

      {/* Footer section */}
      <footer className="mt-16 mb-4 text-center text-gray-500 text-sm">
        <p>&copy; 2019 - 2024 - All Rights Reserved. Made with ❤️ by LylaNodes</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Contact</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Resources</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Services</a>
        </div>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Legal</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Imprint</a>
        </div>
      </footer>
    </main>
  );
}
