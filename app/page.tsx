import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [step, setStep] = useState(1);

  const handleCreateCloud = () => {
    setStep(2); // Proceed to step 2 on button click
  };

  const handlePreviousStep = () => {
    setStep(1); // Go back to step 1
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="w-full max-w-5xl flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">LylaNodes</h1>
          <p className="text-sm">/ VirtuHost</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Company</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">TrestHost</h2>
        <p className="text-sm mb-4">Your Premier VPS Hosting Solution. Elevate Your Web Presence with Top-Tier Services!</p>

        {/* Create Cloud Button */}
        {step === 1 && (
          <button
            onClick={handleCreateCloud}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
          >
            Create Cloud Server
          </button>
        )}

        {/* Step 2: Cloud Server Configuration */}
        {step === 2 && (
          <div className="text-left">
            <h3 className="text-blue-500 text-xl font-semibold mb-4">Let's get your new cloud server setup</h3>
            <button
              onClick={handlePreviousStep}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md shadow-md mr-4 transition duration-300"
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
            >
              Cloud Server Configuration
            </button>

            {/* Input for Cloud Server Name */}
            <div className="mt-4">
              <label htmlFor="cloudServerName" className="block text-sm font-semibold mb-2">Enter a name for your cloud server:</label>
              <input
                type="text"
                id="cloudServerName"
                name="cloudServerName"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        )}

        {/* Placeholder for future options */}
        {step === 3 && (
          <div>
            <h3 className="text-blue-500 text-xl font-semibold mb-4">Coming soon. Option coming soon.</h3>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-16 mb-4 text-center text-gray-500 text-sm">
        <p>&copy; 2019 - 2024 - All Rights Reserved. Made with ❤️ by LylaNodes</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">About</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Resources</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Features</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Pricing</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Services</a>
        </div>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Legal</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Imprint</a>
        </div>
      </footer>
    </main>
  );
}
