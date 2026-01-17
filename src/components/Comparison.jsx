'use client'

import { motion } from 'framer-motion'

export default function Comparison() {
  const features = [
    {
      icon: '📅',
      title: 'Instant Bookings',
      description: 'Reserve your favorite venue in seconds with real-time availability.'
    },
    {
      icon: '⚡',
      title: 'Real-time Updates',
      description: 'Get instant notifications for confirmations, cancellations, and venue changes.'
    },
    {
      icon: '💬',
      title: 'In-app Communication',
      description: 'Chat directly with venue owners without switching apps or platforms.'
    }
  ]

  const testimonials = [
    {
      name: 'Kevin Joseph',
      handle: '@kevseph',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      text: 'Have shifted to hosting all my games on @Hyper. Lifesaver! Whatsapp was such a pain when I had to organise large 9v9 games.'
    },
    {
      name: 'Naveen Pandian',
      handle: '@naveen_ro',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      text: 'Played a public game on @Hyper today. Met a lot of new players.'
    },
    {
      name: 'Sushanth',
      handle: '@sush',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      text: 'Have any of you checked out @Hyper? Played baddy today. Met a bunch of players and had a great time.'
    },
    {
      name: 'Rahul Kumar',
      handle: '@rahul_k',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      text: 'Finally found a platform to organize cricket matches without WhatsApp chaos. @Hyper is a game changer!'
    },
    {
      name: 'Priya Singh',
      handle: '@priya_sports',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
      text: 'Booked my tennis court on @Hyper in seconds. No more back and forth messages!'
    },
    {
      name: 'Arjun Nair',
      handle: '@arjun_n',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      text: '@Hyper made organizing basketball games so easy. Highly recommend for all sports enthusiasts!'
    }
  ]

  return (
    <section id="competitions" className="relative py-32 overflow-hidden">

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why choose Hyper
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              Everything you need to book venues effortlessly and manage your bookings seamlessly.
            </p>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-500/10 text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <motion.div
            className="relative h-[520px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 gap-4 h-full p-4">

              {/* Column 1 */}
              <div className="overflow-hidden">
                <motion.div
                  animate={{ y: -1200 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="space-y-4"
                >
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <TestimonialCard key={i} t={t} />
                  ))}
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: -1200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="space-y-4"
                >
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <TestimonialCard key={i} t={t} />
                  ))}
                </motion.div>
              </div>

              {/* Column 3 */}
              <div className="overflow-hidden">
                <motion.div
                  animate={{ y: -1200 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="space-y-4"
                >
                  {[...testimonials, ...testimonials].map((t, i) => (
                    <TestimonialCard key={i} t={t} />
                  ))}
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t }) {
  return (
    <div className="rounded-xl p-4 border border-white/10 bg-gradient-to-br from-gray-900 to-black hover:border-blue-500 transition">
      <div className="flex items-start gap-3 mb-3">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
        <div className="min-w-0">
          <h3 className="text-white font-semibold text-xs truncate">{t.name}</h3>
          <p className="text-gray-500 text-xs truncate">{t.handle}</p>
        </div>
      </div>
      <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
        {t.text}
      </p>
    </div>
  )
}
