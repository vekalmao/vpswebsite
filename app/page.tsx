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

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate sign-up logic - set isSignedUp to true and clear sign-up form
    setIsSignedUp(true);
    setShowSignUpForm(false);
    alert('Sign up successful!');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulate sign-in logic - set isSignedUp to true and clear sign-in form
    setIsSignedUp(true);
    setShowSignInForm(false);
    alert('Sign in successful!');
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowSignInForm(false); // Ensure only one form is visible at a time
  };

  const toggleSignInForm = () => {
    setShowSignInForm(!showSignInForm);
    setShowSignUpForm(false); // Ensure only one form is visible at a time
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

      {!isSignedUp && (
        <section className="w-full max-w-5xl p-8 text-center">
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
          <button
            className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
            onClick={toggleSignUpForm}
          >
            Sign Up
          </button>
          <p className="mt-4 text-gray-300">Already have an account? <button
            className="text-white hover:text-yellow-400"
            onClick={toggleSignInForm}
          >
            Sign In
          </button></p>
        </section>
      )}

      {isSignedUp && (
        <section className="w-full max-w-5xl p-8 text-center">
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
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setStep(1)}
          >
            Create Cloud VPS
          </button>
        </section>
      )}

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
            <div onClick={() => handleSelectLocation('Ashburn, Virginia')} className="cursor-pointer">
              <img src="/images/ashburn.jpg" alt="USA" width={300} height={200} className="h-24 mb-2" />
              <p className="text-gray-600">Ashburn, Virginia</p>
            </div>
            <div onClick={() => handleSelectLocation('Frankfurt, Germany')} className="cursor-pointer">
              <img src="/images/frankfurt.jpg" alt="Germany" width={300} height={200} className="h-24 mb-2" />
              <p className="text-gray-600">Frankfurt, Germany</p>
            </div>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Choose Your CPU Type</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div onClick={() => handleSelectCpuType('Shared')} className="cursor-pointer">
              <img src="/images/shared-cpu.jpg" alt="Shared CPU" width={300} height={200} className="h-24 mb-2" />
              <p className="text-gray-600">Shared</p>
            </div>
            <div onClick={() => handleSelectCpuType('Dedicated')} className="cursor-pointer">
              <img src="/images/dedicated-cpu.jpg" alt="Dedicated CPU" width={300} height={200} className="h-24 mb-2" />
              <p className="text-gray-600">Dedicated</p>
            </div>
          </div>
        </section>
      )}

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

      {step === 6 && (
        <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Setup Process Complete</h2>
          <p className="text-lg text-gray-600 mb-4">Your VPS has been successfully deployed!</p>
          <div className="mb-4 text-left text-blue-600">
            <p><strong>Server Name:</strong> {serverName}</p>
            <p><strong>Location:</strong> {selectedLocation}</p>
            <p><strong>CPU Type:</strong> {selectedCpuType}</p>
            <p><strong>Plan:</strong> {selectedPlan}</p>
            <p><strong>IPv4 Address:</strong> {ipv4Address}</p>
          </div>
          <p className="text-lg text-gray-600 mb-4">You can now SSH into your VPS using the following command:</p>
          <pre className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300">ssh {username}@{ipv4Address}</pre>
        </section>
      )}

      {showSignUpForm && !isSignedUp && (
        <section className="w-full max-w-xs bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sign Up</h2>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="signup-username" className="block text-left mb-2 text-blue-600">Username:</label>
              <input
                type="text"
                id="signup-username"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="signup-email" className="block text-left mb-2 text-blue-600">Email:</label>
              <input
                type="email"
                id="signup-email"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-left mb-2 text-blue-600">Password:</label>
              <input
                type="password"
                id="signup-password"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </section>
      )}

      {showSignInForm && !isSignedUp && (
        <section className="w-full max-w-xs bg-white rounded-lg p-8 shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Sign In</h2>
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label htmlFor="signin-username" className="block text-left mb-2 text-blue-600">Username:</label>
              <input
                type="text"
                id="signin-username"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="signin-password" className="block text-left mb-2 text-blue-600">Password:</label>
              <input
                type="password"
                id="signin-password"
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </section>
      )}
    </main>
  );
};

export default Home;
