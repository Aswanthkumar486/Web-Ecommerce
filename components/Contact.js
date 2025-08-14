import React from 'react';

// Contact info object


export default function Contact() {
  return (
    <section className="w-full flex flex-col md:flex-row" id='contact'>
      {/* Contact Form */}
      <div className="w-full  bg-white text-gray-800 flex justify-center items-center py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="bg-white rounded-lg shadow-xl text-sm text-gray-500 border border-gray-200 p-8 flex flex-col">
            <div className="mt-4">
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="border border-gray-200 rounded w-full p-2 outline-indigo-500"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="border border-gray-200 rounded w-full p-2 outline-indigo-500"
              />
            </div>

            <div className="mt-4">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="Type your message..."
                required
                className="border border-gray-200 rounded w-full p-2 outline-indigo-500 h-32 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

        </section>
  );
}
