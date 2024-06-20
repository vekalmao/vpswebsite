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
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentError('');
    setPaymentSuccess(false);

    if (!validateCardDetails()) {
      setPaymentError('ERROR: Invalid Credit card information');
      return;
    }

    setPaymentSuccess(true);
    setVpsCreated(true);
    const randomIpv4 = generateRandomIpv4();
    setIpv4Address(randomIpv4);
    setStep(6);
  };

  const validateCardDetails = () => {
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3,4}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    return (
      cardNumberRegex.test(cardNumber) &&
      cvvRegex.test(cvv) &&
      expiryDateRegex.test(expiryDate) &&
      cardName.trim().length > 0
    );
  };

  const generateRandomIpv4 = () => {
    const ipOctet = () => Math.floor(Math.random() * 256);
    return `${ipOctet()}.${ipOctet()}.${ipOctet()}.${ipOctet()}`;
  };

  const sharedPlans = [
    { name: 'CX-01', description: 'Cheap for small projects', specifications: '1GB of RAM, 1 Core, 20GB of Storage', price: 10 },
    { name: 'CX-02', description: 'Affordable for startups', specifications: '2GB of RAM, 2 Cores, 40GB of Storage', price: 20 },
    { name: 'CX-03', description: 'Balanced for growing applications', specifications: '4GB of RAM, 2 Cores, 80GB of Storage', price: 30 },
    { name: 'CX-04', description: 'Powerful for multiple applications', specifications: '8GB of RAM, 4 Cores, 160GB of Storage', price: 40 },
    { name: 'CX-05', description: 'High-performance for intensive tasks', specifications: '16GB of RAM, 6 Cores, 320GB of Storage', price: 50 },
    { name: 'CX-06', description: 'Ultimate for enterprise-grade solutions', specifications: '32GB of RAM, 8 Cores, 640GB of Storage', price: 60 }
  ];

  const dedicatedPlans = [
    { name: 'DX-01', description: 'Prices are mid, for big projects', specifications: '4GB of RAM, 4 Cores, 100GB of Storage', price: 70 },
    { name: 'DX-02', description: 'Balanced for growing applications', specifications: '8GB of RAM, 4 Cores, 200GB of Storage', price: 80 },
    { name: 'DX-03', description: 'Powerful for multiple applications', specifications: '16GB of RAM, 8 Cores, 400GB of Storage', price: 90 },
    { name: 'DX-04', description: 'High-performance for intensive tasks', specifications: '32GB of RAM, 16 Cores, 800GB of Storage', price: 100 },
    { name: 'DX-05', description: 'Ultimate for enterprise-grade solutions', specifications: '64GB of RAM, 32 Cores, 1600GB of Storage', price: 110 },
    { name: 'DX-06', description: 'Extreme power for specialized tasks', specifications: '128GB of RAM, 64 Cores, 3200GB of Storage', price: 120 }
  ];

  const additionalLocations = [
    'Singapore (Asia)',
    'India',
    'New York',
    'Europe',
  ];

  const getCurrentPlanPrice = () => {
    const allPlans = [...sharedPlans, ...dedicatedPlans];
    const currentPlan = allPlans.find(plan => plan.name === selectedPlan);
    return currentPlan ? currentPlan.price : 0;
  };

  const currentPrice = getCurrentPlanPrice();
  const tax = currentPrice * 0.1; // 10% tax for demonstration
  const totalPrice = currentPrice + tax;

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
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Your Server Type</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <button 
              className={`border-2 p-4 rounded-lg ${selectedCpuType === 'shared' ? 'border-blue-600' : 'border-gray-300'}`}
              onClick={() => handleSelectCpuType('shared')}
            >
              <h3 className="font-semibold text-blue-600">Shared</h3>
              <p className="text-gray-600">Affordable and efficient</p>
            </button>
            <button 
              className={`border-2 p-4 rounded-lg ${selectedCpuType === 'dedicated' ? 'border-blue-600' : 'border-gray-300'}`}
              onClick={() => handleSelectCpuType('dedicated')}
            >
              <h3 className="font-semibold text-blue-600">Dedicated</h3>
              <p className="text-gray-600">Powerful and customizable</p>
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(selectedCpuType === 'shared' ? sharedPlans : dedicatedPlans).map((plan) => (
              <div key={plan.name} className={`border-2 p-4 rounded-lg ${selectedPlan === plan.name ? 'border-blue-600' : 'border-gray-300'}`}>
                <h3 className="font-semibold text-blue-600">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <p className="text-gray-600">{plan.specifications}</p>
                <p className="font-semibold text-gray-800">${plan.price}/month</p>
                <button 
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  onClick={() => handleSelectPlan(plan.name)}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {step === 5 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">Review Your Plan</h2>
          <div className="text-center text-blue-600">
            <p>Selected Plan: <span className="font-bold">{selectedPlan}</span></p>
            <p>Price: <span className="font-bold">${currentPrice}</span></p>
            <p>Tax (10%): <span className="font-bold">${tax.toFixed(2)}</span></p>
            <p>Total: <span className="font-bold">${totalPrice.toFixed(2)}</span></p>
          </div>

          <form className="mt-8 p-4 border-2 border-gray-300 rounded-lg" onSubmit={handlePaymentSubmit}>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Enter Your Payment Details</h3>
            <div className="mb-4">
              <label className="block text-left mb-2 text-blue-600">Card Number:</label>
              <input 
                type="text" 
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                maxLength="16"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2 text-blue-600">CVV:</label>
              <input 
                type="text" 
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength="4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2 text-blue-600">Expiration Date (MM/YY):</label>
              <input 
                type="text" 
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                maxLength="5"
                placeholder="MM/YY"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2 text-blue-600">Name on Card:</label>
              <input 
                type="text" 
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            {paymentError && <p className="text-red-600 mb-4">{paymentError}</p>}
            {paymentSuccess && <p className="text-green-600 mb-4">SUCCESSFUL: Credit card details are validated</p>}
            <button 
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Pay Now!
            </button>
          </form>
        </section>
      )}

      {step === 6 && vpsCreated && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">VPS Created Successfully!</h2>
          <p>Your VPS with the name <span className="font-bold">{serverName}</span> has been created.</p>
          <p>IPV4 Address: <span className="font-bold">{ipv4Address}</span></p>
        </section>
      )}
    </main>
  );
};

export default Home;
