import React from "react";
import { TestimonialCard } from "../ui";
import { ChevronRight } from "lucide-react";

// Expert testimonials data
const testimonials = [
  {
    id: "testimonial1",
    quote:
      "Since joining NerdRezult, I've increased my annual income by 65% while working on cutting-edge AI projects that actually challenge my skills. The milestone-based approach keeps me focused and clients happy.",
    authorName: "David Chen",
    authorRole: "Machine Learning Engineer",
    authorImage: "/api/placeholder/48/48",
  },
  {
    id: "testimonial2",
    quote:
      "The quality of projects on NerdRezult is exceptional. I've been able to work with Fortune 500 companies on AI initiatives that would have been impossible to access as a freelancer on other platforms.",
    authorName: "Priya Sharma",
    authorRole: "AI Product Manager",
    authorImage: "/api/placeholder/48/48",
  },
  {
    id: "testimonial3",
    quote:
      "The outcome-based payment model aligns incentives perfectly. I'm compensated for the value I create, not how many hours I log. This has allowed me to optimize my workflow and deliver projects faster.",
    authorName: "Marcus Johnson",
    authorRole: "Data Scientist",
    authorImage: "/api/placeholder/48/48",
  },
];

/**
 * Expert testimonials section for the expert application process
 */
function ExpertTestimonialsSection() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hear From Our AI Experts
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            AI professionals are achieving remarkable success on the NerdRezult
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              authorName={testimonial.authorName}
              authorRole={testimonial.authorRole}
              authorImage={testimonial.authorImage}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/success-stories"
            className="text-indigo-600 font-medium inline-flex items-center"
          >
            Read more expert stories
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExpertTestimonialsSection;
