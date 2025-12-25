export default function Hero() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="text-center animate-fade-in">
          {/* Headline */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 dark:text-white max-w-3xl mx-auto">
            Book Sports & Esports Venues in Seconds
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Arena 51 is a simple platform to book turfs, courts, esports arenas, and join competitions — built for emerging cities.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#signup" className="px-6 py-3 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white transition ease-out duration-200 hover:shadow-md hover:-translate-y-0.5">
              Get Started
            </a>
            <a href="#demo" className="px-6 py-3 rounded-lg font-semibold bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 transition ease-out duration-200 hover:shadow-md hover:-translate-y-0.5">
              View Demo
            </a>
          </div>

          {/* Screenshot Placeholder */}
          <div className="mt-16 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl h-72 max-w-4xl mx-auto flex items-center justify-center transition-colors">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium">Product Screenshot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
