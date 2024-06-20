import React from 'react'; // Import React

export default function Home() {
  const [step, setStep] = React.useState(1); // State to manage steps

  // Function to handle clicking "Create Cloud Server" button
  const handleCreateCloud = () => {
    setStep(2); // Proceed to step 2
  };

  // Function to handle clicking "Previous" button
  const handlePrevious = () => {
    setStep(1); // Go back to step 1
  };

  // Rendering based on step
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
        
        {/* Render based on step */}
        {step === 1 && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={handleCreateCloud}>
            Create Cloud Server
          </button>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Let's get your new cloud server setup</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mr-4" onClick={handlePrevious}>
              Previous
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Cloud Server Configuration
            </button>
            <div className="mt-4">
              <label htmlFor="serverName" className="block text-left mb-2">Enter a name for your cloud server:</label>
              <input type="text" id="serverName" name="serverName" className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
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
