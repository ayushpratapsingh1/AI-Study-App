import React, { useState, useMemo } from 'react';
import { Search, Clock, Users, BookOpen, Star, Filter, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import SearchBar from './Searchbar';

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => e.target.src = '/images/default-image.jpg'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {course.featured && (
          <div className="absolute top-4 left-4 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            Featured
          </div>
        )}
        {course.bestseller && (
          <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            Bestseller
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-blue-100 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
            {course.category}
          </span>
          <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full">
            <Star size={12} fill="currentColor" />
            <span className="ml-1 text-xs font-medium">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm mb-4">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-gray-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} className="text-gray-400" />
            <span>{course.students} Students</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-gray-400" />
            <span>{course.lessons}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <span className="text-sm line-through text-gray-400">{course.price}</span>
            <span className="text-xl font-bold text-blue-600">{course.discountPrice}</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(6);

  const allCourses = [
    {
      title: 'Create An LMS Website With LearnPress',
      duration: '7 Weeks',
      students: '136',
      price: '$29.0',
      discountPrice: '$25.0',
      image: '/images/OIP.jpeg',
      category: 'Web Development',
      rating: 4.8,
      lessons: 42,
      featured: true,
      bestseller: true
    },
    {
      title: 'Advanced React Development',
      duration: '10 Weeks',
      students: '245',
      price: '$69.0',
      discountPrice: '$59.0',
      image: '/images/OIP.jpeg',
      category: 'Programming',
      rating: 4.9,
      lessons: 56,
      featured: true
    },
    {
      title: 'UI/UX Design Masterclass',
      duration: '8 Weeks',
      students: '189',
      price: '$49.0',
      discountPrice: '$39.0',
      image: '/images/OIP.jpeg',
      category: 'Design',
      rating: 4.7,
      lessons: 35,
      bestseller: true
    },
    {
      title: 'Digital Marketing Fundamentals',
      duration: '6 Weeks',
      students: '210',
      price: '$39.0',
      discountPrice: '$29.0',
      image: '/images/OIP.jpeg',
      category: 'Marketing',
      rating: 4.6,
      lessons: 28
    },
    {
      title: 'Business Analytics with Python',
      duration: '9 Weeks',
      students: '167',
      price: '$59.0',
      discountPrice: '$49.0',
      image: '/images/OIP.jpeg',
      category: 'Business',
      rating: 4.8,
      lessons: 45
    },
    {
      title: 'Personal Development Mastery',
      duration: '5 Weeks',
      students: '298',
      price: '$34.0',
      discountPrice: '$24.0',
      image: '/images/OIP.jpeg',
      category: 'Personal Development',
      rating: 4.9,
      lessons: 32,
      bestseller: true
    },
    {
      title: 'Mobile App Development with Flutter',
      duration: '11 Weeks',
      students: '156',
      price: '$79.0',
      discountPrice: '$69.0',
      image: '/images/OIP.jpeg',
      category: 'Programming',
      rating: 4.7,
      lessons: 62
    },
    {
      title: 'SEO Optimization Techniques',
      duration: '6 Weeks',
      students: '178',
      price: '$44.0',
      discountPrice: '$34.0',
      image: '/images/OIP.jpeg',
      category: 'Marketing',
      rating: 4.6,
      lessons: 38
    },
    {
      title: 'Data Science Fundamentals',
      duration: '12 Weeks',
      students: '223',
      price: '$89.0',
      discountPrice: '$79.0',
      image: '/images/OIP.jpeg',
      category: 'Programming',
      rating: 4.8,
      lessons: 72,
      featured: true
    },
    {
      title: 'Project Management Essentials',
      duration: '7 Weeks',
      students: '145',
      price: '$54.0',
      discountPrice: '$44.0',
      image: '/images/OIP.jpeg',
      category: 'Business',
      rating: 4.5,
      lessons: 40
    },
    {
      title: 'Graphic Design for Beginners',
      duration: '8 Weeks',
      students: '167',
      price: '$49.0',
      discountPrice: '$39.0',
      image: '/images/OIP.jpeg',
      category: 'Design',
      rating: 4.6,
      lessons: 45
    },
    {
      title: 'Content Marketing Strategy',
      duration: '5 Weeks',
      students: '134',
      price: '$39.0',
      discountPrice: '$29.0',
      image: '/images/OIP.jpeg',
      category: 'Marketing',
      rating: 4.7,
      lessons: 30
    }
  ];

  const categories = [
    'All', 'Web Development', 'Design', 'Programming',
    'Marketing', 'Business', 'Personal Development'
  ];

  const filteredCourses = useMemo(() => {
    let filtered = [...allCourses];

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => 
        course.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => parseInt(b.students) - parseInt(a.students));
        break;
      case 'newest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.discountPrice.slice(1)) - parseFloat(b.discountPrice.slice(1)));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.discountPrice.slice(1)) - parseFloat(a.discountPrice.slice(1)));
        break;
      default:
        break;
    }

    return filtered;
  }, [allCourses, selectedCategory, sortBy, searchQuery]);

  const displayedCourses = expanded 
    ? filteredCourses 
    : filteredCourses.slice(0, visibleCourses);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSortBy('popular');
    setSearchQuery('');
  };

  return (
    <section className="p-4 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Your Courses</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-full sm:w-64 relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <select
                className="px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Reset all filters"
              >
                <RefreshCw size={16} />
                <span className="hidden sm:inline">Reset Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 flex-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Show active filters if any */}
        {(selectedCategory !== 'all' || sortBy !== 'popular' || searchQuery) && (
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
            <span>Active filters:</span>
            {selectedCategory !== 'all' && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                Category: {selectedCategory}
              </span>
            )}
            {sortBy !== 'popular' && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                Sort: {sortBy.replace('-', ' ')}
              </span>
            )}
            {searchQuery && (
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                Search: {searchQuery}
              </span>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        {filteredCourses.length > visibleCourses && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
            >
              {expanded ? (
                <>
                  Show Less
                  <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Load More Courses
                  <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;