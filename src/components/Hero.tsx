import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay (Better Visibility) */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        
        <div className="mb-6">
          <div className="inline-block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wide">
              <span className="text-white">ShreeShyam</span>{' '}
              <span className="text-amber-400">Events</span>
            </h1>

            <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-light italic text-gray-200">
          & Wedding Planners
        </h2>

        <p className="text-lg md:text-xl mb-6 leading-relaxed font-light">
          Creating Unforgettable Moments in Jamshedpur
        </p>

        <p className="text-base md:text-lg mb-10 max-w-3xl mx-auto text-gray-300">
          From dreamy weddings to corporate excellence, we transform your vision into extraordinary experiences
        </p>

        <button
          onClick={() => scrollToSection('services')}
          className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Explore Our Services
        </button>
      </div>

      {/* Scroll Down Icon */}
      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-400 animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={38} />
      </button>
    </section>
  );
}