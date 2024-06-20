import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      {/* Header with Navigation */}
      <header className="w-full max-w-5xl flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">VirtuHost</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Create Cloud Button */}
      <section className="w-full max-w-5xl bg-white rounded-lg p-8 shadow-md mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
        <a href="/dashboard/server/create" className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">
          Let&apos;s get your new<br />cloud server setup
        </a>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl grid grid-cols-2 gap-8">
        <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Docs</h3>
          <p className="text-sm text-gray-600">Find in-depth information about VPS features and API.</p>
        </a>
        <a href="#" className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Learn</h3>
          <p className="text-sm text-gray-600">Learn about VPS in an interactive course with quizzes!</p>
        </a>
        {/* Add more feature links */}
      </section>

      {/* Footer */}
      <footer className="mt-16 mb-4 text-center text-gray-500 text-sm">
        <p>&copy; 2024 VirtuHost. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact Us</a>
        </div>
      </footer>
    </main>
  );
}
