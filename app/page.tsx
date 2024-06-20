"use client";


import React, { useState } from 'react';
import Image from 'next/image';

interface Plan {
  name: string;
  description: string;
  specifications: string;
}

const Home: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [serverName, setServerName] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCpuType, setSelectedCpuType] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [vpsCreated, setVpsCreated] = useState<boolean>(false);
  const [ipv4Address, setIpv4Address] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

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

  const handleSelectPlan = (plan: string) => {
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

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
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
    setIsRegistered(true); // Simulating registration success
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

  const sharedPlans: Plan[] = [
    { name: 'CX-01', description: 'Cheap for small projects', specifications: '1GB of RAM, 1 Core, 20GB of Storage' },
    { name: 'CX-02', description: 'Affordable for startups', specifications: '2GB of RAM, 2 Cores, 40GB of Storage' },
    { name: 'CX-03', description: 'Balanced for growing applications', specifications: '4GB of RAM, 2 Cores, 80GB of Storage' },
    { name: 'CX-04', description: 'Powerful for multiple applications', specifications: '8GB of RAM, 4 Cores, 160GB of Storage' },
    { name: 'CX-05', description: 'High-performance for intensive tasks', specifications: '16GB of RAM, 6 Cores, 320GB of Storage' },
    { name: 'CX-06', description: 'Ultimate for enterprise-grade solutions', specifications: '32GB of RAM, 8 Cores, 640GB of Storage' }
  ];

  const dedicatedPlans: Plan[] = [
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
        </section>
      )}

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

      {/* Cloud VPS Configuration */}
      {!vpsCreated && step === 1 && !isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Setup Your Cloud VPS</h2>
          <form onSubmit={handleSaveServerName} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="serverName" className="text-gray-300 mb-2">Server Name</label>
              <input
                type="text"
                id="serverName"
                value={serverName}
                onChange={(e) => setServerName(e.target.value)}
                placeholder="Enter server name"
                className="px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Next</button>
          </form>
        </section>
      )}

      {/* Select Location */}
      {!vpsCreated && step === 2 && !isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Select Location</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div onClick={() => handleSelectLocation('Frankfurt - Germany')} className="cursor-pointer">
              <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="Frankfurt - Germany" width={300} height={200} className="h-24 mb-2" />
              <p className="text-gray-600">Frankfurt - Germany</p>
            </div>
            <div onClick={() => handleSelectLocation('Ashburn Virginia')} className="cursor-pointer">
              <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="Ashburn Virginia" width={300} height={200} className="h-24 mb-2" />
              <p className="text-gray-600">Ashburn Virginia</p>
            </div>
          </div>
        </section>
      )}

      {/* Select CPU Type */}
      {!vpsCreated && step === 3 && !isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Select CPU Type</h2>
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

      {/* Select Plan */}
      {!vpsCreated && step === 4 && !isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Select Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCpuType === 'Shared' ? (
              sharedPlans.map((plan) => (
                <div key={plan.name} onClick={() => handleSelectPlan(plan.name)} className="cursor-pointer bg-gray-700 p-6 rounded-lg shadow-md text-left">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                  <p className="text-gray-300">{plan.specifications}</p>
                </div>
              ))
            ) : (
              dedicatedPlans.map((plan) => (
                <div key={plan.name} onClick={() => handleSelectPlan(plan.name)} className="cursor-pointer bg-gray-700 p-6 rounded-lg shadow-md text-left">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{plan.name}</h3>
                  <p className="text-gray-300">{plan.description}</p>
                  <p className="text-gray-300">{plan.specifications}</p>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {/* Review and Confirm */}
      {!vpsCreated && step === 5 && !isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Review and Confirm</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-300"><span className="font-bold">Server Name:</span> {serverName}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">Location:</span> {selectedLocation}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">CPU Type:</span> {selectedCpuType}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">Plan:</span> {selectedPlan}</p>
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Create VPS</button>
          </div>
        </section>
      )}

      {/* VPS Setup Complete */}
      {vpsCreated && !isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Cloud VPS Setup Complete</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-300"><span className="font-bold">Server Name:</span> {serverName}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">Location:</span> {selectedLocation}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">CPU Type:</span> {selectedCpuType}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">Plan:</span> {selectedPlan}</p>
            <p className="text-lg text-gray-300"><span className="font-bold">IPv4 Address:</span> {ipv4Address}</p>
            <button onClick={handleSetupCloudVPS} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Setup Another VPS</button>
          </div>
        </section>
      )}

      {/* User Registration */}
      {!isRegistered && (
        <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400">Register Your Account</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="text-gray-300">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="px-4 py-2 bg-gray-700 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="text-gray-300">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="px-4 py-2 bg-gray-700 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-gray-300">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 bg-gray-700 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="username" className="text-gray-300">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-2 bg-gray-700 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 bg-gray-700 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="text-gray-300">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="px-4 py-2 bg-gray-700 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Register</button>
          </form>
        </section>
      )}
      
      {/* Footer */}
      <footer className="w-full max-w-5xl flex items-center justify-between text-gray-400 text-sm mt-8">
        <p>&copy; 2024 LylaNodes, Inc. All rights reserved.</p>
        <div>
          <a href="#" className="mr-4 hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
