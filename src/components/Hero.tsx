import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">
              Shreeshyam Events
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl mb-6 font-light italic">& Planners</h2>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
          Creating Unforgettable Moments in Jamshedpur
        </p>

        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
          From dreamy weddings to corporate excellence, we transform your vision into extraordinary experiences
        </p>

        <button
          onClick={() => scrollToSection('services')}
          className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          Explore Our Services
        </button>
      </div>

      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
