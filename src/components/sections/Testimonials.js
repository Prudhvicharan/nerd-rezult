import React from "react";
import { TestimonialCard } from "../ui";
import { ChevronRight } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    id: "testimonial1",
    quote:
      "NerdRezult transformed our approach to AI development. With their outcome-based model, we achieved our machine learning goals in half the time and with predictable costs.",
    authorName: "Sarah Johnson",
    authorRole: "CTO, HealthTech Innovations",
    authorImage: "/api/placeholder/48/48",
  },
  {
    id: "testimonial2",
    quote:
      "The quality of AI talent on NerdRezult is exceptional. Our recommendation engine project was delivered on time and has already increased our conversion rates by 38%.",
    authorName: "Michael Cheng",
    authorRole: "VP of Product, E-commerce Giant",
    authorImage: "/api/placeholder/48/48",
  },
  {
    id: "testimonial3",
    quote:
      "As a startup, we were skeptical about AI consulting costs. NerdRezult's milestone-based payment model allowed us to implement AI solutions without breaking our budget.",
    authorName: "Alex Rodriguez",
    authorRole: "Founder, AI-First Startup",
    authorImage: "/api/placeholder/48/48",
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Companies of all sizes have achieved remarkable results with our
            outcome-based AI talent solutions.
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
            href="#"
            className="text-indigo-600 font-medium inline-flex items-center"
          >
            Read more success stories
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
