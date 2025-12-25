import { useState } from 'react'

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqs = [
    {
      question: 'How does Arena 51 work?',
      answer: 'Arena 51 connects venue owners with players. Venues list their spaces with real-time availability, and players can instantly book and pay online. Simple as that.'
    },
    {
      question: 'What types of venues can I book?',
      answer: 'We support turfs, courts (cricket, badminton, tennis), esports arenas, gaming arcades, and multi-purpose sports facilities. If it\'s a space for sports or gaming, we\'ve got it.'
    },
    {
      question: 'Is Arena 51 available in my city?',
      answer: 'We\'re focused on Tier-2 and Tier-3 cities across India. Check our platform to see if your city is listed, or contact us to bring Arena 51 to your area.'
    },
    {
      question: 'Can I host tournaments on Arena 51?',
      answer: 'Yes. Our Pro and Business plans include tournament hosting, leaderboards, and team management tools. Perfect for building a community around your venue.'
    },
    {
      question: 'How do payments work?',
      answer: 'All payments are processed securely through our platform. We support UPI, cards, and local payment methods. Venue owners receive payouts on a regular schedule.'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
                      expandedIndex === i ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {expandedIndex === i && (
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
