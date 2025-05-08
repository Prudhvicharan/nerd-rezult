import React, { useState } from "react";
import {
  ChevronRight,
  Award,
  Check,
  Brain,
  Star,
  Code,
  Cpu,
  DollarSign,
  Zap,
  BarChart2,
  Menu,
  X,
  ArrowLeft,
  FileCheck,
  Clock,
  Users,
  AlertCircle,
} from "lucide-react";

export default function JoinAsExpert() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    expertise: [],
    yearsExperience: "",
    education: "",
    certification: "",
  });

  const expertiseOptions = [
    { id: "aipm", label: "AI Product Management" },
    { id: "ml", label: "Machine Learning Engineering" },
    { id: "ds", label: "Data Science" },
    { id: "cv", label: "Computer Vision" },
    { id: "nlp", label: "Natural Language Processing" },
    { id: "ra", label: "Responsible AI" },
    { id: "mlops", label: "MLOps" },
    { id: "ai-research", label: "AI Research" },
  ];

  const goBack = () => {
    window.history.back();
  };

  const handleExpertiseChange = (id) => {
    if (formData.expertise.includes(id)) {
      setFormData({
        ...formData,
        expertise: formData.expertise.filter((item) => item !== id),
      });
    } else {
      setFormData({
        ...formData,
        expertise: [...formData.expertise, id],
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setActiveStep(activeStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
    window.scrollTo(0, 0);
  };

  const renderStep1 = () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Tell Us About Your AI Expertise
      </h2>
      <p className="text-gray-600 mb-8">
        Select your areas of expertise and provide details about your experience
        to help us match you with the perfect projects.
      </p>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-4">
          Your AI Expertise (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expertiseOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleExpertiseChange(option.id)}
              className={`border rounded-lg p-4 cursor-pointer transition-colors flex items-center ${
                formData.expertise.includes(option.id)
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              {formData.expertise.includes(option.id) ? (
                <Check className="h-5 w-5 text-indigo-600 mr-3" />
              ) : (
                <div className="w-5 h-5 border border-gray-300 rounded-sm mr-3"></div>
              )}
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Years of Experience
        </label>
        <select
          name="yearsExperience"
          value={formData.yearsExperience}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select years of experience</option>
          <option value="0-2">0-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="6-10">6-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Highest Education
        </label>
        <select
          name="education"
          value={formData.education}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select your highest education</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">Ph.D.</option>
          <option value="self-taught">Self-Taught Expert</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          AI Certifications (Optional)
        </label>
        <input
          type="text"
          name="certification"
          value={formData.certification}
          onChange={handleInputChange}
          placeholder="e.g., Duke AI Product Management, Stanford ML, etc."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={goBack}
          className="flex items-center text-indigo-600 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </button>
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700"
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Showcase Your AI Projects
      </h2>
      <p className="text-gray-600 mb-8">
        Share your most impressive AI projects to demonstrate your expertise and
        attract high-quality opportunities.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Project #1</h3>
          <span className="text-sm text-gray-500">Required</span>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Project Title
            </label>
            <input
              type="text"
              placeholder="e.g., Enterprise-grade NLP Recommendation System"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Your Role
              </label>
              <input
                type="text"
                placeholder="e.g., Lead ML Engineer"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Project Duration
              </label>
              <input
                type="text"
                placeholder="e.g., 6 months"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Project Description
            </label>
            <textarea
              rows="4"
              placeholder="Describe the project, your contributions, and the outcomes achieved..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Technologies Used
            </label>
            <input
              type="text"
              placeholder="e.g., TensorFlow, PyTorch, Kubernetes, etc."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Measurable Results
            </label>
            <input
              type="text"
              placeholder="e.g., Increased conversion rates by 45%, Reduced inference time by 75%"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="text-right mb-8">
        <button className="inline-flex items-center text-indigo-600 font-medium">
          + Add Another Project
        </button>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8">
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
          <p className="text-indigo-800 text-sm">
            Projects with quantifiable outcomes and clear, detailed descriptions
            are much more likely to attract high-paying opportunities.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="flex items-center text-indigo-600 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Previous Step
        </button>
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700"
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Set Your Preferences
      </h2>
      <p className="text-gray-600 mb-8">
        Tell us about your desired projects and compensation to help us match
        you with the perfect opportunities.
      </p>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Project Types You're Interested In
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Predictive Analytics",
            "Computer Vision",
            "NLP/NLU Systems",
            "Recommendation Engines",
            "Generative AI",
            "AI Ethics & Governance",
            "MLOps Implementation",
            "AI Strategy",
          ].map((type) => (
            <div
              key={type}
              className="border rounded-lg p-4 cursor-pointer hover:border-indigo-300 flex items-center"
            >
              <div className="w-5 h-5 border border-gray-300 rounded-sm mr-3"></div>
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Industries You Prefer
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Healthcare",
            "Finance",
            "E-commerce",
            "Manufacturing",
            "Technology",
            "Entertainment",
            "Education",
            "Insurance",
            "Logistics",
          ].map((industry) => (
            <div
              key={industry}
              className="border rounded-lg p-4 cursor-pointer hover:border-indigo-300 flex items-center"
            >
              <div className="w-5 h-5 border border-gray-300 rounded-sm mr-3"></div>
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Availability
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select your availability</option>
            <option value="full-time">Full-time (40+ hrs/week)</option>
            <option value="part-time">Part-time (20-39 hrs/week)</option>
            <option value="limited">Limited (10-19 hrs/week)</option>
            <option value="minimal">Minimal (Less than 10 hrs/week)</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Desired Project Duration
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select preferred project length</option>
            <option value="short">Short-term (Less than 1 month)</option>
            <option value="medium">Medium-term (1-3 months)</option>
            <option value="long">Long-term (3+ months)</option>
            <option value="any">Any duration</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Expected Compensation Range (per project)
        </label>
        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">Select compensation range</option>
          <option value="range1">$1,000 - $5,000</option>
          <option value="range2">$5,000 - $15,000</option>
          <option value="range3">$15,000 - $50,000</option>
          <option value="range4">$50,000+</option>
          <option value="custom">Depends on project scope</option>
        </select>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="flex items-center text-indigo-600 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Previous Step
        </button>
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700"
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Complete Your Profile
      </h2>
      <p className="text-gray-600 mb-8">
        Almost there! Let's add the finishing touches to your AI expert profile.
      </p>

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="City, Country"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          LinkedIn Profile (Optional)
        </label>
        <input
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          GitHub/Portfolio URL (Optional)
        </label>
        <input
          type="url"
          placeholder="https://github.com/yourusername"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-8">
        <label className="block text-gray-800 font-medium mb-2">
          Professional Summary
        </label>
        <textarea
          rows="5"
          placeholder="Write a compelling summary of your AI expertise, experience, and what makes you a standout expert..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>

      <div className="mb-8">
        <label className="flex items-start">
          <input type="checkbox" className="mt-1 mr-3" />
          <span className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            . I understand that NerdRezult will process my data to provide
            services and match me with potential projects.
          </span>
        </label>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="flex items-center text-indigo-600 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Previous Step
        </button>
        <button
          onClick={nextStep}
          className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700"
        >
          Submit Application
        </button>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-indigo-100 text-indigo-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
        <Check className="h-10 w-10" />
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Application Submitted!
      </h2>
      <p className="text-gray-600 mb-8">
        Thank you for applying to join the NerdRezult AI expert network. Our
        team will review your application and get back to you within 48 hours.
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">What happens next?</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              1
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-800">Application Review</h4>
              <p className="text-gray-600 text-sm">
                Our expert vetting team will review your application and
                portfolio to ensure it meets our quality standards.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              2
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-800">Skills Assessment</h4>
              <p className="text-gray-600 text-sm">
                If your application meets our criteria, you'll be invited to
                complete a brief AI skills assessment relevant to your
                expertise.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              3
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-800">
                Profile Verification
              </h4>
              <p className="text-gray-600 text-sm">
                Our team will verify your credentials and professional
                background, ensuring trust and quality on our platform.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              4
            </div>
            <div className="text-left">
              <h4 className="font-medium text-gray-800">
                Welcome to NerdRezult!
              </h4>
              <p className="text-gray-600 text-sm">
                Once approved, you'll gain access to our platform and start
                getting matched with high-quality AI projects based on your
                expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={goBack}
        className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700"
      >
        Return to Home
      </button>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cpu className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">
              Nerd<span className="text-indigo-600">Rezult</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              For Businesses
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              For AI Experts
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Success Stories
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              Pricing
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 shadow-sm">
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              >
                How It Works
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              >
                For Businesses
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              >
                For AI Experts
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              >
                Success Stories
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-indigo-600 font-medium py-2"
              >
                Pricing
              </a>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 shadow-sm">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Join Our Elite AI Expert Network
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Get matched with high-value AI projects and earn more with our
            outcome-based payment model.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      {activeStep < 5 && (
        <div className="bg-white py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">
                  Step {activeStep} of 4
                </span>
                <span className="text-xs text-gray-500">
                  {activeStep === 1
                    ? "Your Expertise"
                    : activeStep === 2
                    ? "Your Projects"
                    : activeStep === 3
                    ? "Your Preferences"
                    : "Your Profile"}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${(activeStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          {activeStep === 1 && renderStep1()}
          {activeStep === 2 && renderStep2()}
          {activeStep === 3 && renderStep3()}
          {activeStep === 4 && renderStep4()}
          {activeStep === 5 && renderStep5()}
        </div>
      </section>

      {/* Why Join Section (Only shown on step 1) */}
      {activeStep === 1 && (
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <DollarSign className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Higher Earning Potential
                </h3>
                <p className="text-gray-600 mb-4">
                  Our outcome-based model means you're compensated fairly for
                  your expertise and results, not just your time.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  High-Impact AI Projects
                </h3>
                <p className="text-gray-600 mb-4">
                  Work with innovative startups and forward-thinking enterprises
                  on challenging AI projects that make a difference.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Intelligent Matching
                </h3>
                <p className="text-gray-600 mb-4">
                  Our AI matching algorithm connects you with projects perfectly
                  suited to your skills, experience, and career goals.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <FileCheck className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Transparent Milestone System
                </h3>
                <p className="text-gray-600 mb-4">
                  Our structured milestone approach ensures clear expectations
                  and timely payments upon successful completion of each phase.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Elite Community
                </h3>
                <p className="text-gray-600 mb-4">
                  Join a network of top-tier AI professionals, collaborate on
                  complex problems, and grow your expertise through peer
                  learning.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Flexible Work Arrangement
                </h3>
                <p className="text-gray-600 mb-4">
                  Choose projects that align with your schedule and work
                  remotely from anywhere in the world on your own terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expert Testimonials (Only shown on step 1) */}
      {activeStep === 1 && (
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hear From Our AI Experts
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                AI professionals are achieving remarkable success on the
                NerdRezult platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="text-indigo-600 text-5xl font-serif absolute top-4 left-4 leading-none">
                  "
                </div>
                <div className="pt-6">
                  <p className="text-gray-700 italic mb-6">
                    Since joining NerdRezult, I've increased my annual income by
                    65% while working on cutting-edge AI projects that actually
                    challenge my skills. The milestone-based approach keeps me
                    focused and clients happy.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                      <img src="/api/placeholder/48/48" alt="David Chen" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        David Chen
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Machine Learning Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="text-indigo-600 text-5xl font-serif absolute top-4 left-4 leading-none">
                  "
                </div>
                <div className="pt-6">
                  <p className="text-gray-700 italic mb-6">
                    The quality of projects on NerdRezult is exceptional. I've
                    been able to work with Fortune 500 companies on AI
                    initiatives that would have been impossible to access as a
                    freelancer on other platforms.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                      <img src="/api/placeholder/48/48" alt="Priya Sharma" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Priya Sharma
                      </h4>
                      <p className="text-gray-600 text-sm">
                        AI Product Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="text-indigo-600 text-5xl font-serif absolute top-4 left-4 leading-none">
                  "
                </div>
                <div className="pt-6">
                  <p className="text-gray-700 italic mb-6">
                    The outcome-based payment model aligns incentives perfectly.
                    I'm compensated for the value I create, not how many hours I
                    log. This has allowed me to optimize my workflow and deliver
                    projects faster.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                      <img src="/api/placeholder/48/48" alt="Marcus Johnson" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Marcus Johnson
                      </h4>
                      <p className="text-gray-600 text-sm">Data Scientist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Cpu className="h-8 w-8 text-indigo-400" />
                <h3 className="text-2xl font-bold">
                  Nerd<span className="text-indigo-400">Rezult</span>
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing the AI talent marketplace with our outcome-based
                approach.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 5.46a8.14 8.14 0 0 1-2.32.64 4.07 4.07 0 0 0 1.8-2.27 8.1 8.1 0 0 1-2.56.97 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.39 4.3a4.14 4.14 0 0 0 1.27 5.47 4.05 4.05 0a4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 15.45a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67V5.15A8.3 8.3 0 0 0 22 5.46Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9.22h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12ZM18.91 18.74h-3v-4.83c0-1.22-.43-2-1.5-2A1.57 1.57 0 0 0 12.91 13a2 2 0 0 0-.1.73v5h-3v-9.22h3v1.3a2.93 2.93 0 0 1 2.71-1.49c2 0 3.39 1.23 3.39 3.86Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">For Businesses</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    AI Talent Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Enterprise Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    AI Industry Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">For AI Experts</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Join Our Network
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Expert Verification
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    AI Certification Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Project Matching
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                &copy; 2025 NerdRezult. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
