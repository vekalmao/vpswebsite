"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Plans data
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

const Home = () => {
  const [step, setStep] = useState(0); // 0 for home page, then steps 1-6 for the setup process
  const [serverName, setServerName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCpuType, setSelectedCpuType] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<any>(null); // Updated to hold selected plan object
  const [vpsCreated, setVpsCreated] = useState<boolean>(false);
  const [ipv4Address, setIpv4Address] = useState<string>('');

  // Authentication states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Simulate successful registration (in a real app, you'd send this data to a backend)
    setIsRegistered(true);
    setStep(1); // Move to the next step after registration
  };

  const handleSaveServerName = () => {
    setStep(2);
  };

  const handleSelectLocation = (location: string) => {
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

  const generateRandomIpv4 = (): string => {
    const ipOctet = () => Math.floor(Math.random() * 256);
    return `${ipOctet()}.${ipOctet()}.${ipOctet()}.${ipOctet()}`;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Header and Navigation */}
      <header className="w-full max-w-5xl flex items-center justify-between py-8">
        <div>
          <h1 className="text-3xl font-bold text-white">LylaNodes</h1>
          <p className="text-sm text-white">/VirtuHost</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="text-white hover:text-yellow-400">Services</a></li>
            <li><a href="#" className="text-white hover:text-yellow-400">Features</a></li>
            <li><a href="#" className="text-white hover:text-yellow-400">Company</a></li>
            <li>
              <button
                className="text-white hover:text-yellow-400"
                onClick={() => setIsRegistered(false)}
              >
                Register
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Registration Form */}
      {isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Create an Account to Get Started</h2>
          <div className="mb-4">
            <label className="block text-left mb-2 text-gray-300">Email:</label>
            <input
              type="email"
              className="border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2 text-gray-300">Password:</label>
            <input
              type="password"
              className="border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={handleRegister}
          >
            Register
          </button>
        </section>
      )}

      {/* Affordable VPS Hosting */}
      {!isRegistered && (
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

          {/* Our Features */}
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

          {/* Setup Process */}
          <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md text-left">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">Setup Your VPS</h2>
            {/* Step 1: Save Server Name */}
            {step === 1 && (
              <div className="mb-8">
                <label className="block text-left mb-2 text-gray-300">Server Name:</label>
                <input
                  type="text"
                  className="border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 w-full"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                />
                <button
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300 ml-2 mt-4"
                  onClick={handleSaveServerName}
                >
                  Save
                </button>
              </div>
            )}

            {/* Step 2: Select Location */}
            {step === 2 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Select Location:</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    className={`border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 ${selectedLocation === 'New York' ? 'bg-yellow-400 text-gray-900' : ''}`}
                    onClick={() => handleSelectLocation('New York')}
                  >
                    New York
                  </button>
                  <button
                    className={`border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 ${selectedLocation === 'San Francisco' ? 'bg-yellow-400 text-gray-900' : ''}`}
                    onClick={() => handleSelectLocation('San Francisco')}
                  >
                    San Francisco
                  </button>
                  <button
                    className={`border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 ${selectedLocation === 'London' ? 'bg-yellow-400 text-gray-900' : ''}`}
                    onClick={() => handleSelectLocation('London')}
                  >
                    London
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Select CPU Type */}
            {step === 3 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Select CPU Type:</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    className={`border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 ${selectedCpuType === 'Intel' ? 'bg-yellow-400 text-gray-900' : ''}`}
                    onClick={() => handleSelectCpuType('Intel')}
                  >
                    Intel
                  </button>
                  <button
                    className={`border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 ${selectedCpuType === 'AMD' ? 'bg-yellow-400 text-gray-900' : ''}`}
                    onClick={() => handleSelectCpuType('AMD')}
                  >
                    AMD
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Select Plan */}
            {step === 4 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Select Plan:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sharedPlans.map((plan, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-4 shadow-md text-left">
                      <h4 className="text-lg font-semibold mb-2 text-yellow-400">{plan.name}</h4>
                      <p className="text-gray-300 mb-2">{plan.description}</p>
                      <p className="text-gray-400">{plan.specifications}</p>
                      <button
                        className={`mt-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg hover:bg-yellow-500 transition duration-300`}
                        onClick={() => handleSelectPlan(plan)}
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Confirm and Create */}
            {step === 5 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Confirm Selections:</h3>
                <div className="flex flex-col items-center">
                  <p className="text-gray-300 mb-2"><span className="font-semibold">Server Name:</span> {serverName}</p>
                  <p className="text-gray-300 mb-2"><span className="font-semibold">Location:</span> {selectedLocation}</p>
                  <p className="text-gray-300 mb-2"><span className="font-semibold">CPU Type:</span> {selectedCpuType}</p>
                  <p className="text-gray-300 mb-2"><span className="font-semibold">Plan:</span> {selectedPlan.name}</p>
                  <button
                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                    onClick={handleSubmit}
                  >
                    Create VPS
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: VPS Created */}
            {step === 6 && (
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">VPS Successfully Created!</h3>
                <p className="text-gray-300 mb-2">Server Name: {serverName}</p>
                <p className="text-gray-300 mb-2">Location: {selectedLocation}</p>
                <p className="text-gray-300 mb-2">CPU Type: {selectedCpuType}</p>
                <p className="text-gray-300 mb-2">Plan: {selectedPlan.name}</p>
                <p className="text-gray-300 mb-2">IPv4 Address: {ipv4Address}</p>
              </div>
            )}
          </section>
        </section>
      )}

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center py-8">
        <p className="text-gray-300">© 2024 LylaNodes. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
