import React from "react";
import { IndustryCard } from "../ui";
import { Zap, Code, Shield, ChevronRight } from "lucide-react";

// Industries data
const industries = [
  {
    id: "ecommerce",
    icon: <Zap className="h-8 w-8 text-indigo-600" />,
    title: "E-commerce",
    description:
      "Recommendation engines, demand forecasting, inventory optimization, pricing strategies",
  },
  {
    id: "manufacturing",
    icon: (
      <svg
        className="h-8 w-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
    title: "Manufacturing",
    description:
      "Predictive maintenance, quality control, supply chain optimization",
  },
  {
    id: "technology",
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    title: "Technology",
    description:
      "Automated DevOps, AI integration, infrastructure optimization, security intelligence",
  },
  {
    id: "marketing",
    icon: (
      <svg
        className="h-8 w-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
    title: "Marketing",
    description:
      "Customer segmentation, campaign optimization, sentiment analysis, predictive analytics",
  },
  {
    id: "logistics",
    icon: (
      <svg
        className="h-8 w-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    title: "Logistics",
    description:
      "Route optimization, delivery prediction, demand forecasting, warehouse automation",
  },
  {
    id: "insurance",
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Insurance",
    description:
      "Risk assessment, fraud detection, claims processing automation, personalized pricing",
  },
];

function IndustriesGrid() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI experts specialize in delivering outcome-based solutions
            tailored to the unique challenges of these industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="text-indigo-600 font-medium inline-flex items-center"
          >
            View all industry solutions
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default IndustriesGrid;
