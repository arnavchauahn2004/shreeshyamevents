import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { LucideIcon } from "lucide-react";

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

export default function ServiceCard({ service }: { service: ServiceType }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div className="perspective group float-soft hover:rotate-[0.5deg] hover:scale-[1.02] transition-transform duration-500">
      <div
        className={`relative w-full h-[520px] transition-all duration-1000 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >

        {/* ================= FRONT ================= */}
        <div className="absolute w-full h-full backface-hidden rounded-3xl overflow-hidden bg-white shadow-xl border border-amber-200 gold-glow transition-all duration-500">

          {/* Shimmer Effect */}
          <div className="shimmer pointer-events-none"></div>

          {/* Image Section */}
          <div className="relative h-60">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <Icon className="text-amber-400 drop-shadow-lg" size={34} />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col h-[calc(100%-15rem)] p-6">

            <div>
              <h3 className="text-xl font-luxury font-semibold mb-2 text-gray-900 tracking-wide">
                {service.title}
              </h3>

              <div className="w-14 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-4"></div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="mt-auto flex justify-end pt-6">
              <button
                onClick={() => setFlipped(true)}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-amber-400/40 transition duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </div>

          </div>
        </div>

{/* ================= BACK ================= */}
<div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl shadow-2xl bg-gradient-to-br from-[#141414] via-black to-[#0d0d0d] text-white border border-amber-500/20">

  {/* Scrollable Content */}
  <div className="p-6 overflow-y-auto h-full pb-24">

    <h3 className="text-2xl font-luxury text-amber-400 mb-2 text-center tracking-wider">
      {service.title} Services
    </h3>

    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>

    <div className="space-y-6">
      {service.details.map((section, index) => (
        <div key={index}>
          <h4 className="text-amber-300 font-semibold mb-2 border-b border-amber-500 pb-1 tracking-wide">
            {section.category}
          </h4>

          <ul className="space-y-2 text-sm text-gray-300">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 hover:text-amber-300 transition">
                <Sparkles size={14} className="text-amber-400 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  </div>

  {/* Fixed Button Only */}
  <button
    onClick={() => setFlipped(false)}
    className="absolute bottom-6 right-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition duration-300"
  >
    <ArrowRight className="rotate-180" size={18} />
  </button>

</div>
      </div>
    </div>
  );
}