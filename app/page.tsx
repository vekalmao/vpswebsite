// pages/index.tsx
import React, { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [step, setStep] = useState(1);
  const [serverName, setServerName] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCpuType, setSelectedCpuType] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [vpsCreated, setVpsCreated] = useState<boolean>(false);
  const [ipv4Address, setIpv4Address] = useState<string>('');

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

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Header section */}
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

      {/* Main Content section */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Let&apos;s Get Your New Cloud Server Setup</h2>
            <div className="mb-4">
              <label className="block text-left mb-2 text-blue-600">Enter a name for your cloud server:</label>
              <input 
                type="text" 
                className="border border-gray-300 rounded-lg px-3 py-2 w-full text-blue-600" // Text color set to blue
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
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Select Your Location</h2>
            <div className="flex justify-center space-x-8 mb-8">
              <div onClick={() => handleSelectLocation('Ashburn, Virginia')} className="cursor-pointer">
                <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="USA" width={300} height={200} className="h-24 mb-2" />
                <p className="text-gray-600">Ashburn, Virginia</p>
              </div>
              <div onClick={() => handleSelectLocation('Frankfurt, Germany')} className="cursor-pointer">
                <Image src="https://media.earlyexperts.net/wp-content/uploads/2018/12/displaying-american-flag.jpg" alt="Germany" width={300} height={200} className="h-24 mb-2" />
                <p className="text-gray-600">Frankfurt, Germany</p>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
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
          </>
        )}

        {step === 4 && (
          <>
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
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{selectedPlan} Details</h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{selectedPlan}</h3>
              {selectedPlan.startsWith('CX') ? (
                <p className="text-sm text-gray-600">Cheap for small projects</p>
              ) : (
                <p className="text-sm text-gray-600">Prices are mid, for big projects</p>
              )}
              {selectedPlan.startsWith('CX') ? (
                <p className="text-sm text-gray-600">1GB of RAM, 1 Core, 20GB of Storage</p>
              ) : (
                <p className="text-sm text-gray-600">4GB of RAM, 4 Cores, 100GB of Storage</p>
              )}
            </div>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </>
        )}

        {step === 6 && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Your Servers</h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Server Name: {serverName}</h3>
              <p className="text-sm text-gray-600">IP: {ipv4Address}</p>
              <p className="text-sm text-gray-600">ssh root@{ipv4Address}</p>
            </div>
          </>
        )}
      </section>

      {/* Footer section */}
      <footer className="mt-16 mb-4 text-center text-gray-500 text-sm">
        <p>&copy; 2019 - 2024 - All Rights Reserved. Made with ❤️ by LylaNodes</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Contact</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Resources</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Services</a>
        </div>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Legal</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-900 dark:hover:text-blue-600">Imprint</a>
        </div>
      </footer>
    </main>
  );
}

export default Home;
