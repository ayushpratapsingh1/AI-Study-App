import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Courses', href: '/courses' },
    { title: 'Quizzes', href: '/quiz' },
    { title: 'Study Assistant', href: '/study-assistant' },
    { title: 'FAQs', href: '/faq' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <header className="border-b bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Replace the old logo section with the new Logo component */}
          <Logo size="default" showText={true} />

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-gray-700 font-medium hover:text-orange-500 transition-colors ${
                  location.pathname === item.href ? 'text-orange-500' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button 
              className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600"
              onClick={() => navigate('/upload-notes')}
            >
              Upload Notes
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none hover:text-orange-500"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-gray-700 font-medium hover:text-orange-500 transition-colors ${
                    location.pathname === item.href ? 'text-orange-500' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationBar;
