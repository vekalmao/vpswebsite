"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [step, setStep] = useState(0);
  const [serverName, setServerName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCpuType, setSelectedCpuType] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [vpsCreated, setVpsCreated] = useState(false);
  const [ipv4Address, setIpv4Address] = useState('');
  const [paymentMethodAdded, setPaymentMethodAdded] = useState(false);

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
    if (paymentMethodAdded) {
      setVpsCreated(true);
      const randomIpv4 = generateRandomIpv4();
      setIpv4Address(randomIpv4);
      setStep(6);
    } else {
      setStep(7); // Step 7 for payment form
    }
  };

  const handleAddPaymentMethod = () => {
    setPaymentMethodAdded(true);
    setStep(5); // Go back to step 5 after payment method added
  };

  const generateRandomIpv4 = () => {
    const ipOctet = () => Math.floor(Math.random() * 256);
    return `${ipOctet()}.${ipOctet()}.${ipOctet()}.${ipOctet()}`;
  };

  const sharedPlans = [
    { name: 'CX-01', description: 'Cheap for small projects', specifications: '1GB of RAM, 1 Core, 20GB of Storage', price: '$5.50' },
    { name: 'CX-02', description: 'Affordable for startups', specifications: '2GB of RAM, 2 Cores, 40GB of Storage', price: '$10.00' },
    { name: 'CX-03', description: 'Balanced for growing applications', specifications: '4GB of RAM, 2 Cores, 80GB of Storage', price: '$20.00' },
    { name: 'CX-04', description: 'Powerful for multiple applications', specifications: '8GB of RAM, 4 Cores, 160GB of Storage', price: '$40.00' },
    { name: 'CX-05', description: 'High-performance for intensive tasks', specifications: '16GB of RAM, 6 Cores, 320GB of Storage', price: '$80.00' },
    { name: 'CX-06', description: 'Ultimate for enterprise-grade solutions', specifications: '32GB of RAM, 8 Cores, 640GB of Storage', price: '$160.00' }
  ];

  const dedicatedPlans = [
    { name: 'DX-01', description: 'Prices are mid, for big projects', specifications: '4GB of RAM, 4 Cores, 100GB of Storage', price: '$20.00' },
    { name: 'DX-02', description: 'Balanced for growing applications', specifications: '8GB of RAM, 4 Cores, 200GB of Storage', price: '$40.00' },
    { name: 'DX-03', description: 'Powerful for multiple applications', specifications: '16GB of RAM, 8 Cores, 400GB of Storage', price: '$80.00' },
    { name: 'DX-04', description: 'High-performance for intensive tasks', specifications: '32GB of RAM, 16 Cores, 800GB of Storage', price: '$160.00' },
    { name: 'DX-05', description: 'Ultimate for enterprise-grade solutions', specifications: '64GB of RAM, 32 Cores, 1600GB of Storage', price: '$320.00' },
    { name: 'DX-06', description: 'Extreme power for specialized tasks', specifications: '128GB of RAM, 64 Cores, 3200GB of Storage', price: '$640.00' }
  ];

  const paymentForm = (
    <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Pay Now!</h2>
      <div className="flex flex-col space-y-4">
        <input type="text" placeholder="Card Number" className="border border-gray-300 rounded-lg px-3 py-2 text-blue-600" />
        <input type="text" placeholder="Expiration Date" className="border border-gray-300 rounded-lg px-3 py-2 text-blue-600" />
        <input type="text" placeholder="CVV" className="border border-gray-300 rounded-lg px-3 py-2 text-blue-600" />
        <input type="text" placeholder="Name on Card" className="border border-gray-300 rounded-lg px-3 py-2 text-blue-600" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleAddPaymentMethod}>
          Submit
        </button>
      </div>
    </section>
  );

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

      {step === 0 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-5xl font-extrabold mb-8 text-blue-600">Affordable VPS Hosting</h2>
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
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={handleSaveServerName}
          >
            Create Cloud VPS
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Let's Get Your New Cloud Server Setup</h2>
          <div className="mb-4">
            <label className="block text-left mb-2 text-gray-600">Server Name</label>
            <input 
              type="text" 
              placeholder="Enter a name for your server" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:outline-none focus:border-blue-600"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
            />
          </div>
          <button 
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={() => handleSelectLocation('Frankfurt')}
          >
            Next
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Server Location</h2>
          <p className="text-gray-600 mb-4">Choose a location for your cloud server.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              className={`bg-gray-300 rounded-lg p-4 hover:bg-blue-600 hover:text-white transition duration-300 ${selectedLocation === 'Frankfurt' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => handleSelectLocation('Frankfurt')}
            >
              Frankfurt
            </button>
            <button 
              className={`bg-gray-300 rounded-lg p-4 hover:bg-blue-600 hover:text-white transition duration-300 ${selectedLocation === 'New York' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => handleSelectLocation('New York')}
            >
              New York
            </button>
            <button 
              className={`bg-gray-300 rounded-lg p-4 hover:bg-blue-600 hover:text-white transition duration-300 ${selectedLocation === 'Singapore' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => handleSelectLocation('Singapore')}
            >
              Singapore
            </button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select CPU Type</h2>
          <p className="text-gray-600 mb-4">Choose a CPU type for your cloud server.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              className={`bg-gray-300 rounded-lg p-4 hover:bg-blue-600 hover:text-white transition duration-300 ${selectedCpuType === 'Intel' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => handleSelectCpuType('Intel')}
            >
              Intel
            </button>
            <button 
              className={`bg-gray-300 rounded-lg p-4 hover:bg-blue-600 hover:text-white transition duration-300 ${selectedCpuType === 'AMD' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => handleSelectCpuType('AMD')}
            >
              AMD
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Plan</h2>
          <p className="text-gray-600 mb-4">Choose a plan for your cloud server.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCpuType === 'Intel' ? (
              sharedPlans.map((plan) => (
                <div 
                  key={plan.name}
                  className={`bg-gray-800 rounded-lg p-6 text-center shadow-lg cursor-pointer transition duration-300 ${selectedPlan === plan.name ? 'border-4 border-blue-600' : ''}`}
                  onClick={() => handleSelectPlan(plan.name)}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{plan.name}</h3>
                  <p className="text-lg text-gray-300 mb-2">{plan.description}</p>
                  <p className="text-lg text-gray-300">{plan.specifications}</p>
                  <p className="text-2xl font-semibold mt-4 text-blue-600">{plan.price}/month</p>
                </div>
              ))
            ) : (
              dedicatedPlans.map((plan) => (
                <div 
                  key={plan.name}
                  className={`bg-gray-800 rounded-lg p-6 text-center shadow-lg cursor-pointer transition duration-300 ${selectedPlan === plan.name ? 'border-4 border-blue-600' : ''}`}
                  onClick={() => handleSelectPlan(plan.name)}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-400">{plan.name}</h3>
                  <p className="text-lg text-gray-300 mb-2">{plan.description}</p>
                  <p className="text-lg text-gray-300">{plan.specifications}</p>
                  <p className="text-2xl font-semibold mt-4 text-blue-600">{plan.price}/month</p>
                </div>
              ))
            )}
          </div>
          <button 
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            onClick={handleSubmit}
          >
            {paymentMethodAdded ? 'Create Cloud VPS' : 'Pay Now!'}
          </button>
        </section>
      )}

      {step === 5 && paymentMethodAdded && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Congratulations! Your VPS is Ready</h2>
          <p className="text-gray-600 mb-4">Your virtual private server is set up and ready to use.</p>
          <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Server Details</h3>
            <p className="text-lg text-gray-300 mb-2"><span className="font-bold">Name:</span> {serverName}</p>
            <p className="text-lg text-gray-300 mb-2"><span className="font-bold">Location:</span> {selectedLocation}</p>
            <p className="text-lg text-gray-300 mb-2"><span className="font-bold">CPU Type:</span> {selectedCpuType}</p>
            <p className="text-lg text-gray-300 mb-2"><span className="font-bold">Plan:</span> {selectedPlan}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">IPv4:</span> {ipv4Address}</p>
          </div>
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => setStep(0)}
          >
            Create Another VPS
          </button>
        </section>
      )}

      {step === 7 && !paymentMethodAdded && paymentForm}

      <footer className="w-full max-w-5xl flex justify-center mt-8 text-gray-600">
        <p>&copy; 2024 LylaNodes. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
