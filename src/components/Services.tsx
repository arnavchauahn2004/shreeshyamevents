import {
  Heart,
  Briefcase,
  Cake,
  UtensilsCrossed,
  Music,
  PartyPopper,
  Camera,
  Gift,
  LucideIcon,
} from "lucide-react";

import ServiceCard from "../components/ServiceCard";

interface ServiceSection {
  category: string;
  items: string[];
}

interface ServiceType {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  details: ServiceSection[];
}

const services: ServiceType[] = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description:
      "Complete wedding planning services from engagement to reception.",
    image:
      "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Wedding Services",
        items: [
          "Wedding Decoration",
          "Wedding Photography & Videography",
          "Haldi & Sangeet Decoration",
          "Mehandi Decoration",
          "Wedding Coordination",
        ],
      },
      {
        category: "Premium Add-ons",
        items: [
          "Luxury Stage Design",
          "Wedding Entertainer",
          "Fireworks & Special Effects",
        ],
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description:
      "Professional corporate event management including conferences and launches.",
    image:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Corporate Solutions",
        items: [
          "Conference & Meeting",
          "Product Launch Events",
          "Award Ceremonies",
          "Seminars & Workshops",
        ],
      },
    ],
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description:
      "Memorable birthday celebrations for all age groups.",
    image:
      "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Birthday Packages",
        items: [
          "Theme Decoration",
          "Entertainment Setup",
          "Cake & Catering",
          "Photography",
        ],
      },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Services",
    description:
      "Exquisite catering from traditional Indian to international cuisines.",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Cuisine Options",
        items: [
          "Indian",
          "Continental",
          "Chinese",
          "Mughlai",
          "Thai",
          "Mongolian",
          "Live Food Counters",
          "Customized Menu",
        ],
      },
    ],
  },
  {
    icon: Music,
    title: "Entertainment & DJ",
    description:
      "Professional DJs, live bands, and performers.",
    image:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Entertainment",
        items: [
          "Live DJ Setup",
          "Anchors",
          "Live Bands and Shows",
          "Sound & Lighting",
        ],
      },
    ],
  },
  {
    icon: PartyPopper,
    title: "Theme Decoration",
    description:
      "Creative theme-based decoration transforming venues into magical spaces.",
    image:
      "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Decoration Themes",
        items: [
          "Royal Wedding Themes",
          "Floral Concepts",
          "LED Stage Design",
          "Customized Entry Gate and more",
        ],
      },
    ],
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description:
      "Capture every precious moment with professional coverage.",
    image:
      "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Media Services",
        items: [
          "Candid Photography",
          "Cinematic Wedding Films",
          "Drone Coverage",
          "Pre-Wedding Shoots",
        ],
      },
    ],
  },
  {
    icon: Gift,
    title: "Special Occasions",
    description:
      "Anniversaries, engagements, baby showers & milestone celebrations.",
    image:
      "https://images.pexels.com/photos/3171156/pexels-photo-3171156.jpeg?auto=compress&cs=tinysrgb&w=800",
    details: [
      {
        category: "Occasion Planning",
        items: [
          "Anniversary Planning",
          "House Warming Setup",
          "Engagement Setup",
          "Baby Shower Decor",
          "Custom Celebration Concepts",
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white via-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive event planning and management services tailored to
            your unique vision and executed with royal precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}