"use client";
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:px-16 lg:px-24 bg-gray-50 text-gray-900">
      
      {/* Header Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or need assistance? Reach out to us, and we’ll be happy to help.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-12 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              rows={4}
              placeholder="Type your message here..."
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <footer className="w-full text-center py-6  mt-12">
        <p className="text-gray-400">PrepAI is developed by Pratham, Palak, and Arpit with a vision to help candidates ace their interviews through AI-powered mock interviews. Built in February 2025.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
