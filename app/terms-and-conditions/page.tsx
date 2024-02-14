// pages/terms-and-conditions.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | Sofol IT",
  description: 'Terms & Conditions by Sofol IT',
}

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="container py-28 px-6 lg:px-20">
      <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>
      <p>
        These terms and conditions ("Terms") govern your use of the Sofol IT website and services operated by Sofol IT ("us", "we", or "our").
      </p>
      <p>
        By accessing or using the website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the website.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Intellectual Property</h2>
      <p>
        The website and its original content, features, and functionality are owned by Sofol IT and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Disclaimer</h2>
      <p>
        The website and its contents are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
      <p>
        In no event shall Sofol IT, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-3">Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of your country, without regard to its conflict of law provisions.
      </p>
      <p>
        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
      </p>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:sofolitltd@gmail.com" className=" text-red-600">sofolitltd@gmail.com</a>
      </p>
    </div>
  );
};

export default TermsAndConditionsPage;
