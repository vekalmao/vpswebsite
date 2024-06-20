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

  const handleSaveServerName = () => {
    setStep(2);
  };

  const handleSelectLocation = (location: string) => { // Explicitly define location as string
    setSelectedLocation(location);
    setStep(3);
  };

  const handleSelectCpuType = (cpuType: string) => { // Example: cpuType could be 'Shared' or 'Dedicated'
    setSelectedCpuType(cpuType);
    setStep(4);
  };

  const handleSelectPlan = (plan: string) => { // Example: plan could be 'CX-01', 'DX-01', etc.
    setSelectedPlan(plan);
    setStep(5);
  };

  const handleSubmit = () => {
    // Assuming payment method is validated and added
    setVpsCreated(true);
    const randomIpv4 = generateRandomIpv4();
    setIpv4Address(randomIpv4);
    // Proceed to payment method
    setStep(7); // Step 7 could represent the payment step
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
    'Singapore (Asia)',
    'India',
    'New York',
    'Europe',
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
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Let's Get Your New Cloud Server Setup</h2>
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
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">{selectedCpuType === 'Shared' ? 'Shared CPU' : 'Dedicated CPU'} Plans</h2>
          <div className="grid grid-cols-2 gap-8">
            {selectedCpuType === 'Shared' ? (
              sharedPlans.map((plan) => (
                <div key={plan.name} className="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition duration-300" onClick={() => handleSelectPlan(plan.name)}>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  <p className="text-sm text-gray-600">{plan.specifications}</p>
                </div>
              ))
            ) : (
              dedicatedPlans.map((plan) => (
                <div key={plan.name} className="bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition duration-300" onClick={() => handleSelectPlan(plan.name)}>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  <p className="text-sm text-gray-600">{plan.specifications}</p>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Review and Confirm</h2>
          <div className="mb-4">
            <p className="text-gray-600">Server Name: {serverName}</p>
            <p className="text-gray-600">Location: {selectedLocation}</p>
            <p className="text-gray-600">CPU Type: {selectedCpuType}</p>
            <p className="text-gray-600">Plan: {selectedPlan}</p>
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Pay Now!
          </button>
        </section>
      )}

      {step === 6 && vpsCreated && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Your Cloud VPS is Ready!</h2>
          <div className="mb-4">
            <p className="text-gray-600">Server Name: {serverName}</p>
            <p className="text-gray-600">Location: {selectedLocation}</p>
            <p className="text-gray-600">CPU Type: {selectedCpuType}</p>
            <p className="text-gray-600">Plan: {selectedPlan}</p>
            <p className="text-gray-600">IPv4 Address: {ipv4Address}</p>
          </div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => setStep(1)}
          >
            Create Another Cloud VPS
          </button>
        </section>
      )}

      {step === 7 && !vpsCreated && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Payment Details</h2>
          <form className="flex flex-col space-y-4 max-w-md mx-auto">
            <div>
              <label htmlFor="cardNumber" className="text-blue-600">Card Number:</label>
              <input type="text" id="cardNumber" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label htmlFor="expiryDate" className="text-blue-600">Expiry Date:</label>
              <input type="text" id="expiryDate" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label htmlFor="cvv" className="text-blue-600">CVV:</label>
              <input type="text" id="cvv" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
            </div>
            <div>
              <label htmlFor="cardName" className="text-blue-600">Name on Card:</label>
              <input type="text" id="cardName" className="border border-gray-300 rounded-lg px-3 py-2 w-full" />
            </div>
            <button 
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>
      )}

      <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-lg mb-8 text-center text-white">
        <h2 className="text-3xl font-extrabold mb-8">Our Features</h2>
        <p className="text-lg text-gray-300 mb-12">We offer top-tier features to all of our clients, no matter the plan! We believe in giving everyone the best experience possible.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">DDoS Protection</h3>
            <p className="text-lg text-gray-300">Protect your server from malicious attacks.</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Fast</h3>
            <p className="text-lg text-gray-300">Experience lightning-fast performance.</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Reliable</h3>
            <p className="text-lg text-gray-300">Our servers have a 99.99% uptime guarantee.</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Cheap</h3>
            <p className="text-lg text-gray-300">Affordable pricing for everyone.</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Very Fast Support</h3>
            <p className="text-lg text-gray-300">Get help whenever you need it, 24/7.</p>
          </div>
        </div>
        {step !== 7 && (
          <button 
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={() => setStep(1)}
          >
            Create Cloud VPS
          </button>
        )}
      </section>

      <footer className="w-full max-w-5xl flex items-center justify-between">
        <p className="text-sm text-gray-600">© 2024 LylaNodes. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:text-purple-900">Privacy Policy</a>
          <a href="#" className="text-blue-600 hover:text-purple-900">Terms of Service</a>
          <a href="#" className="text-blue-600 hover:text-purple-900">Cookie Policy</a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
