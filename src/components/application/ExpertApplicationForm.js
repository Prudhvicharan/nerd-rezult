import React, { useState, useEffect } from "react";
import { ProgressBar } from "./index";
import FormNavigation from "./FormNavigation";

/**
 * Container component for the multi-step expert application form
 * @param {array} steps - Array of step components to render
 * @param {object} initialData - Initial form data
 * @param {function} onSubmit - Function to call when form is submitted
 * @param {function} onCancel - Function to call when form is canceled
 * @param {function} onStepChange - Function to call when step changes
 */
function ExpertApplicationForm({
  steps,
  initialData = {},
  onSubmit,
  onCancel,
  onStepChange,
}) {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = steps.length;

  // Handle form completion (last step is typically a success/confirmation screen)
  const isComplete = activeStep > totalSteps;

  // Figure out if we're on first or last step
  const isFirstStep = activeStep === 1;
  const isLastStep = activeStep === totalSteps;

  // Call onStepChange when activeStep changes
  useEffect(() => {
    if (onStepChange) {
      onStepChange(activeStep);
    }
  }, [activeStep, onStepChange]);

  // Update form data
  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  // Go to previous step
  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
      // Scroll to top for better UX
      window.scrollTo(0, 0);
    }
  };

  // Go to next step
  const nextStep = async () => {
    // If we're on the last step, submit the form
    if (isLastStep) {
      setIsSubmitting(true);
      try {
        if (onSubmit) {
          await onSubmit(formData);
        }
        // Move to success/confirmation step
        setActiveStep(activeStep + 1);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Otherwise, just go to the next step
      setActiveStep(activeStep + 1);
    }
    // Scroll to top for better UX
    window.scrollTo(0, 0);
  };

  // Render the current step
  const renderStep = () => {
    if (isComplete) {
      // If we've completed all steps, show the success screen
      return (
        <div className="text-center py-8">
          Application submitted successfully!
        </div>
      );
    }

    // Get the current step component
    const StepComponent = steps[activeStep - 1];

    // If the step doesn't exist, show an error
    if (!StepComponent) {
      return <div>Step not found</div>;
    }

    // Render the current step component with necessary props
    return (
      <StepComponent formData={formData} updateFormData={updateFormData} />
    );
  };

  return (
    <div className="flex flex-col min-h-[60vh]">
      {/* Only show progress bar if we're not on success screen */}
      {!isComplete && (
        <ProgressBar currentStep={activeStep} totalSteps={totalSteps} />
      )}

      {/* Main form content */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {renderStep()}

            {/* Only show navigation if we're not on success screen */}
            {!isComplete && (
              <FormNavigation
                onPrevious={prevStep}
                onNext={nextStep}
                currentStep={activeStep}
                totalSteps={totalSteps}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                backToHomeText="Back to Home"
                onBackToHome={onCancel}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExpertApplicationForm;
