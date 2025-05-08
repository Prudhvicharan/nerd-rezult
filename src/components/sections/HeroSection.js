import React from "react";
import { Button } from "../ui";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 to-purple-800 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Outcome-Based AI Expertise On Demand
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Access the world's top AI Product Managers, ML Engineers, and Data
              Scientists with a revolutionary model where you pay for results,
              not hours.
            </p>
            <div className="flex space-x-4">
              <Button variant="tertiary" size="lg">
                Find AI Talent
              </Button>
              <Button variant="secondary" size="lg">
                Join As Expert
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/api/placeholder/600/400"
              alt="AI Talent Marketplace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
