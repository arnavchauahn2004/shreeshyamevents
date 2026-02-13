import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Priya & Rahul Sharma',
    event: 'Wedding',
    rating: 5,
    review: 'Integrated Events made our wedding day absolutely perfect! Every detail was taken care of, from the beautiful decoration to the seamless coordination. Highly recommended!',
    location: 'Jamshedpur',
  },
  {
    name: 'Tata Steel Ltd.',
    event: 'Corporate Conference',
    rating: 5,
    review: 'Professional, punctual, and precise. They handled our annual conference with over 500 attendees flawlessly. Outstanding event management!',
    location: 'Jamshedpur',
  },
  {
    name: 'Anjali Mehta',
    event: 'Birthday Party',
    rating: 5,
    review: 'My daughter\'s 5th birthday was a dream come true! The theme decoration and entertainment were beyond our expectations. Thank you for making it so special!',
    location: 'Bistupur',
  },
  {
    name: 'Rajesh Kumar',
    event: 'Anniversary Celebration',
    rating: 5,
    review: 'Celebrated our 25th anniversary with Integrated Events. The team was creative, responsive, and made sure everything was perfect. Wonderful experience!',
    location: 'Sakchi',
  },
  {
    name: 'Sunita & Vikram Jha',
    event: 'Engagement Ceremony',
    rating: 5,
    review: 'From planning to execution, everything was handled professionally. The catering was exceptional and the decoration was stunning. Highly satisfied!',
    location: 'Kadma',
  },
  {
    name: 'ABC Pvt Ltd.',
    event: 'Product Launch',
    rating: 5,
    review: 'They helped us launch our new product with a spectacular event. Great attention to detail and excellent coordination throughout.',
    location: 'Jamshedpur',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What our happy clients say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 text-amber-200" size={40} />

              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={20} />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{review.review}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{review.name}</p>
                <p className="text-amber-600 text-sm">{review.event}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
