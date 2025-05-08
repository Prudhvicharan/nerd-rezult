import React from "react";
import { FeatureCard } from "../ui";
import { DollarSign, Brain, Star, FileCheck, Users, Clock } from "lucide-react";

// Features data
const features = [
  {
    id: "earning-potential",
    icon: <DollarSign className="h-6 w-6 text-indigo-600" />,
    title: "Higher Earning Potential",
    description:
      "Our outcome-based model means you're compensated fairly for your expertise and results, not just your time.",
  },
  {
    id: "high-impact-projects",
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    title: "High-Impact AI Projects",
    description:
      "Work with innovative startups and forward-thinking enterprises on challenging AI projects that make a difference.",
  },
  {
    id: "intelligent-matching",
    icon: <Star className="h-6 w-6 text-indigo-600" />,
    title: "Intelligent Matching",
    description:
      "Our AI matching algorithm connects you with projects perfectly suited to your skills, experience, and career goals.",
  },
  {
    id: "transparent-milestones",
    icon: <FileCheck className="h-6 w-6 text-indigo-600" />,
    title: "Transparent Milestone System",
    description:
      "Our structured milestone approach ensures clear expectations and timely payments upon successful completion of each phase.",
  },
  {
    id: "elite-community",
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: "Elite Community",
    description:
      "Join a network of top-tier AI professionals, collaborate on complex problems, and grow your expertise through peer learning.",
  },
  {
    id: "flexible-work",
    icon: <Clock className="h-6 w-6 text-indigo-600" />,
    title: "Flexible Work Arrangement",
    description:
      "Choose projects that align with your schedule and work remotely from anywhere in the world on your own terms.",
  },
];

/**
 * "Why Join NerdRezult" section for the expert application process
 */
function WhyJoinSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Join NerdRezult?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our outcome-based platform helps elite AI experts maximize their
            earning potential and work on impactful projects.
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

export default WhyJoinSection;
