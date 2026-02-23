import { Phone, MessageCircle } from 'lucide-react';

export default function FixedContactButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-4">
      <a
        href="https://wa.me/919608264408"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      <a
        href="tel:+919608264408"
        className="bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Call us"
      >
        <Phone size={28} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Us
        </span>
      </a>
    </div>
  );
}
