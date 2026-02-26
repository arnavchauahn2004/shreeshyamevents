export default function About() {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">About</span>{' '}
            <span className="text-amber-500">Us</span>
          </h2>
  
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-10"></div>
  
          {/* Content */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Shree Shyam Events & Wedding Planner</strong> is a full-service event
            management company known for creativity, precision, and excellence.
          </p>
  
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With years of experience and a passion for perfection, we transform ideas
            into extraordinary experiences. From concept development to final
            execution, we handle everything with professionalism and care.
          </p>
  
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Our team is committed to delivering exceptional wedding planning,
            wedding decoration, destination wedding venue expertise, event
            organization, exhibition management, and premium catering services —
            all executed with optimized cost and scalable excellence.
          </p>
  
        </div>
      </section>
    );
  }