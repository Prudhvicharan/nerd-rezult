import React from "react";
import { Button } from "../ui";

function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your AI Strategy?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join NerdRezult today and access elite AI talent with our
            revolutionary outcome-based model. No more unpredictable costs or
            uncertain results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="tertiary" size="lg">
              Find AI Talent
            </Button>
            <Button variant="secondary" size="lg">
              Join As Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
