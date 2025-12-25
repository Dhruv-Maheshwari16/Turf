export default function CTA() {
  return (
    <section className="py-20 bg-indigo-600 dark:bg-indigo-700 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to transform your venue?
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of venues already using Arena 51 to streamline bookings and grow their business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#signup"
            className="px-8 py-4 rounded-lg font-semibold bg-white hover:bg-gray-100 text-indigo-600 transition ease-out duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started Free
          </a>
          <a
            href="#demo"
            className="px-8 py-4 rounded-lg font-semibold bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-800 dark:hover:bg-indigo-900 text-white border-2 border-white/30 transition ease-out duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
