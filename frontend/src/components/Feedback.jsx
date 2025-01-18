import React from 'react';

const Feedback = () => {
  const feedbacks = [
    {
      name: "Sarah Johnson",
      role: "Data Science Student",
      feedback: "The AI-powered learning recommendations helped me master complex concepts in half the time. Absolutely revolutionary!",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Software Engineering Student",
      feedback: "The interactive coding exercises and real-time feedback made learning programming concepts incredibly engaging.",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Machine Learning Engineer",
      feedback: "This platform's personalized learning path helped me transition from beginner to professional in just 6 months.",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
              <div className="border-t pt-4">
                <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                <p className="text-orange-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;