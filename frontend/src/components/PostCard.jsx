import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const PostCard = ({ post, view }) => {
  return view === 'grid' ? (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {post.difficulty}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">{post.rating}</span>
          </div>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-gray-400" />
              <span>{post.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} className="text-gray-400" />
              <span>{post.participants}</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex gap-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-48 h-32 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded-full">
            <Star size={14} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">{post.rating}</span>
          </div>
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
            {post.difficulty}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-gray-400" />
              <span>{post.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} className="text-gray-400" />
              <span>{post.participants} participants</span>
            </div>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
