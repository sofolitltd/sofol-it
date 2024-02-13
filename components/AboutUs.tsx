


import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - Mission & Values */}
        <div className="space-y-4">
          <p className="text-gray-700 text-xl">
            **Your agency mission statement goes here.** Briefly describe your overall purpose and what your agency strives to achieve.
          </p>
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <ul className="list-disc text-gray-700">
            <li>List your first core value.</li>
            <li>List your second core value.</li>
            <li>List your third core value.</li>
            {/* Add more values as needed */}
          </ul>
        </div>

        {/* Right column - Team & Expertise */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-2">Meet Our Team</h3>
          {/* Replace with actual team member data */}
          <div className="card rounded-md shadow-md overflow-hidden">
            <img src="/team-member-1.jpg" alt="Team member 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">Name</h4>
              <p className="text-gray-700 text-sm">Position</p>
              <p className="text-gray-500 text-sm">Short bio or description.</p>
            </div>
          </div>
          {/* Add more team member cards here */}
          <h3 className="text-2xl font-bold mb-2">Our Expertise</h3>
          <ul className="list-disc text-gray-700">
            <li>List your area of expertise 1.</li>
            <li>List your area of expertise 2.</li>
            <li>List your area of expertise 3.</li>
            {/* Add more areas of expertise as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
