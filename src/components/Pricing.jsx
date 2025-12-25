export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,999',
      description: 'Perfect for small venues',
      features: [
        'Up to 50 bookings/month',
        'Basic analytics',
        'Email support'
      ],
      buttonText: 'Get Started',
      featured: false
    },
    {
      name: 'Pro',
      price: '₹5,999',
      description: 'For growing venues',
      features: [
        'Unlimited bookings',
        'Advanced analytics',
        'Tournament hosting',
        'Priority support'
      ],
      buttonText: 'Get Started',
      featured: true
    },
    {
      name: 'Business',
      price: '₹12,999',
      description: 'For venue chains',
      features: [
        'Multi-location support',
        'White-label options',
        'API access',
        'Dedicated support'
      ],
      buttonText: 'Contact Sales',
      featured: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-[#0B0F14] transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that works best for your venue
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 transition ${
                plan.featured
                  ? 'border-2 border-indigo-600 dark:border-indigo-500 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg'
                  : 'border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                  plan.featured
                    ? 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
