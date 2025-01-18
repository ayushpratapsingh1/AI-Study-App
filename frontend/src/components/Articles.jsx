import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: "The Future of AI in Education: 2024 Trends",
      excerpt: "Discover how artificial intelligence is revolutionizing the educational landscape...",
      date: "Jan 15, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      readTime: "5 min read"
    },
    {
      title: "Machine Learning Fundamentals Guide",
      excerpt: "A comprehensive guide to getting started with machine learning concepts...",
      date: "Jan 18, 2024",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      readTime: "8 min read"
    },
    {
      title: "Top Programming Languages in 2024",
      excerpt: "Analysis of the most in-demand programming languages this year...",
      date: "Jan 20, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img src={article.image} alt={article.title} 
                       className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {article.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{article.date}</span>
                    <span className="text-orange-500 group-hover:translate-x-2 transition-transform duration-300">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
