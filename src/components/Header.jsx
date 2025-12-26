import { useState } from 'react'

export default function Header({ isDark, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <nav className=" px-6">
        <div className="flex items-center h-12 sm:h-14 gap-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
              Arena 51
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-9 flex-grow">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Features
            </a>
            <a href="#venue" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Venue
            </a>
            <a href="#competitions" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Competitions
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 ml-auto flex-shrink-0">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-900 dark:text-white"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>

            <a href="#login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition">
              Login
            </a>
            <a href="#signup" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium transition ease-out duration-200">
              Join Waitlist
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Features
              </a>
              <a href="#venue" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Venue
              </a>
              <a href="#competitions" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Competitions
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
