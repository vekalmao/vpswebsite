"use client";

import React, { useState } from 'react';
import Image from 'next/image';

type LocationType = string; // Define a type for location if needed

const Home = () => {
  const [step, setStep] = useState<number>(1);
  const [serverName, setServerName] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<LocationType>(''); // Set the type for selectedLocation
  const [selectedCpuType, setSelectedCpuType] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<any>(''); // Adjust the type as per your plan object
  const [vpsCreated, setVpsCreated] = useState<boolean>(false);
  const [ipv4Address, setIpv4Address] = useState<string>('');

  const [showSetupProcess, setShowSetupProcess] = useState<boolean>(false); // State to control the visibility of setup process

  const handleSaveServerName = () => {
    setStep(2);
  };

  const handleSelectLocation = (location: LocationType) => { // Explicitly define the type for location
    setSelectedLocation(location);
    setStep(3); // Move to the next step after selecting location
  };

  const handleSelectCpuType = (cpuType: string) => {
    setSelectedCpuType(cpuType);
    setStep(4);
  };

  const handleSelectPlan = (plan: any) => { // Adjust the type as per your plan object
    setSelectedPlan(plan);
    setStep(5);
  };

  const handleSubmit = () => {
    setVpsCreated(true);
    const randomIpv4 = generateRandomIpv4();
    setIpv4Address(randomIpv4);
    setStep(6);
  };

  const handleSetupCloudVPS = () => {
    setShowSetupProcess(true); // Show setup process when button is clicked
  };

  const handleCreateCloudVPS = () => {
    setStep(1); // Reset to the first step
    setVpsCreated(false); // Reset VPS creation status
    setServerName(''); // Reset server name
    setSelectedLocation(''); // Reset selected location
    setSelectedCpuType(''); // Reset selected CPU type
    setSelectedPlan(''); // Reset selected plan
    setShowSetupProcess(false); // Hide setup process when button is clicked
  };

  const generateRandomIpv4 = () => {
    const ipOctet = () => Math.floor(Math.random() * 256);
    return `${ipOctet()}.${ipOctet()}.${ipOctet()}.${ipOctet()}`;
  };

  const additionalLocations: string[] = [
    'Frankfurt - Germany',
    'Ashburn Virginia'
  ];

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
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
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

      {!showSetupProcess && (
        <section className="w-full max-w-5xl p-8 text-center">
          <h2 className="text-5xl font-extrabold mb-8 text-white">Affordable VPS Hosting</h2>
          <p className="text-xl text-gray-300 mb-12">Deploy your virtual private server in seconds with our high-performance hosting solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">VPS Hosting</h3>
              <p className="text-lg text-gray-300">Starting at <span className="font-bold">$5.50/month</span></p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Game Hosting</h3>
              <p className="text-lg text-gray-300">Starting at <span className="font-bold">$4.40/month</span></p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Lavalink Hosting</h3>
              <p className="text-lg text-gray-300">Coming Soon</p>
            </div>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSetupCloudVPS}
          >
            Setup Cloud VPS
          </button>
        </section>
      )}

      {showSetupProcess && (
        <section className="w-full max-w-5xl p-8 text-center">
          {step === 3 && (
            <>
              <h2 className="text-3xl font-semibold mb-4">Setup Your Cloud VPS</h2>
              <p className="text-gray-600 mb-8">Select a location for your Cloud VPS:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {additionalLocations.map((location) => (
                  <div key={location} onClick={() => handleSelectLocation(location)} className="cursor-pointer">
                    <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt={location} width={300} height={200} className="h-24 mb-2" />
                    <p className="text-gray-600">{location}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Add more steps as needed */}

          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleCreateCloudVPS}
          >
            Cancel Setup
          </button>
        </section>
      )}

      <footer className="w-full max-w-5xl border-t border-gray-300 pt-8 pb-4 text-center">
        <ul className="flex justify-center space-x-8 mb-8">
          <li><a href="#" className="text-blue-600 hover:text-purple-900">Privacy Policy</a></li>
          <li><a href="#" className="text-blue-600 hover:text-purple-900">Terms of Service</a></li>
          <li><a href="#" className="text-blue-600 hover:text-purple-900">Cookie Policy</a></li>
        </ul>
      </footer>
    </main>
  );
};

export default Home;
