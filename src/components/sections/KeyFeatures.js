import React from "react";
import { FeatureCard } from "../ui";
import {
  Target,
  Brain,
  Award,
  Briefcase,
  FileCheck,
  Shield,
} from "lucide-react";

// Features data
const features = [
  {
    id: "outcome-pricing",
    icon: <Target className="h-6 w-6 text-indigo-600" />,
    title: "Outcome-Based Pricing",
    description:
      "Pay for results, not hours. Our milestone-based approach ensures you only pay when predefined objectives are achieved.",
  },
  {
    id: "ai-matching",
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    title: "AI-Powered Matching",
    description:
      "Our intelligent algorithms match your AI project requirements with the perfect experts, considering specialized skills, domain knowledge, and proven success.",
  },
  {
    id: "elite-talent",
    icon: <Award className="h-6 w-6 text-indigo-600" />,
    title: "Elite AI Talent",
    description:
      "Access to rigorously vetted AI professionals trained at top programs like Duke AI Product Management, with proven track records in delivering AI solutions.",
  },
  {
    id: "industry-solutions",
    icon: <Briefcase className="h-6 w-6 text-indigo-600" />,
    title: "Industry-Specific AI Solutions",
    description:
      "Specialized expertise in healthcare, finance, e-commerce, and enterprise automation, ensuring domain-specific AI implementations.",
  },
  {
    id: "quality-guaranteed",
    icon: <FileCheck className="h-6 w-6 text-indigo-600" />,
    title: "Quality Guaranteed",
    description:
      "AI-driven quality control and thorough audits ensure every deliverable meets the highest standards before it reaches you.",
  },
  {
    id: "smart-contracts",
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: "Smart Contract Payments",
    description:
      "Secure and transparent milestone-based payment system ensures both clients and experts are protected, with funds released only upon objective completion.",
  },
];

function KeyFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How NerdRezult is Different
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how businesses access AI expertise with our
            outcome-based approach that guarantees results and eliminates the
            unpredictability of hourly billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
