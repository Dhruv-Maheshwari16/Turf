export default function TrustedBy() {
  const partners = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4']

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#0B0F14] border-y border-gray-200 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wide font-semibold">
          Trusted by venues across emerging markets
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {partners.map((partner, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center transition-colors">
              <p className="text-gray-600 dark:text-gray-300 font-semibold">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
