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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#appstore"
            className="px-5 py-3 rounded-xl bg-black hover:bg-gray-950 text-white transition ease-out duration-200 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 w-fit border border-gray-800"
          >
            {/* Apple Logo */}
            <img src="https://i.postimg.cc/tggCchGf/app-store-(1).png" alt="App Store" className="w-8 h-8" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-light">Download on the</span>
              <span className="text-base font-semibold leading-tight">App Store</span>
            </div>
          </a>
          <a
            href="#playstore"
            className="px-5 py-3 rounded-xl bg-black hover:bg-gray-950 text-white transition ease-out duration-200 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 w-fit border border-gray-800"
          >
            {/* Google Play Logo */}
            <img src="https://i.postimg.cc/0jzkNxNq/app.png" alt="" className="w-8 h-8" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-light">Get it on</span>
              <span className="text-base font-semibold leading-tight">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
