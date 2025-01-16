import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const [animate, setAnimate] = useState(false);
  const stats = [
    { label: 'Active Students', value: '25K+', icon: '👨‍🎓' },
    { label: 'Total Courses', value: '899', icon: '📚' },
    { label: 'Instructors', value: '158', icon: '👨‍🏫' },
    { label: 'Satisfaction Rate', value: '100%', icon: '⭐' },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 delay-${index * 200}`}>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;