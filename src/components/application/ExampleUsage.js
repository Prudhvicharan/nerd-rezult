import React, { useState } from "react";
import { ApplicationHeader } from "./index";
import { ProgressBar } from "./index";

// This is just an example to show how the components would be used
function ExampleUsage() {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 4;

  return (
    <div>
      <ApplicationHeader
        title="Join Our Elite AI Expert Network"
        description="Get matched with high-value AI projects and earn more with our outcome-based payment model."
      />

      <ProgressBar currentStep={activeStep} totalSteps={totalSteps} />

      <div className="py-8 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Current Step: {activeStep}
          </h2>

          {/* Example buttons to navigate between steps */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
              className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={() =>
                setActiveStep(Math.min(totalSteps, activeStep + 1))
              }
              disabled={activeStep === totalSteps}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleUsage;
