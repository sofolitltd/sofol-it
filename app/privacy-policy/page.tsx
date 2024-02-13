// pages/privacy-policy.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Sofol IT",
  description: 'Privacy Policy by Sofol IT',
}


const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-10 mb-16">
      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how Sofol IT ("we", "us", or "our")
        collects, uses, and discloses personal information when you use our
        website or services.
      </p>
    
      <p className="mb-4">
        <strong className="block mb-2">Information We Collect:</strong> When you visit our website or
        use our services, we may collect personal information such as your name,
        email address, phone number, and any other information you voluntarily
        provide to us. We may also collect usage data, including IP addresses,
        browser type, pages visited, and other usage data.
      </p>
      
      <p className="mb-4">
        <strong className="block mb-2">How We Use Your Information:</strong> We may use the information
        we collect for various purposes, including providing and maintaining our
        website and services, personalizing your experience, communicating with
        you, analyzing usage data to improve our website and services, and
        protecting our legal rights.
      </p>
      
      <p className="mb-4">
        <strong className="block mb-2">Data Security:</strong> We take reasonable measures to protect
        your personal information from unauthorized access, alteration, or
        disclosure. However, please be aware that no method of transmission over
        the internet or electronic storage is completely secure.
      </p>
      
      <p className="mb-4">
        <strong className="block mb-2">Third-Party Links:</strong> Our website may contain links to
        third-party websites that are not operated by us. We have no control
        over, and assume no responsibility for, the content, privacy policies,
        or practices of any third-party websites or services.
      </p>
      
      <p className="mb-4">
        <strong className="block mb-2">Changes to This Privacy Policy:</strong> We may update our
        Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page.
      </p>
      
      <p className="mb-4">
        <strong className="block mb-2">Contact Us:</strong> If you have any questions about this
        Privacy Policy, please contact us at{" "}
        <a href="mailto:sofolitltd@gmail.com" className=" text-red-600">sofolitltd@gmail.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
