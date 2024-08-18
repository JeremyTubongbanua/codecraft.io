import React from 'react';

function About() {
  return (
    <div className="flex h-full flex-col items-center bg-blue-50 p-8">
      <div className="m-5 w-4/5 max-w-3xl transform rounded-lg border-2 border-blue-500 bg-white p-6 shadow-lg transition-transform hover:-translate-y-2">
        <h1 className="mb-4 text-3xl font-bold text-blue-500">
          About codecraft.io
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to <strong>CodeCraft</strong>, the best place for mastering
          programming languages! Our mission is to provide a thorough and
          engaging educational platform where learners of all levels can gain a
          solid understanding of programming languages such as Python, C, and
          JavaScript.
        </p>
      </div>
      <div className="m-5 w-4/5 max-w-3xl transform rounded-lg border-2 border-blue-500 bg-white p-6 shadow-lg transition-transform hover:-translate-y-2">
        <p className="text-lg leading-relaxed text-gray-700">
          At CodeCraft, we believe that learning to code should be accessible,
          enjoyable, and effective. That's why we've integrated the powerful
          capabilities of Wolfram Alpha to enhance our platform. Each page on
          our website features a personalized Wolfram Alpha Language Model (LLM)
          to assist you in your learning journey, providing real-time support
          and insights.
        </p>
      </div>
      <div className="m-5 w-4/5 max-w-3xl transform rounded-lg border-2 border-blue-500 bg-white p-6 shadow-lg transition-transform hover:-translate-y-2">
        <p className="text-lg leading-relaxed text-gray-700">
          Whether you're a beginner looking to start your coding journey or an
          experienced programmer aiming to expand your skills, CodeCraft offers
          a variety of resources and tools to help you succeed. Our interactive
          lessons, hands-on projects, and expert guidance ensure that you gain
          practical knowledge and confidence in your coding abilities.
        </p>
      </div>
    </div>
  );
}

export default About;
