import Link from "next/link";
import Image from "next/image";

//
interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  imageUrl,
}) => {
  return (
    <div className="border border-gray-200 px-6 py-8 rounded-lg">
      <Link href={link}>
        <div className="relative h-32 md:h-40 lg:h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="contain"
            className=" p-2"
          />
        </div>
        <h3 className="text-xl font-semibold m-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="py-28 px-5 ">
      <div className="container mx-auto text-start">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
        <p className=" text-base text-gray-600 mb-16">
          Explore the various services we offer to help grow your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <ServiceCard
            title="Design"
            description="Creative designs to elevate your brand's visual identity. Get eye-catching graphics and intuitive user interfaces."
            link="/services/design"
            imageUrl="/services/design.png"
          />
          <ServiceCard
            title="Web Development"
            description="Professional websites tailored to your needs. Responsive designs, fast loading times, and seamless user experiences."
            link="/services/web-development"
            imageUrl="/images/web-development.png"
          />
          <ServiceCard
            title="App Development"
            description="Custom mobile applications for iOS and Android. Reach your audience on the go with intuitive and feature-rich apps."
            link="/services/app-development"
            imageUrl="/services/app-development.png"
          />
          <ServiceCard
            title="Marketing"
            description="Effective strategies to boost your online presence. Reach your target audience and drive conversions with marketing techniques."
            link="/services/marketing"
            imageUrl="/services/marketing.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;