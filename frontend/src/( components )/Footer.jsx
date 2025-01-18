import React from 'react';
import { Book, Brain, MessageCircle, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              AI Study Assistant
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Revolutionizing learning through AI-powered study tools, personalized quizzes, 
              and adaptive learning paths for students and professionals.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Book size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                <Brain size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/study-assistant" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Study Dashboard
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  AI Quiz Generator
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Learning Paths
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Progress Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:support@aistudyassistant.com" className="hover:text-blue-400 transition-colors">
                  support@aistudyassistant.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+11234567890" className="hover:text-blue-400 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={16} className="text-blue-400" />
                <span>AI Learning Hub, Digital Valley, CA</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300">
              Get the latest updates on new features and learning resources.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2024 AI Study Assistant. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
