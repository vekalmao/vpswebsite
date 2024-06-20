"use client";


import React, { useState } from 'react';
import Image from 'next/image';

type LocationType = 'Ashburn Virginia' | 'Frankfurt - Germany';

const Home = () => {
  const [step, setStep] = useState<number>(1);
  const [serverName, setServerName] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  const [selectedCpuType, setSelectedCpuType] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<any>('');
  const [vpsCreated, setVpsCreated] = useState<boolean>(false);
  const [ipv4Address, setIpv4Address] = useState<string>('');

  const [showSetupProcess, setShowSetupProcess] = useState<boolean>(false);

  const handleSaveServerName = () => {
    setStep(2);
  };

  const handleSelectLocation = (location: LocationType) => {
    setSelectedLocation(location);
    setStep(3);
  };

  const handleSelectCpuType = (cpuType: string) => {
    setSelectedCpuType(cpuType);
    setStep(4);
  };

  const handleSelectPlan = (plan: any) => {
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
    setShowSetupProcess(true);
  };

  const handleCreateCloudVPS = () => {
    setStep(1);
    setVpsCreated(false);
    setServerName('');
    setSelectedLocation(null); // Reset selected location to null
    setSelectedCpuType('');
    setSelectedPlan('');
    setShowSetupProcess(false);
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

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-900 text-white">
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

      <section className="w-full max-w-5xl p-8 text-center">
        <h2 className="text-5xl font-extrabold mb-8">Affordable VPS Hosting</h2>
        <p className="text-xl mb-12">Deploy your virtual private server in seconds with our high-performance hosting solutions.</p>
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

      <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-left">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">DDoS Protection</h3>
            <p className="text-gray-300">We provide DDoS protection to ensure your server remains operational even under attack.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Fast Response Times</h3>
            <p className="text-gray-300">Our servers are optimized for quick response times to keep your applications running smoothly.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Scalable Infrastructure</h3>
            <p className="text-gray-300">Easily scale your infrastructure as your business grows with our flexible hosting solutions.</p>
          </div>
        </div>
      </section>

      {step === 1 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Let&apos;s Get Your New Cloud Server Setup</h2>
          <div className="mb-4">
            <label className="block text-left mb-2 text-blue-600">Enter a name for your cloud server:</label>
            <input 
              type="text" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" 
              value={serverName} 
              onChange={(e) => setServerName(e.target.value)} 
            />
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-2 transition duration-300"
            onClick={handleSaveServerName}
          >
            Next
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select a Location</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div onClick={() => handleSelectLocation('Ashburn Virginia')} className="cursor-pointer">
              <Image 
                src="/images/ashburn.jpg" 
                alt="Ashburn Virginia" 
                width={300} 
                height={200} 
                className="h-24 mb-2 rounded-lg" 
              />
              <p className="text-gray-600">Ashburn Virginia</p>
            </div>
            <div onClick={() => handleSelectLocation('Frankfurt - Germany')} className="cursor-pointer">
              <Image 
                src="/images/frankfurt.jpg" 
                alt="Frankfurt - Germany" 
                width={300} 
                height={200} 
                className="h-24 mb-2 rounded-lg" 
              />
              <p className="text-gray-600">Frankfurt - Germany</p>
            </div>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select a CPU Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div onClick={() => handleSelectCpuType('Standard')} className="cursor-pointer bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Standard</h3>
              <p className="text-lg text-gray-300">Starting at <span className="font-bold">$5.50/month</span></p>
            </div>
            <div onClick={() => handleSelectCpuType('Premium')} className="cursor-pointer bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Premium</h3>
              <p className="text-lg text-gray-300">Starting at <span className="font-bold">$8.50/month</span></p>
            </div>
            <div onClick={() => handleSelectCpuType('Ultra')} className="cursor-pointer bg-gray-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Ultra</h3>
              <p className="text-lg text-gray-300">Starting at <span className="font-bold">$12.50/month</span></p>
            </div>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {sharedPlans.map((plan) => (
              <div key={plan.name} className="text-left">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <p className="text-sm text-gray-500">{plan.specifications}</p>
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4 transition duration-300"
                  onClick={() => handleSelectPlan(plan)}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Review and Submit</h2>
          <div className="text-left mb-8">
            <p className="text-lg font-semibold">Server Name: {serverName}</p>
            <p className="text-lg font-semibold">Location: {selectedLocation}</p>
            <p className="text-lg font-semibold">CPU Type: {selectedCpuType}</p>
            <p className="text-lg font-semibold">Plan: {selectedPlan.name}</p>
            <p className="text-gray-600">{selectedPlan.description}</p>
            <p className="text-sm text-gray-500">{selectedPlan.specifications}</p>
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Create Cloud VPS
          </button>
        </section>
      )}

      {step === 6 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Cloud VPS Created</h2>
          <p className="text-lg mb-4">Your Cloud VPS has been successfully created!</p>
          <p className="text-lg mb-4">IPv4 Address: {ipv4Address}</p>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleCreateCloudVPS}
          >
            Create Another Cloud VPS
          </button>
        </section>
      )}

      <footer className="w-full max-w-5xl flex items-center justify-center mt-auto pt-8 pb-4">
        <p className="text-gray-600 text-sm">&copy; 2024 LylaNodes. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;




