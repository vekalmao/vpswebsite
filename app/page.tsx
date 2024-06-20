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
  const [selectedCpuType, setSelectedCpuType] = useState<string>(''); // State for selected CPU type
  const [selectedPlan, setSelectedPlan] = useState<string>('');
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

  // Event handler for selecting CPU type and advancing to step 4
  const handleSelectCpuType = (cpuType: string) => {
    setSelectedCpuType(cpuType);
    setStep(4);
  };

  // Event handler for selecting a plan and advancing to step 5
  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setStep(5);
  };

  // Event handler for submitting server setup
  const handleSubmit = () => {
    // Placeholder for logic to submit server setup
    // For now, simulate creation of VPS and generate random IPv4 address
    setVpsCreated(true);
    const randomIpv4 = generateRandomIpv4();
    setIpv4Address(randomIpv4);
    setStep(6); // Advance to step 6 after submission
  };

  // Function to generate a random IPv4 address
  const generateRandomIpv4 = (): string => {
    const ipOctet = () => Math.floor(Math.random() * 256);
    return `${ipOctet()}.${ipOctet()}.${ipOctet()}.${ipOctet()}`;
  };

  // Plan details for Shared and Dedicated plans
  const sharedPlans = [
    { name: 'CX-01', description: 'Cheap for small projects', specifications: '1GB of RAM, 1 Core, 20GB of Storage' },
    { name: 'CX-02', description: 'Affordable for startups', specifications: '2GB of RAM, 2 Cores, 40GB of Storage' },
    { name: 'CX-03', description: 'Balanced for growing applications', specifications: '4GB of RAM, 2 Cores, 80GB of Storage' },
    { name: 'CX-04', description: 'Powerful for multiple applications', specifications: '8GB of RAM, 4 Cores, 160GB of Storage' },
    { name: 'CX-05', description: 'High-performance for intensive tasks', specifications: '16GB of RAM, 6 Cores, 320GB of Storage' },
    { name: 'CX-06', description: 'Ultimate for enterprise-grade solutions', specifications: '32GB of RAM, 8 Cores, 640GB of Storage' }
  ];

  const dedicatedPlans = [
    { name: 'DX-01', description: 'Prices are mid, for big projects', specifications: '4GB of RAM, 4 Cores, 100GB of Storage' },
    { name: 'DX-02', description: 'Balanced for growing applications', specifications: '8GB of RAM, 4 Cores, 200GB of Storage' },
    { name: 'DX-03', description: 'Powerful for multiple applications', specifications: '16GB of RAM, 8 Cores, 400GB of Storage' },
    { name: 'DX-04', description: 'High-performance for intensive tasks', specifications: '32GB of RAM, 16 Cores, 800GB of Storage' },
    { name: 'DX-05', description: 'Ultimate for enterprise-grade solutions', specifications: '64GB of RAM, 32 Cores, 1600GB of Storage' },
    { name: 'DX-06', description: 'Extreme power for specialized tasks', specifications: '128GB of RAM, 64 Cores, 3200GB of Storage' }
  ];

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
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
          onClick={handleCreateCloud}
        >
          Create Cloud VPS
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">VirtuHost</h2>
        <p className="text-sm mb-4 text-blue-600">Your Premier VPS Hosting Solution. Elevate Your Web Presence with Top-Tier Services!</p>
        <div className="grid grid-cols-2 gap-8">
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Dashboard</h3>
            <p className="text-sm text-gray-600">Access your hosting dashboard for managing servers.</p>
          </a>
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Account Settings</h3>
            <p className="text-sm text-gray-600">Manage your account settings and preferences.</p>
          </a>
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Our Services</h3>
            <p className="text-sm text-gray-600">Explore the services we offer to enhance your hosting experience.</p>
          </a>
          <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Our Features</h3>
            <p className="text-sm text-gray-600">Discover the top-tier features included in all our hosting plans.</p>
          </a>
        </div>
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
