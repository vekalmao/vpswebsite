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
    setStep(3);
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
    setStep(1);
    setServerName('');
    setSelectedLocation('');
    setSelectedCpuType('');
    setSelectedPlan('');
    setVpsCreated(false);
    setIpv4Address('');
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

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Registration successful!');
  };

  const additionalLocations: LocationType[] = [
    'Ashburn Virginia',
    'Frankfurt - Germany'
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
      </section>

      <section className="text-center mb-8">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleSetupCloudVPS}
        >
          Setup Cloud VPS
        </button>
      </section>

      {showSetupProcess && (
        <section className="w-full max-w-5xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Setup Your Cloud VPS</h2>
          <p className="text-gray-600 mb-8">Follow these steps to configure your Cloud VPS.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {additionalLocations.map((location) => (
              <div key={location} onClick={() => handleSelectLocation(location)} className="cursor-pointer">
                <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt={location} width={300} height={200} className="h-24 mb-2" />
                <p className="text-gray-600">{location}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="w-full max-w-5xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Choose a Server Name</h2>
          <input
            type="text"
            placeholder="Enter server name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSaveServerName}
          >
            Next
          </button>
        </section>
      )}

      {step === 3 && (
        <section className="w-full max-w-5xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Select CPU Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div onClick={() => handleSelectCpuType('shared')} className="cursor-pointer bg-gray-200 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Shared CPU</h3>
              <p className="text-gray-600">Ideal for standard workloads</p>
            </div>
            <div onClick={() => handleSelectCpuType('dedicated')} className="cursor-pointer bg-gray-200 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Dedicated CPU</h3>
              <p className="text-gray-600">Optimized for high-performance tasks</p>
            </div>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="w-full max-w-5xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Select Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {selectedCpuType === 'shared' ? (
              sharedPlans.map((plan) => (
                <div key={plan.name} onClick={() => handleSelectPlan(plan)} className="cursor-pointer bg-gray-200 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <p className="text-gray-600">{plan.specifications}</p>
                </div>
              ))
            ) : (
              dedicatedPlans.map((plan) => (
                <div key={plan.name} onClick={() => handleSelectPlan(plan)} className="cursor-pointer bg-gray-200 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <p className="text-gray-600">{plan.specifications}</p>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="w-full max-w-5xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Review and Submit</h2>
          <div className="bg-gray-200 p-8 rounded-lg mb-8 inline-block">
            <h3 className="text-2xl font-semibold mb-4">Server Configuration</h3>
            <p className="text-gray-600"><span className="font-semibold">Server Name:</span> {serverName}</p>
            <p className="text-gray-600"><span className="font-semibold">Location:</span> {selectedLocation}</p>
            <p className="text-gray-600"><span className="font-semibold">CPU Type:</span> {selectedCpuType}</p>
            <p className="text-gray-600"><span className="font-semibold">Plan:</span> {selectedPlan.name}</p>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </section>
      )}

      {step === 6 && (
        <section className="w-full max-w-5xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Cloud VPS Created</h2>
          <p className="text-gray-600 mb-8">Your Cloud VPS has been successfully created!</p>
          <div className="bg-gray-200 p-8 rounded-lg mb-8 inline-block">
            <h3 className="text-2xl font-semibold mb-4">Server Details</h3>
            <p className="text-gray-600"><span className="font-semibold">Server Name:</span> {serverName}</p>
            <p className="text-gray-600"><span className="font-semibold">Location:</span> {selectedLocation}</p>
            <p className="text-gray-600"><span className="font-semibold">CPU Type:</span> {selectedCpuType}</p>
            <p className="text-gray-600"><span className="font-semibold">Plan:</span> {selectedPlan.name}</p>
            <p className="text-gray-600"><span className="font-semibold">IPv4 Address:</span> {ipv4Address}</p>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSetupCloudVPS}
          >
            Setup Another Cloud VPS
          </button>
        </section>
      )}

      <footer className="w-full max-w-5xl flex justify-between items-center p-8 border-t border-gray-300 mt-auto">
        <p className="text-gray-600">&copy; 2024 LylaNodes. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-blue-600 hover:text-purple-900">Privacy Policy</a></li>
          <li><a href="#" className="text-blue-600 hover:text-purple-900">Terms of Service</a></li>
          <li><a href="#" className="text-blue-600 hover:text-purple-900">Cookie Policy</a></li>
        </ul>
      </footer>
    </main>
  );
};

export default Home;
