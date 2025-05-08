import React from "react";
import { PricingCard } from "../ui";

// Pricing plans data
const pricingPlans = [
  {
    id: "basic",
    title: "Basic",
    price: "$999",
    description:
      "Ideal for startups and small businesses beginning their AI journey.",
    features: [
      "Access to vetted AI experts",
      "Standard project execution",
      "Basic quality assurance",
      "Email support",
    ],
    buttonText: "Choose Basic",
    isPopular: false,
  },
  {
    id: "premium",
    title: "Premium",
    price: "$2,499",
    description:
      "Perfect for growing companies ready to scale their AI initiatives.",
    features: [
      "Priority matching with elite AI professionals",
      "Dedicated support team",
      "Advanced quality verification",
      "On-demand AI project execution",
      "Priority phone & email support",
    ],
    buttonText: "Choose Premium",
    isPopular: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "$4,999",
    description:
      "For organizations requiring comprehensive AI transformation solutions.",
    features: [
      "Customized AI strategy planning",
      "Dedicated AI teams",
      "Enterprise-grade security",
      "AI performance benchmarking tools",
      "24/7 dedicated support",
      "Custom AI solution development",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

function PricingPlans() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscription Plans
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your AI development needs with our
            flexible, outcome-based pricing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              isPopular={plan.isPopular}
              buttonVariant={plan.isPopular ? "primary" : "dark"}
            />
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600">
          <p>
            All plans include secure milestone-based payments and quality
            assurance
          </p>
          <a
            href="#"
            className="text-indigo-600 font-medium hover:text-indigo-800 mt-2 inline-block"
          >
            Request custom pricing for specific needs
          </a>
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
