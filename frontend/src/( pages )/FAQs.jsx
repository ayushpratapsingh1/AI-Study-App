import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavigationBar from '../NavigationBar';
import Breadcrumb from '../( components )/Breadcrumb';
import Footer from '../( components )/Footer';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        className={`w-full flex justify-between items-center p-4 rounded-lg transition-all duration-300 ${
          isOpen ? 'bg-orange-50 text-orange-600' : 'bg-gray-50 hover:bg-orange-50'
        }`}
        onClick={onClick}
      >
        <span className="text-left font-medium text-lg">{question}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? 'transform rotate-180 text-orange-600' : 'text-gray-400'
          }`}
          size={20}
        />
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600 bg-white border-l-2 border-orange-500 mt-2 rounded-r-lg">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How does the AI-powered learning system work?",
      answer: "Our AI system analyzes your learning patterns, performance, and preferences to create a personalized learning path. It adapts in real-time, suggesting relevant content, adjusting difficulty levels, and providing targeted practice exercises to optimize your learning experience."
    },
    {
      question: "What subjects and courses are available?",
      answer: "We offer a comprehensive range of subjects including Programming (Python, JavaScript, Java), Data Science, Machine Learning, Web Development, and more. New courses are added monthly based on student demand and industry trends."
    },
    {
      question: "How much does the subscription cost?",
      answer: "We offer flexible pricing plans starting from $29/month for basic access. Our premium plan at $49/month includes additional features like 1-on-1 mentoring, project reviews, and certified assessments. Students can save 20% with annual subscriptions."
    },
    {
      question: "Can I interact with other students and instructors?",
      answer: "Yes! Our platform features community forums, study groups, and live discussion channels. You can collaborate on projects, share resources, and get help from both peers and instructors. We also host weekly live Q&A sessions with industry experts."
    },
    {
      question: "How do the progress tracking and assessments work?",
      answer: "Our AI tracks your progress through various metrics including completion rates, quiz scores, and practical project assessments. You'll get detailed feedback on your strengths and areas for improvement, with personalized recommendations for better learning outcomes."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our mobile app is available for both iOS and Android devices. It syncs seamlessly with your web account, allowing you to continue learning on the go. You can download course materials for offline access and receive push notifications for updates."
    }
  ];

  return (
    <>
      <NavigationBar />
      <Breadcrumb title="Frequently Asked Questions" />
      <div className="max-w-7xl mx-auto p-6 mb-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-6">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Have questions?</h1>
              <p className="text-gray-600 mb-6">Find answers to commonly asked questions about our AI-powered learning platform.</p>
              <img
                src="/images/faq.png"
                alt="FAQ illustration"
                className="w-full"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-2">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please contact our support team.</p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                onClick={() => window.location.href = '/contact'}>
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;