import Link from "next/link";

const ContactSection: React.FC = () => {
    return (
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg md:text-xl mb-8">
            Ready to get started? Reach out to us today and let's discuss your
            project.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-gray-300 hover:text-gray-900"
          >
            Contact Now
          </Link>
        </div>
      </div>
    );
  };

  export default ContactSection