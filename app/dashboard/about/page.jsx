"use client";
import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:px-16 lg:px-24 bg-gray-50 text-gray-900">
      {/* Header Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          <span className="text-blue-600 font-semibold">Prep AI</span> is your <span className="font-semibold">AI-powered interview coach</span>, helping candidates practice, refine, and ace their interviews with confidence.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
        <p className="mt-3 text-lg text-gray-700">
          We empower job seekers by providing <span className="font-semibold">realistic mock interviews</span> tailored to their roles and experience levels. Our goal is to help you <span className="font-semibold">boost confidence, improve responses, and succeed</span> in any interview.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Why Choose Prep AI?</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600">AI-Powered Simulations</h3>
            <p className="mt-2 text-gray-700">Practice with <span className="font-semibold">intelligent, role-specific</span> mock interviews.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600">Instant Feedback</h3>
            <p className="mt-2 text-gray-700">Receive <span className="font-semibold">real-time AI-driven insights</span> to refine your responses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600">Customized Question Sets</h3>
            <p className="mt-2 text-gray-700">Prepare with <span className="font-semibold">industry-specific</span> and experience-based questions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600">Flexible Practice Modes</h3>
            <p className="mt-2 text-gray-700">Switch between <span className="font-semibold">mock interviews, self-practice, and AI coaching.</span></p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Get Started Today</h2>
        <p className="mt-3 text-lg text-gray-700">
          Whether you're a <span className="font-semibold">beginner or an experienced professional</span>, Prep AI is designed to help you succeed.
        </p>
      </div>
      <footer className="w-full text-center py-6  mt-12">
        <p className="text-gray-400">PrepAI is developed by Pratham, Palak, and Arpit with a vision to help candidates ace their interviews through AI-powered mock interviews. Built in February 2025.</p>
      </footer>

    </div>
  );
};

export default AboutUs;
