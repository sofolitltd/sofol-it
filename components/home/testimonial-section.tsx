import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  message: string;
  image: string;
}

interface ClientTestimonialsProps {
  title: string;
  subTitle: string;
  testimonials: Testimonial[];
}

const testimonialsData = [
  {
    id: 1,
    name: "Afjal Hossain Hridoy",
    position: "Co-Founder, Wellbeing Clinic",
    message:
      "Choosing Sofol IT for our app development was a game-changer. Their professionalism made the entire process smooth. Our app now stands out with its beautiful design and user-friendly interface.",
    image: "/images/hridoy.png",
  },
  {
    id: 2,
    name: "Towfiqur Rahman",
    position: "Founder, Doial",
    message:
      "Choosing Sofol IT for our app development was a game-changer. Their professionalism made the entire process smooth. Our app now stands out with its beautiful design and user-friendly interface.",
    image: "/images/tusar.png",
  },
  {
    id: 3,
    name: "Ashiqur  Rahman",
    position: "CEO, Petelementbd.com",
    message:
      "Working with Sofol IT was an absolute pleasure! Their team's expertise and attention to detail in a stunning website that perfectly represents our brand. Highly recommend their exceptional services.",
    image: "/images/ashik.png",
  },
];

//
const ClientTestimonials: React.FC<ClientTestimonialsProps> = ({
  title,
  subTitle,
  testimonials,
}) => {
  return (
    <div className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-4">{title}</h2>
      <p className="text-lg text-gray-600 text-center mb-8">{subTitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border border-gray-200 p-4 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
                width={48} 
                height={48} 
                style={{
                  objectFit: "cover",
                }}
              
              />

              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

//
const TestimonialSection: React.FC = () => {
  return (
    <div>
      <ClientTestimonials
        title="Client Testimonials"
        subTitle="See what our clients have to say about us."
        testimonials={testimonialsData}
      />
    </div>
  );
};

export default TestimonialSection;
