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
                <p className="text-gray-300">We pride ourselves on fast response times to keep your applications running smoothly.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md text-left">
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">Reliability</h3>
                <p className="text-gray-300">Our infrastructure is designed for reliability, ensuring consistent performance for your projects.</p>
              </div>
            </div>
          </section>
        </section>
      )}
    </main>
  );
};

export default Home;
