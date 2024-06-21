"use client";


import React, { useState } from 'react';

const Home = () => {
  const [step, setStep] = useState(0); // 0 for home page, then steps 1-6 for the setup process
  const [serverName, setServerName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCpuType, setSelectedCpuType] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null); // null until a plan is selected
  const [vpsCreated, setVpsCreated] = useState(false);
  const [ipv4Address, setIpv4Address] = useState('');
  const [selectedUbuntuVersion, setSelectedUbuntuVersion] = useState('');
  const [selectedDebianVersion, setSelectedDebianVersion] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); // State to manage sign-up status
  const [showSignUpForm, setShowSignUpForm] = useState(false); // State to toggle sign-up form visibility
  const [showSignInForm, setShowSignInForm] = useState(false); // State to toggle sign-in form visibility

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

  const generateRandomIpv4 = () => {
    const ipOctet = () => Math.floor(Math.random() * 256);
    return `${ipOctet()}.${ipOctet()}.${ipOctet()}.${ipOctet()}`;
  };

  const handleBuyVPS = () => {
    setStep(1); // Start the setup process
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowSignInForm(false); // Ensure only one form is visible at a time
  };

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
    setShowSignUpForm(false); // Ensure only one form is visible at a time
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, e.g., API call
    console.log('Signing up with:', username, email, password);
    setIsSignedUp(true); // For demo, assume sign-up succeeds
    setShowSignUpForm(false); // Hide sign-up form after successful sign-up
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, e.g., API call
    console.log('Signing in with:', email, password);
    setIsSignedUp(true); // For demo, assume sign-in succeeds
    setShowSignInForm(false); // Hide sign-in form after successful sign-in
  };

  // Shared and dedicated plans arrays
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
    { name: 'DX-05', description: 'Ultimate for enterprise-grade solutions', specifications: '64GB of RAM, 32 Cores, 1600GB of Storage' }
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <header className="w-full max-w-5xl flex items-center justify-between py-8">
        <div>
          <h1 className="text-3xl font-bold text-white">LylaNodes</h1>
          <p className="text-sm text-white">/VirtuHost</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="services.tsx" className="text-white hover:text-yellow-400">Services</a></li>
            <li><a href="features.tsx" className="text-white hover:text-yellow-400">Features</a></li>
            <li><a href="company.tsx" className="text-white hover:text-yellow-400">Company</a></li>
          </ul>
        </nav>
      </header>

      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Welcome to VirtuHost | Vps Service</h2>
        <p className="text-gray-600 mb-4">We have the best, vps plans for you. Please Sign up or sign in by. Either clicking the Sign up button to sign up. Or the Sign in button to sign into your account.</p>
        <p className="text-gray-600 mb-4">Our Data Centers, are located in USA, India, Asia, Germany and we will have more coming soon. This is our first website release.</p>
        {isSignedUp && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleBuyVPS}
          >
            Buy a VPS Now!
          </button>
        )}
      </section>

      {/* Additional Section for Signed-Up Users */}
      {isSignedUp && (
        <section className="w-full max-w-5xl p-8 text-center bg-gray-800 rounded-lg shadow-md mb-8">
          <h2 className="text-5xl font-extrabold mb-8 text-white">Affordable VPS Hosting</h2>
          <p className="text-xl text-gray-300 mb-12">Deploy your virtual private server in seconds with our high-performance hosting solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">VPS Hosting</h3>
              <p className="text-lg text-gray-300">Starting at <span className="font-bold">$5.50/month</span></p>
            </div>
            <div className="bg-orange-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Game Hosting</h3>
              <p className="text-lg text-gray-300">Starting at <span className="font-bold">$4.40/month</span></p>
            </div>
            <div className="bg-purple-800 rounded-lg p-6 text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Lavalink Hosting</h3>
              <p className="text-lg text-gray-300">Coming Soon</p>
            </div>
          </div>
        </section>
      )}

      {/* Setup Process */}
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

      {/* Location Selection */}
      {step === 2 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Your Location</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div onClick={() => handleSelectLocation('Ashburn, Virginia')} className="cursor-pointer">
              <img src="/images/ashburn.jpg" alt="USA" width={300} height={200} className="h-24 mb-2 rounded-lg" />
              <p className="text-gray-600">Ashburn, Virginia</p>
            </div>
            <div onClick={() => handleSelectLocation('Frankfurt, Germany')} className="cursor-pointer">
              <img src="/images/frankfurt.jpg" alt="Germany" width={300} height={200} className="h-24 mb-2 rounded-lg" />
              <p className="text-gray-600">Frankfurt, Germany</p>
            </div>
          </div>
        </section>
      )}

      {/* CPU Type Selection */}
      {step === 3 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Choose Your CPU Type</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div onClick={() => handleSelectCpuType('Shared')} className="cursor-pointer">
              <img src="/images/shared-cpu.jpg" alt="Shared CPU" width={300} height={200} className="h-24 mb-2 rounded-lg" />
              <p className="text-gray-600">Shared</p>
            </div>
            <div onClick={() => handleSelectCpuType('Dedicated')} className="cursor-pointer">
              <img src="/images/dedicated-cpu.jpg" alt="Dedicated CPU" width={300} height={200} className="h-24 mb-2 rounded-lg" />
              <p className="text-gray-600">Dedicated</p>
            </div>
          </div>
        </section>
      )}

      {/* Plan Selection */}
      {step === 4 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select a Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedCpuType === 'Shared' && sharedPlans.map(plan => (
              <div
                key={plan.name}
                onClick={() => handleSelectPlan(plan.name)}
                className="cursor-pointer bg-gray-100 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <p className="text-gray-600">{plan.specifications}</p>
              </div>
            ))}
            {selectedCpuType === 'Dedicated' && dedicatedPlans.map(plan => (
              <div
                key={plan.name}
                onClick={() => handleSelectPlan(plan.name)}
                className="cursor-pointer bg-gray-100 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <p className="text-gray-600">{plan.specifications}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Review and Submit */}
      {step === 5 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Review and Submit</h2>
          <div className="mb-4 text-left text-blue-600">
            <p><strong>Server Name:</strong> {serverName}</p>
            <p><strong>Location:</strong> {selectedLocation}</p>
            <p><strong>CPU Type:</strong> {selectedCpuType}</p>
            <p><strong>Plan:</strong> {selectedPlan}</p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Create VPS
          </button>
        </section>
      )}

      {/* VPS Creation Success */}
      {step === 6 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">VPS Created Successfully!</h2>
          <p className="text-gray-600 mb-4">Your new VPS has been created.</p>
          <p className="text-gray-600 mb-4">IPv4 Address: {ipv4Address}</p>
          <p className="text-gray-600 mb-4">Ubuntu Version: {selectedUbuntuVersion}</p>
          <p className="text-gray-600 mb-4">Debian Version: {selectedDebianVersion}</p>
        </section>
      )}

      {/* Sign up and sign in forms */}
      {!isSignedUp && !showSignInForm && !showSignUpForm && (
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
            onClick={toggleSignUpForm}
          >
            Sign Up
          </button>
          <button
            className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
            onClick={toggleSignInForm}
          >
            Sign In
          </button>
        </div>
      )}

      {/* Sign up form */}
      {showSignUpForm && (
        <div className="w-full max-w-md">
          <form onSubmit={handleSignUp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-gray-800"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-gray-800"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-gray-800"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}

      {/* Sign in form */}
      {showSignInForm && (
        <div className="w-full max-w-md">
          <form onSubmit={handleSignIn} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-gray-800"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 text-gray-800"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      )}

      <footer className="w-full max-w-5xl flex justify-center py-8">
        <p className="text-gray-600">&copy; 2024 LylaNodes. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;



