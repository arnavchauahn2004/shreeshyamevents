import { Heart, Briefcase, Cake, UtensilsCrossed, Music, PartyPopper, Camera, Gift } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Planning',
    description: 'Complete wedding planning services from engagement to reception. We handle every detail to make your special day perfect.',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional corporate event management including conferences, seminars, product launches, and team building activities.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Memorable birthday celebrations for all ages. From intimate gatherings to grand celebrations.',
    image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: UtensilsCrossed,
    title: 'Catering Services',
    description: 'Exquisite catering with diverse menu options. From traditional Indian to international cuisines.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Music,
    title: 'Entertainment & DJ',
    description: 'Professional entertainment services including DJs, live bands, and performers to keep your guests engaged.',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: PartyPopper,
    title: 'Theme Decoration',
    description: 'Creative theme-based decoration that transforms venues into magical spaces matching your vision.',
    image: 'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Camera,
    title: 'Photography & Videography',
    description: 'Professional photography and videography services to capture every precious moment of your event.',
    image: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Gift,
    title: 'Special Occasions',
    description: 'Anniversary celebrations, engagement parties, baby showers, and all your special milestone events.',
    image: 'https://images.pexels.com/photos/3171156/pexels-photo-3171156.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive event planning and management services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="text-amber-400" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
