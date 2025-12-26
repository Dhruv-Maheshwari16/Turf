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
      text: 'Have shifted to hosting all my games on @TurfTown. Lifesaver! Whatsapp was such a pain when I had to organise large 9v9 games.'
    },
    {
      name: 'Naveen Pandian',
      handle: '@naveen_ro',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      text: 'Played a public game on @TurfTown today. Met a lot of new players.'
    },
    {
      name: 'Sushanth',
      handle: '@sush',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
      text: 'Have any of you checked out @TurfTown? Played baddy today. Met a bunch of players and had a great time.'
    },
    {
      name: 'Rahul Kumar',
      handle: '@rahul_k',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      text: 'Finally found a platform to organize cricket matches without WhatsApp chaos. @TurfTown is a game changer!'
    },
    {
      name: 'Priya Singh',
      handle: '@priya_sports',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
      text: 'Booked my tennis court on @TurfTown in seconds. No more back and forth messages!'
    },
    {
      name: 'Arjun Nair',
      handle: '@arjun_n',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
      text: '@TurfTown made organizing basketball games so easy. Highly recommend for all sports enthusiasts!'
    }
  ]

  return (
    <section id="competitions" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why choose Arena51
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Everything you need to book venues effortlessly and manage your bookings seamlessly.
            </p>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Scrolling Testimonials */}
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden bg-white dark:bg-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
          >
            <div className="grid grid-cols-3 gap-4 h-full p-4">
              {/* Left Column - Scrolling Up */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -1200 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                  viewport={{ once: false }}
                  onViewportEnter={() => {}}
                  className="space-y-4"
                >
                  {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-indigo-500 transition min-h-fit flex-shrink-0"
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-xs">{testimonial.name}</h3>
                          <p className="text-gray-400 text-xs truncate">{testimonial.handle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
                        {testimonial.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Middle Column - Scrolling Down */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: -1200 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                  viewport={{ once: false }}
                  className="space-y-4"
                >
                  {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-indigo-500 transition min-h-fit flex-shrink-0"
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-xs">{testimonial.name}</h3>
                          <p className="text-gray-400 text-xs truncate">{testimonial.handle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
                        {testimonial.text}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Scrolling Up */}
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -1200 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                  viewport={{ once: false }}
                  className="space-y-4"
                >
                  {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 hover:border-indigo-500 transition min-h-fit flex-shrink-0"
                    >
                      <div className="flex items-start gap-2 mb-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-xs">{testimonial.name}</h3>
                          <p className="text-gray-400 text-xs truncate">{testimonial.handle}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-4">
                        {testimonial.text}
                      </p>
                    </div>
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