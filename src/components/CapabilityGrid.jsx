export default function CapabilityGrid() {
  const capabilities = ['Turfs', 'Courts', 'Esports Arenas', 'Arcades', 'Tournaments', 'Team Play']

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0B0F14] transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            One Platform. Every Sport.
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Support for all types of venues and activities
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {capabilities.map((cap, i) => (
            <span key={i} className="inline-block px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium hover:shadow-md transition ease-out duration-200">
              {cap}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
