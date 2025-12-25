export default function Comparison() {
  const whatsappIssues = [
    'Manual coordination',
    'No instant confirmation',
    'Payment hassles',
    'Lost messages'
  ]

  const arena51Benefits = [
    'Instant booking in seconds',
    'Real-time availability',
    'Secure payments',
    'Complete booking history'
  ]

  return (
    <section id="competitions" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Arena 51 beats WhatsApp booking
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mt-12">
            {/* WhatsApp Booking */}
            <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-300 mb-4">
                WhatsApp Booking
              </h3>
              <ul className="space-y-3 text-red-800 dark:text-red-400">
                {whatsappIssues.map((issue, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {issue}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arena 51 */}
            <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-4">
                Arena 51
              </h3>
              <ul className="space-y-3 text-green-800 dark:text-green-400">
                {arena51Benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
