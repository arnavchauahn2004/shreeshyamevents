import { useState, useEffect } from 'react';
import { Star, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  name: string;
  email: string;
  event_type: string;
  rating: number;
  review: string;
  location: string;
  created_at: string;
}

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Birthday Party',
  'Engagement',
  'Anniversary',
  'Other'
];

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    event_type: 'Wedding',
    rating: 5,
    review: '',
    location: '',
  });

  const [approvedReviews, setApprovedReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [loadingReviews, setLoadingReviews] = useState(true);

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  const fetchApprovedReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApprovedReviews(data || []);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    } finally {
      setLoadingReviews(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('reviews')
        .insert([formData]);

      if (error) throw error;

      setMessage('Review submitted successfully! Thank you for your feedback. It will appear after admin approval.');
      setFormData({
        name: '',
        email: '',
        event_type: 'Wedding',
        rating: 5,
        review: '',
        location: '',
      });

      setTimeout(() => setMessage(''), 5000);
    } catch (err) {
      setMessage('Error submitting review. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="write-review" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Share Your Experience
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us improve by sharing your feedback and experience with our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gradient-to-br from-amber-50 to-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Write a Review</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Event Type *
                  </label>
                  <select
                    name="event_type"
                    value={formData.event_type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  >
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Your city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Rating *
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                      className="transition-all"
                    >
                      <Star
                        size={32}
                        className={`${
                          star <= formData.rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-gray-300'
                        } cursor-pointer hover:text-amber-500 transition-all`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your experience with our services..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Review
                  </>
                )}
              </button>

              {message && (
                <p className={`text-sm p-3 rounded-lg ${
                  message.includes('successfully')
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Recent Reviews */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Recent Reviews</h3>

            {loadingReviews ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
              </div>
            ) : approvedReviews.length > 0 ? (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                {approvedReviews.map(review => (
                  <div
                    key={review.id}
                    className="bg-gradient-to-br from-amber-50 to-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-800">{review.name}</p>
                        <p className="text-sm text-amber-600">{review.event_type}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-amber-500 fill-amber-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{review.review}</p>
                    <p className="text-xs text-gray-400">
                      {review.location && `${review.location} • `}
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-amber-50 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-2">No reviews yet</p>
                <p className="text-gray-500 text-sm">Be the first to share your experience!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
