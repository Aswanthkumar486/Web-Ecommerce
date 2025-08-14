import React from 'react';
import siteData from '../data/data.json';

export default function Blog() {
  // Safety check: only render if blog data exists
  if (!siteData.blog) return null;

  const { title, posts } = siteData.blog;

  return (
    <section className="py-16 bg-white text-gray-800 font-sans" id="blog">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition duration-300"
            >
              {/* Placeholder Image / Gradient */}
              <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-purple-400 flex items-center justify-center text-white text-2xl font-bold">
                {post.title.charAt(0)}

                <img src={post.image} className='w-full h-48 p-2 rounded-xl' />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
                <p className="text-indigo-600 font-medium mb-2">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-purple-700 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
