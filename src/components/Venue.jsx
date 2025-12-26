import { Navigation } from 'lucide-react';
export default function Venue() {
  const venues = [
    {
      name: 'Turf Nation',
      img: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'https://www.google.com/maps/dir//Gorbachev+Rd,+Old+Katpadi,+Bharathi+Nagar,+Katpadi,+Vellore,+Tamil+Nadu+632014/@12.982612,79.167488,15z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3bad47ccd5aac2bd:0x7552370af793f92e!2m2!1d79.1484507!2d12.9678611?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
      featured: true,
      popular: true
    },
    {
      name: 'House of Pool',
      img: 'https://images.unsplash.com/photo-1509077613385-f89402467146?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location:'https://www.google.com/maps/dir//gate+2nd+floor,+1A,+to+thiruvalam+road,+opposite+to+VIT+Road,+Vaibhav+Nagar,+Katpadi,+Vellore,+Tamil+Nadu+632007/@12.982612,79.167488,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bad49587d20fd45:0x69c2f0935e84aff8!2m2!1d79.1550951!2d12.967991?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
      featured: true,
      popular: false
    },
    {
      name: 'Slick and Kick',
      img: 'https://plus.unsplash.com/premium_photo-1684888476715-a00870431463?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location: 'https://www.google.com/maps/dir//No.40,+Kumaran+Street,+3A,+VIT+Rd,+Vaibhav+Nagar,+Katpadi,+Vellore,+Tamil+Nadu+632014/@12.982612,79.167488,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bad47d774966c75:0xeecb3675a7fa780c!2m2!1d79.1598023!2d12.9668289?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
      featured: true,
      popular: true
    },
    {
      name: 'Hoops',
      img: 'https://images.unsplash.com/photo-1509077613385-f89402467146?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      location:'',
      featured: true,
      popular: false
    }
  ]

  return (
    <section id="venue" className="py-20 bg-gray-50 dark:bg-[#0B0F14] transition-colors">
      <div className="mx-auto max-w-screen-xl  px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Venues Near You
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Find nearest venue now
          </p>
        </div>

        <div id='venue-layout' className="relative flex gap-8 overflow-x-auto no-scrollbar py-6 px-2 scroll-smooth max-w-full" style={{ width: 'calc(100% + 32px)', marginLeft: '-16px', marginRight: '-16px' }}>
          <div className="flex gap-8 px-6" style={{ width: 'fit-content' }}>
            {venues.map((venue, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden w-80 h-[550px] transition shadow-md hover:shadow-lg group"
              style={{
                backgroundImage: `url(${venue.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {venue.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-end justify-between gap-3 ">
                  <div className="flex">
                    <h4 className="text-xl font-semibold text-white mb-1 text-wrap">
                      {venue.name}
                    </h4>
                  </div>
                  <button className="px-2 py-2 text-white font-semibold rounded-lg transition whitespace-nowrap">
                    <a href={venue.location} target='blank'><Navigation /></a>
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
