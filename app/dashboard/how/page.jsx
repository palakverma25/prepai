"use client";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 md:px-16 lg:px-24 bg-gray-50 text-gray-900">
      
      {/* Header Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">How It Works</h1>
        <p className="mt-4 text-lg text-gray-600">
          Master your interview skills with <span className="font-semibold text-blue-600">Prep AI</span> in a few simple steps.
        </p>
      </div>

      {/* Step-by-Step Process */}
      <div className="max-w-4xl mt-12 space-y-8">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-blue-600">1. Create Your Profile</h2>
            <p className="mt-2 text-gray-700">
              Sign up and provide details about your <span className="font-semibold">job role, experience, and skills</span> to personalize your mock interview experience.
            </p>
          </div>
        </div>

        {/* Step 2  */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-blue-600">2. Start Practicing</h2>
            <p className="mt-2 text-gray-700">
              Engage in <span className="font-semibold">real-time, interactive AI interviews</span> tailored to your role and skill level.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-blue-600">3. Get Instant Feedback</h2>
            <p className="mt-2 text-gray-700">
              Receive <span className="font-semibold">detailed AI-driven feedback</span> on your answers, tone, and overall performance.
            </p>
          </div>
        </div>

        {/* Step 4  */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-blue-600">4. Improve and Retry</h2>
            <p className="mt-2 text-gray-700">
              Use the insights to refine your responses and <span className="font-semibold">practice multiple times</span> to build confidence.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mt-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Start Practicing Today</h2>
        <p className="mt-3 text-lg text-gray-700">
          Join thousands of candidates improving their interview skills with <span className="font-semibold text-blue-600">Prep AI</span>.
        </p>
      </div>
      <footer className="w-full text-center py-6  mt-12">
        <p className="text-gray-400">PrepAI is developed by Pratham, Palak, and Arpit with a vision to help candidates ace their interviews through AI-powered mock interviews. Built in February 2025.</p>
      </footer>
    </div>
  );
};

export default HowItWorks;
