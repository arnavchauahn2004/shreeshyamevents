import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          setMessage('You are already subscribed!');
        } else {
          setMessage('Something went wrong. Please try again.');
        }
      } else {
        setMessage('Successfully subscribed! Thank you!');
        setEmail('');
        }
      } catch {
        setMessage('An error occurred. Please try again.');
      } finally {
        setLoading(false);
        setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-amber-400">
              ShreeShyam Events
              <br />
              <span className="text-lg text-white">& Wedding Planners</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Creating unforgettable moments and exceptional experiences in Jamshedpur and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-amber-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-400">No. 3, Surya Complex <br />
                  Near Radhaswami Satsang Ashram, Golmuri <br />
                  Jamshedpur - 831003 <br />
                  Jharkhand, India</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-amber-400 mr-3 flex-shrink-0" size={20} />
                <a href="tel:+919608264408" className="text-gray-400 hover:text-amber-400 transition-colors">
                  +91 9608264408
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-amber-400 mr-3 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@shreeshyamevents.in"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  info@shreeshyamevents.in
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Gallery', 'Reviews', 'FAQs'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-amber-400">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for event tips and exclusive offers</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-r-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <Send size={20} />
                  )}
                </button>
              </div>
              {message && (
                <p className={`text-sm ${message.includes('Success') ? 'text-green-400' : 'text-amber-400'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ShreeShyam Events and Wedding Planners. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/shreeshyamevents9?igsh=M2VrNXJ3ZHMxb3Fx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
