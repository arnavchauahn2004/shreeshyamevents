import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Shreeshyamevents and Planners offer?',
    answer: 'We offer comprehensive event planning services including wedding planning, corporate events, birthday parties, catering, theme decoration, entertainment, photography, and more. We handle everything from concept to execution.',
  },
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 3-6 months in advance for weddings and large events. For smaller events, 1-2 months is usually sufficient. However, we always try our best to accommodate last-minute bookings based on availability.',
  },
  {
    question: 'Do you only operate in Jamshedpur?',
    answer: 'While we are based in Jamshedpur, Jharkhand, we also cater to events in nearby cities and can travel for destination events. Contact us to discuss your event location.',
  },
  {
    question: 'Can you work within my budget?',
    answer: 'Absolutely! We offer customizable packages to suit various budgets. During our consultation, we discuss your requirements and budget to create a plan that delivers maximum value without compromising quality.',
  },
  {
    question: 'Do you provide catering services?',
    answer: 'Yes, we have professional catering services with diverse menu options ranging from traditional Indian cuisine to international dishes. We can customize menus based on your preferences and dietary requirements.',
  },
  {
    question: 'What makes Shreeshyamevents different from other event planners?',
    answer: 'Our attention to detail, personalized approach, experienced team, and commitment to making every event unique sets us apart. We treat each event as if it were our own, ensuring exceptional results every time.',
  },
  {
    question: 'Do you offer decoration services?',
    answer: 'Yes, we specialize in theme-based decoration for all types of events. Our creative team can transform any venue to match your vision, whether traditional, modern, or customized themes.',
  },
  {
    question: 'How do I get started with planning my event?',
    answer: 'Simply contact us through phone, WhatsApp, or email. We\'ll schedule a consultation to understand your requirements, discuss ideas, and provide a detailed proposal tailored to your needs.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-amber-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-amber-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-amber-600 flex-shrink-0" size={24} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
