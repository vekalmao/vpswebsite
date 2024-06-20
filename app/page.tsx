"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [step, setStep] = useState(1);
  const [serverName, setServerName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCpuType, setSelectedCpuType] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [vpsCreated, setVpsCreated] = useState(false);
  const [ipv4Address, setIpv4Address] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveServerName = () => {
    setStep(2);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setStep(3);
  };

  const handleSelectCpuType = (cpuType) => {
    setSelectedCpuType(cpuType);
    setStep(4);
  };

  const handleSelectPlan = (plan) => {
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
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Validate the registration fields here
    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Proceed with registration logic
    alert('Registration successful!'); // Replace with actual registration logic
    // You can add further actions like API calls to register the user

    // For demonstration purposes, resetting the form fields after registration
    setFirstName('');
    setLastName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
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

  const additionalLocations = [
    'Asia',
    'Europe',
    'New York',
    'Ashburn Virginia',
    'Frankfurt - Germany'
    // Add more locations as needed
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
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSaveServerName}
          >
            Next
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Your Location</h2>
          <div className="flex justify-center space-x-8 mb-8">
            {additionalLocations.map((location) => (
              <div key={location} onClick={() => handleSelectLocation(location)} className="cursor-pointer">
                <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt={location} width={300} height={200} className="h-24 mb-2" />
                <p className="text-gray-600">{location}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Choose Your CPU Type</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => handleSelectCpuType('Shared')}
            >
              Shared CPU
            </button>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => handleSelectCpuType('Dedicated')}
            >
              Dedicated CPU
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Choose Your Plan</h2>
          <div className="flex justify-center space-x-8 mb-8">
            {selectedCpuType === 'Shared' ? (
              sharedPlans.map((plan) => (
                <div key={plan.name} className="text-left">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <p className="text-sm text-gray-500">{plan.specifications}</p>
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-2"
                    onClick={() => handleSelectPlan(plan.name)}
                  >
                    Select
                  </button>
                </div>
              ))
            ) : (
              dedicatedPlans.map((plan) => (
                <div key={plan.name} className="text-left">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <p className="text-sm text-gray-500">{plan.specifications}</p>
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-2"
                    onClick={() => handleSelectPlan(plan.name)}
                  >
                    Select
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Review and Confirm</h2>
          <div className="text-left mb-4">
            <p><span className="font-semibold">Server Name:</span> {serverName}</p>
            <p><span className="font-semibold">Location:</span> {selectedLocation}</p>
            <p><span className="font-semibold">CPU Type:</span> {selectedCpuType}</p>
            <p><span className="font-semibold">Plan:</span> {selectedPlan}</p>
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Setup Cloud VPS
          </button>
        </section>
      )}

      {step === 6 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Cloud VPS Setup Complete</h2>
          <div className="text-left mb-4">
            <p><span className="font-semibold">Server Name:</span> {serverName}</p>
            <p><span className="font-semibold">Location:</span> {selectedLocation}</p>
            <p><span className="font-semibold">CPU Type:</span> {selectedCpuType}</p>
            <p><span className="font-semibold">Plan:</span> {selectedPlan}</p>
            <p><span className="font-semibold">IPv4 Address:</span> {ipv4Address}</p>
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSetupCloudVPS}
          >
            Setup Another Cloud VPS
          </button>
        </section>
      )}

      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-blue-600">First Name:</label>
            <input 
              type="text" 
              id="firstName" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-blue-600">Last Name:</label>
            <input 
              type="text" 
              id="lastName" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-blue-600">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-blue-600">Username:</label>
            <input 
              type="text" 
              id="username" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-blue-600">Password:</label>
            <input 
              type="password" 
              id="password" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-blue-600">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmPassword" 
              className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;
