import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: "/elegant wedding.jpg",
    title: 'Elegant Wedding Setup',
    category: 'Wedding',
  },
  {
    url: '/grand_wedding.jpg',
    title: 'Grand Wedding Ceremony',
    category: 'Wedding',
  },
  {
    url: '/beautiful-decor.jpg',
    title: 'Beautiful Decoration',
    category: 'Decoration',
  },
  {
    url: '/entrance3.jpg',
    title: 'Entrance Decoration',
    category: 'Wedding',
  },
  {
    url: '/Entrance.jpg',
    title: 'Floral Entrance',
    category: 'Wedding',
  },
  {
    url: '/haldi.jpg',
    title: 'Haldi Decoration',
    category: 'Wedding',
  },
  {
    url: '/mehndi.jpg',
    title: 'Mehendi Decoration',
    category: 'Wedding',
  },
  {
    url: '/mandap.jpg',
    title: 'Mandap Decoration',
    category: 'Wedding',
  },
  {
    url: '/wedding-reception.jpg',
    title: 'Wedding Reception',
    category: 'Wedding',
  },
  {
    url: '/elegant-stage-decor2.jpg',
    title: 'Elegant Stage Setup',
    category: 'Wedding',
  },
  {
    url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Corporate Event',
    category: 'Corporate',
  },
  {
    url: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Birthday Celebration',
    category: 'Birthday',
  },
  {
    url: '/outdoor-wedding.jpg',
    title: 'Outdoor Wedding',
    category: 'Wedding',
  },
  {
    url: '/catering-spread.jpg',
    title: 'Catering Spread',
    category: 'Catering',
  },
  {
    url: '/special-occasions.jpg',
    title: 'Special Occasion',
    category: 'Party',
  },
];

export default function Gallery() {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextImage = () => {
    if (selectedIndex === null) return;
    if (selectedIndex < galleryImages.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  /* Swipe navigation */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }

    if (touchEndX.current - touchStartX.current > 50) {
      prevImage();
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse of our successful events and celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
                  <p className="text-amber-400 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >

          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>

          {selectedIndex > 0 && (
            <button
              className="absolute left-6 text-white text-5xl hover:text-amber-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>
          )}

          <img
            src={galleryImages[selectedIndex].url}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain transition-all duration-500"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />

          {selectedIndex < galleryImages.length - 1 && (
            <button
              className="absolute right-6 text-white text-5xl hover:text-amber-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>
          )}

        </div>
      )}
    </section>
  );
}