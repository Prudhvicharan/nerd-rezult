import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "./components/layout";
import {
  ApplicationHeader,
  ExpertApplicationForm,
  ExpertiseStep,
  ProjectsStep,
  PreferencesStep,
  ProfileStep,
  SuccessStep,
} from "./components/application";
import {
  WhyJoinSection,
  ExpertTestimonialsSection,
} from "./components/sections";

function JoinAsExpert() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Initial form data
  const initialData = {
    expertise: [],
    yearsExperience: "",
    education: "",
    certification: "",
    projects: [{ id: 1 }],
    projectInterests: [],
    preferredIndustries: [],
    availability: "",
    preferredDuration: "",
    compensationRange: "",
    termsAgreed: false,
  };

  // Define the steps of the application process
  const steps = [
    ExpertiseStep,
    ProjectsStep,
    PreferencesStep,
    ProfileStep,
    SuccessStep,
  ];

  // Handle form submission
  const handleSubmit = async (formData) => {
    console.log("Form submitted with data:", formData);

    // In a real application, you would send the data to an API
    // For now, we'll just simulate a delay
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  };

  // Handle cancellation
  const handleCancel = () => {
    navigate("/");
  };

  // Track step changes to show/hide additional sections
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <Layout>
      <ApplicationHeader
        title="Join Our Elite AI Expert Network"
        description="Get matched with high-value AI projects and earn more with our outcome-based payment model."
      />

      <ExpertApplicationForm
        steps={steps}
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onStepChange={handleStepChange}
      />

      {/* Only show additional sections on the first step */}
      {currentStep === 1 && (
        <>
          <WhyJoinSection />
          <ExpertTestimonialsSection />
        </>
      )}
    </Layout>
  );
}

export default JoinAsExpert;
