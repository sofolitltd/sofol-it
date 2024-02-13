import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="container mx-auto px-4 space-y-8">
        <p className="text-gray-700 text-lg">Get in touch with us for any inquiries or project discussions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Email</h3>
            <a href="mailto:youremail@example.com" className="text-blue-500 hover:underline">youremail@example.com</a>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Phone</h3>
            <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
          </div>
        </div>
        <form className="mt-8 space-y-4">
          <label htmlFor="name" className="text-gray-700 font-bold">Name</label>
          <input type="text" id="name" name="name" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <label htmlFor="email" className="text-gray-700 font-bold">Email</label>
          <input type="email" id="email" name="email" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <label htmlFor="message" className="text-gray-700 font-bold">Message</label>
          <textarea id="message" name="message" rows="4" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
          <button type="submit" className="btn bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded-md">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
