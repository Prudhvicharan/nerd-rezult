import React, { useState } from "react";
import {
  ChevronRight,
  Award,
  Target,
  Brain,
  FileCheck,
  Shield,
  DollarSign,
  Zap,
  Code,
  BarChart2,
  Briefcase,
  Users,
  Cpu,
  Star,
  Check,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function NerdRezult() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("clients");

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Outcome-Based AI Expertise On Demand
              </h2>
              <p className="text-indigo-100 text-lg mb-8">
                Access the world's top AI Product Managers, ML Engineers, and
                Data Scientists with a revolutionary model where you pay for
                results, not hours.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100">
                  Find AI Talent
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10">
                  Join As Expert
                </button>
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

      {/* Key Differentiators Section */}
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
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Outcome-Based Pricing
              </h3>
              <p className="text-gray-600 mb-4">
                Pay for results, not hours. Our milestone-based approach ensures
                you only pay when predefined objectives are achieved.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium inline-flex items-center group"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI-Powered Matching
              </h3>
              <p className="text-gray-600 mb-4">
                Our intelligent algorithms match your AI project requirements
                with the perfect experts, considering specialized skills, domain
                knowledge, and proven success.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium inline-flex items-center group"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Elite AI Talent
              </h3>
              <p className="text-gray-600 mb-4">
                Access to rigorously vetted AI professionals trained at top
                programs like Duke AI Product Management, with proven track
                records in delivering AI solutions.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium inline-flex items-center group"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Industry-Specific AI Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized expertise in healthcare, finance, e-commerce, and
                enterprise automation, ensuring domain-specific AI
                implementations.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium inline-flex items-center group"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <FileCheck className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 mb-4">
                AI-driven quality control and thorough audits ensure every
                deliverable meets the highest standards before it reaches you.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium inline-flex items-center group"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Contract Payments
              </h3>
              <p className="text-gray-600 mb-4">
                Secure and transparent milestone-based payment system ensures
                both clients and experts are protected, with funds released only
                upon objective completion.
              </p>
              <a
                href="#"
                className="text-indigo-600 font-medium inline-flex items-center group"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              <div className="inline-flex p-1 bg-gray-100 rounded-lg">
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === "clients"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("clients")}
                >
                  For Businesses
                </button>
                <button
                  className={`px-4 py-2 rounded-md ${
                    activeTab === "experts"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("experts")}
                >
                  For AI Experts
                </button>
              </div>
            </div>
          </div>

          {activeTab === "clients" ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Define Your AI Project
                </h3>
                <p className="text-gray-600">
                  Specify your AI project requirements, goals, and desired
                  outcomes using our structured framework. Our AI will help
                  clarify objectives.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Get Matched With Experts
                </h3>
                <p className="text-gray-600">
                  Our AI matching algorithm connects you with the most qualified
                  AI experts for your specific project needs. Review expert
                  profiles and select your team.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Define Milestones & Outcomes
                </h3>
                <p className="text-gray-600">
                  Work with your selected experts to establish clear milestones,
                  deliverables, and success criteria with predefined payment
                  terms.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Project Development
                </h3>
                <p className="text-gray-600">
                  Track progress through our intelligent project management
                  dashboard as your team works toward each milestone with
                  quality checkpoints.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Quality Verification
                </h3>
                <p className="text-gray-600">
                  Each milestone undergoes AI-powered quality verification and
                  testing to ensure deliverables meet predefined criteria before
                  payment.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Milestone-Based Payment
                </h3>
                <p className="text-gray-600">
                  Funds are securely released through our smart contract system
                  only when milestones are successfully completed and verified.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Create Your AI Expert Profile
                </h3>
                <p className="text-gray-600">
                  Showcase your AI skills, certifications, specializations, and
                  past successful projects to stand out.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Complete Expert Verification
                </h3>
                <p className="text-gray-600">
                  Pass our comprehensive AI skills assessment and verification
                  process to join our elite network of AI professionals.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Get Matched With Projects
                </h3>
                <p className="text-gray-600">
                  Our AI algorithm matches you with projects that align
                  perfectly with your skills, experience, and career goals.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Define Outcomes & Milestones
                </h3>
                <p className="text-gray-600">
                  Collaborate with clients to establish clear deliverables,
                  success criteria, and milestone-based payment terms.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  5
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Execute With Excellence
                </h3>
                <p className="text-gray-600">
                  Leverage our AI development tools and collaboration platform
                  to deliver high-quality results efficiently.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-lg p-8 shadow-sm relative">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg absolute -top-5 left-8">
                  6
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  Get Paid For Results
                </h3>
                <p className="text-gray-600">
                  Receive secure payments through our smart contract system as
                  you complete each milestone successfully.
                </p>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold shadow-sm hover:bg-indigo-700 inline-flex items-center">
              {activeTab === "clients"
                ? "Start Your AI Project"
                : "Join as an AI Expert"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how NerdRezult stands out from traditional freelance platforms
              and consulting firms with our innovative outcome-based approach to
              AI talent.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center bg-indigo-700">
                    NerdRezult
                  </th>
                  <th className="py-4 px-6 text-center">Fiverr</th>
                  <th className="py-4 px-6 text-center">Upwork</th>
                  <th className="py-4 px-6 text-center">Toptal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">Pricing Model</td>
                  <td className="py-4 px-6 text-center bg-indigo-50 font-semibold text-indigo-800">
                    Outcome-based
                  </td>
                  <td className="py-4 px-6 text-center">Gig-based</td>
                  <td className="py-4 px-6 text-center">
                    Hourly/Project-based
                  </td>
                  <td className="py-4 px-6 text-center">Premium Hourly</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Talent Vetting</td>
                  <td className="py-4 px-6 text-center bg-indigo-50 font-semibold text-indigo-800">
                    Highly selective AI/ML experts
                  </td>
                  <td className="py-4 px-6 text-center">Open marketplace</td>
                  <td className="py-4 px-6 text-center">Open marketplace</td>
                  <td className="py-4 px-6 text-center">Rigorous vetting</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Project Scope</td>
                  <td className="py-4 px-6 text-center bg-indigo-50 font-semibold text-indigo-800">
                    AI-specific, milestone-driven
                  </td>
                  <td className="py-4 px-6 text-center">Small gigs</td>
                  <td className="py-4 px-6 text-center">Freelance tasks</td>
                  <td className="py-4 px-6 text-center">
                    High-end development
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Client Base</td>
                  <td className="py-4 px-6 text-center bg-indigo-50 font-semibold text-indigo-800">
                    AI-driven enterprises & startups
                  </td>
                  <td className="py-4 px-6 text-center">General businesses</td>
                  <td className="py-4 px-6 text-center">General businesses</td>
                  <td className="py-4 px-6 text-center">High-budget clients</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Matching Algorithm</td>
                  <td className="py-4 px-6 text-center bg-indigo-50 font-semibold text-indigo-800">
                    AI-powered intelligent matching
                  </td>
                  <td className="py-4 px-6 text-center">User-search-based</td>
                  <td className="py-4 px-6 text-center">
                    Algorithm & user-search
                  </td>
                  <td className="py-4 px-6 text-center">Hand-matched talent</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">
                    Support & Quality Control
                  </td>
                  <td className="py-4 px-6 text-center bg-indigo-50 font-semibold text-indigo-800">
                    AI-driven quality audits
                  </td>
                  <td className="py-4 px-6 text-center">Minimal support</td>
                  <td className="py-4 px-6 text-center">Limited support</td>
                  <td className="py-4 px-6 text-center">
                    High-touch management
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our AI experts specialize in delivering outcome-based solutions
              tailored to the unique challenges of these industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Healthcare */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                E-commerce
              </h3>
              <p className="text-gray-600 text-sm">
                Recommendation engines, demand forecasting, inventory
                optimization, pricing strategies
              </p>
            </div>

            {/* Manufacturing */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Manufacturing
              </h3>
              <p className="text-gray-600 text-sm">
                Predictive maintenance, quality control, supply chain
                optimization
              </p>
            </div>

            {/* Technology */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Technology
              </h3>
              <p className="text-gray-600 text-sm">
                Automated DevOps, AI integration, infrastructure optimization,
                security intelligence
              </p>
            </div>

            {/* Marketing */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Marketing
              </h3>
              <p className="text-gray-600 text-sm">
                Customer segmentation, campaign optimization, sentiment
                analysis, predictive analytics
              </p>
            </div>

            {/* Logistics */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Logistics
              </h3>
              <p className="text-gray-600 text-sm">
                Route optimization, delivery prediction, demand forecasting,
                warehouse automation
              </p>
            </div>

            {/* Insurance */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Insurance
              </h3>
              <p className="text-gray-600 text-sm">
                Risk assessment, fraud detection, claims processing automation,
                personalized pricing
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="text-indigo-600 font-medium inline-flex items-center"
            >
              View all industry solutions
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
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
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">$999</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Ideal for startups and small businesses beginning their AI
                  journey.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Access to vetted AI experts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Standard project execution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Basic quality assurance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Email support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 text-white py-3 rounded-md font-medium hover:bg-gray-700 transition-colors">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="border-2 border-indigo-600 rounded-lg overflow-hidden relative hover:shadow-lg transition-shadow">
              <div className="bg-indigo-600 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Premium
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    $2,499
                  </span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for growing companies ready to scale their AI
                  initiatives.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Priority matching with elite AI professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Dedicated support team
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Advanced quality verification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      On-demand AI project execution
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Priority phone & email support
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors">
                  Choose Premium
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Enterprise
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    $4,999
                  </span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  For organizations requiring comprehensive AI transformation
                  solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Customized AI strategy planning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">Dedicated AI teams</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Enterprise-grade security
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      AI performance benchmarking tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      24/7 dedicated support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span className="text-gray-600">
                      Custom AI solution development
                    </span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 text-white py-3 rounded-md font-medium hover:bg-gray-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
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

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Companies of all sizes have achieved remarkable results with our
              outcome-based AI talent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="text-indigo-600 text-5xl font-serif absolute top-4 left-4 leading-none">
                "
              </div>
              <div className="pt-6">
                <p className="text-gray-700 italic mb-6">
                  NerdRezult transformed our approach to AI development. With
                  their outcome-based model, we achieved our machine learning
                  goals in half the time and with predictable costs.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img src="/api/placeholder/48/48" alt="Sarah Johnson" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Sarah Johnson
                    </h4>
                    <p className="text-gray-600 text-sm">
                      CTO, HealthTech Innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="text-indigo-600 text-5xl font-serif absolute top-4 left-4 leading-none">
                "
              </div>
              <div className="pt-6">
                <p className="text-gray-700 italic mb-6">
                  The quality of AI talent on NerdRezult is exceptional. Our
                  recommendation engine project was delivered on time and has
                  already increased our conversion rates by 38%.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img src="/api/placeholder/48/48" alt="Michael Cheng" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Michael Cheng
                    </h4>
                    <p className="text-gray-600 text-sm">
                      VP of Product, E-commerce Giant
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm relative">
              <div className="text-indigo-600 text-5xl font-serif absolute top-4 left-4 leading-none">
                "
              </div>
              <div className="pt-6">
                <p className="text-gray-700 italic mb-6">
                  As a startup, we were skeptical about AI consulting costs.
                  NerdRezult's milestone-based payment model allowed us to
                  implement AI solutions without breaking our budget.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img src="/api/placeholder/48/48" alt="Alex Rodriguez" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Alex Rodriguez
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Founder, AI-First Startup
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="text-indigo-600 font-medium inline-flex items-center"
            >
              Read more success stories
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <button className="bg-white text-indigo-700 px-8 py-3 rounded-md font-semibold shadow-lg hover:bg-gray-100">
                Find AI Talent
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10">
                Join As Expert
              </button>
            </div>
          </div>
        </div>
      </section>

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
