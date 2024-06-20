"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [step, setStep] = useState(0); // 0 for home page, then steps 1-6 for the setup process
  const [serverName, setServerName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCpuType, setSelectedCpuType] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
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
                onClick={() => setStep(0)}
              >
                Register
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Registration Form */}
      {!isRegistered && (
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

      {/* VPS Creation Steps */}
      {isRegistered && (
        <>
          {step === 0 && (
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
              <button
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
                onClick={() => setStep(1)}
              >
                Create Cloud VPS
              </button>
            </section>
          )}

          {step === 1 && (
            <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Let&apos;s Get Your New Cloud Server Setup</h2>
              <div className="mb-4">
                <label className="block text-left mb-2 text-gray-300">Enter a name for your cloud server:</label>
                <input
                  type="text"
                  className="border border-gray-700 bg-gray-900 text-white rounded-lg px-3 py-2 w-full"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                />
              </div>
              <button
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                onClick={handleSaveServerName}
              >
                Next
              </button>
            </section>
          )}

          {step === 2 && (
            <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Select Your Location</h2>
              <div className="flex justify-center space-x-8 mb-8">
                <div onClick={() => handleSelectLocation('Ashburn, Virginia')} className="cursor-pointer">
                  <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="USA" width={300} height={200} className="h-24 mb-2" />
                  <p className="text-gray-300">Ashburn, Virginia</p>
                </div>
                <div onClick={() => handleSelectLocation('Frankfurt, Germany')} className="cursor-pointer">
                  <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="Germany" width={300} height={200} className="h-24 mb-2" />
                  <p className="text-gray-300">Frankfurt, Germany</p>
                </div>
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Choose Your CPU Type</h2>
              <div className="flex justify-center space-x-8 mb-8">
                <button
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                  onClick={() => handleSelectCpuType('Shared')}
                >
                  Shared CPU
                </button>
                <button
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                  onClick={() => handleSelectCpuType('Dedicated')}
                >
                  Dedicated CPU
                </button>
              </div>
            </section>
          )}

          {step === 4 && (
            <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Select Your Plan</h2>
              <div className="flex justify-center space-x-8 mb-8">
                <button
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                  onClick={() => handleSelectPlan('Basic')}
                >
                  Basic Plan
                </button>
                <button
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                  onClick={() => handleSelectPlan('Pro')}
                >
                  Pro Plan
                </button>
              </div>
            </section>
          )}

          {step === 5 && (
            <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Review Your Selections</h2>
              <div className="text-left text-gray-300 mb-8">
                <p><strong>Server Name:</strong> {serverName}</p>
                <p><strong>Location:</strong> {selectedLocation}</p>
                <p><strong>CPU Type:</strong> {selectedCpuType}</p>
                <p><strong>Plan:</strong> {selectedPlan}</p>
              </div>
              <button
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
                onClick={handleSubmit}
              >
                Deploy VPS
              </button>
            </section>
          )}

          {/* Final VPS creation confirmation */}
          {step === 6 && (
            <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 shadow-md mb-8 text-center">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Your VPS Has Been Created!</h2>
              <div className="text-left text-gray-300">
                <p><strong>Server Name:</strong> {serverName}</p>
                <p><strong>Location:</strong> {selectedLocation}</p>
                <p><strong>CPU Type:</strong> {selectedCpuType}</p>
                <p><strong>Plan:</strong> {selectedPlan}</p>
                <p><strong>IPv4 Address:</strong> {ipv4Address}</p>
              </div>
            </section>
          )}
        </>
      )}

      {/* Footer */}
      <footer className="mt-16 mb-4 text-center text-gray-500 text-sm">
        <p>&copy; 2019 - 2024 - All Rights Reserved. Made with ❤️ by LylaNodes</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400">Terms of Service</a>
          <a href="#" className="hover:text-yellow-400">Contact Us</a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
