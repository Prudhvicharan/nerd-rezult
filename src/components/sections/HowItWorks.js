import React, { useState } from "react";
import { ProcessStep, Tabs, Button } from "../ui";
import { ArrowRight } from "lucide-react";

// Client steps data
const clientSteps = [
  {
    number: 1,
    title: "Define Your AI Project",
    description:
      "Specify your AI project requirements, goals, and desired outcomes using our structured framework. Our AI will help clarify objectives.",
  },
  {
    number: 2,
    title: "Get Matched With Experts",
    description:
      "Our AI matching algorithm connects you with the most qualified AI experts for your specific project needs. Review expert profiles and select your team.",
  },
  {
    number: 3,
    title: "Define Milestones & Outcomes",
    description:
      "Work with your selected experts to establish clear milestones, deliverables, and success criteria with predefined payment terms.",
  },
  {
    number: 4,
    title: "Project Development",
    description:
      "Track progress through our intelligent project management dashboard as your team works toward each milestone with quality checkpoints.",
  },
  {
    number: 5,
    title: "Quality Verification",
    description:
      "Each milestone undergoes AI-powered quality verification and testing to ensure deliverables meet predefined criteria before payment.",
  },
  {
    number: 6,
    title: "Milestone-Based Payment",
    description:
      "Funds are securely released through our smart contract system only when milestones are successfully completed and verified.",
  },
];

// Expert steps data
const expertSteps = [
  {
    number: 1,
    title: "Create Your AI Expert Profile",
    description:
      "Showcase your AI skills, certifications, specializations, and past successful projects to stand out.",
  },
  {
    number: 2,
    title: "Complete Expert Verification",
    description:
      "Pass our comprehensive AI skills assessment and verification process to join our elite network of AI professionals.",
  },
  {
    number: 3,
    title: "Get Matched With Projects",
    description:
      "Our AI algorithm matches you with projects that align perfectly with your skills, experience, and career goals.",
  },
  {
    number: 4,
    title: "Define Outcomes & Milestones",
    description:
      "Collaborate with clients to establish clear deliverables, success criteria, and milestone-based payment terms.",
  },
  {
    number: 5,
    title: "Execute With Excellence",
    description:
      "Leverage our AI development tools and collaboration platform to deliver high-quality results efficiently.",
  },
  {
    number: 6,
    title: "Get Paid For Results",
    description:
      "Receive secure payments through our smart contract system as you complete each milestone successfully.",
  },
];

// Tabs configuration
const tabOptions = [
  { id: "clients", label: "For Businesses" },
  { id: "experts", label: "For AI Experts" },
];

function HowItWorks() {
  const [activeTab, setActiveTab] = useState("clients");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How NerdRezult Works
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our structured process ensures successful outcomes for businesses
            and rewarding opportunities for AI experts.
          </p>

          {/* Tabs for Clients and Experts */}
          <div className="flex justify-center mt-6">
            <Tabs
              tabs={tabOptions}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTab === "clients"
            ? clientSteps.map((step) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))
            : expertSteps.map((step) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            {activeTab === "clients"
              ? "Start Your AI Project"
              : "Join as an AI Expert"}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
