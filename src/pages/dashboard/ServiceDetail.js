import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../components/dashboard/layout";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Eye,
  Sparkles,
  Star,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  BarChart,
  AlertTriangle,
  Download,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

/**
 * Service Detail page to view and manage a single AI service
 */
const ServiceDetail = () => {
  // Get the service ID from URL params
  const { id } = useParams();
  const navigate = useNavigate();

  // Local state
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // Fetch service data
  useEffect(() => {
    // Simulate API call
    const fetchService = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        // For now, we'll use mock data
        setTimeout(() => {
          setService(getMockServiceData(id));
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching service:", error);
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  // Toggle section expansion
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Get status config
  const getStatusConfig = (status) => {
    switch (status) {
      case "active":
        return {
          color: "text-green-600",
          bgColor: "bg-green-100",
          icon: <CheckCircle className="h-5 w-5 mr-1" />,
          text: "Active",
        };
      case "pending":
        return {
          color: "text-amber-600",
          bgColor: "bg-amber-100",
          icon: <Clock className="h-5 w-5 mr-1" />,
          text: "Pending Review",
        };
      case "rejected":
        return {
          color: "text-red-600",
          bgColor: "bg-red-100",
          icon: <AlertCircle className="h-5 w-5 mr-1" />,
          text: "Rejected",
        };
      case "draft":
        return {
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          icon: <Edit className="h-5 w-5 mr-1" />,
          text: "Draft",
        };
      default:
        return {
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          icon: <AlertCircle className="h-5 w-5 mr-1" />,
          text: status,
        };
    }
  };

  // Navigate back to services list
  const handleBack = () => {
    navigate("/expert-dashboard/services");
  };

  // Navigate to edit service
  const handleEdit = () => {
    navigate(`/expert-dashboard/services/edit/${id}`);
  };

  // Handle service deletion
  const handleDelete = () => {
    // Close modal
    setDeleteModalOpen(false);

    // In a real app, this would call an API
    // For now, just navigate back
    navigate("/expert-dashboard/services");
  };

  // Loading state
  if (loading) {
    return (
      <DashboardLayout pageTitle="Service Details">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200">
              <div className="h-8 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>

            <div className="p-6">
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="h-5 bg-gray-200 rounded w-1/3 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Service not found
  if (!service) {
    return (
      <DashboardLayout pageTitle="Service Not Found">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Service Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The service you're looking for does not exist or you don't have
            permission to view it.
          </p>
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Back to Services
          </button>
        </div>
      </DashboardLayout>
    );
  }

  // Get status display config
  const statusConfig = getStatusConfig(service.status);

  return (
    <DashboardLayout pageTitle="Service Details">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          <span>Back to Services</span>
        </button>
      </div>

      {/* Service header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <div className="flex items-center mb-2">
              <h1 className="text-2xl font-bold text-gray-900 mr-3">
                {service.name}
              </h1>
              <span
                className={`${statusConfig.bgColor} ${statusConfig.color} px-3 py-1 rounded-full text-sm font-medium flex items-center`}
              >
                {statusConfig.icon}
                {statusConfig.text}
              </span>
            </div>
            <p className="text-gray-600">{service.category}</p>
          </div>

          <div className="flex space-x-3">
            {service.status === "active" && (
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Eye className="h-4 w-4 mr-2" />
                View Public Page
              </button>
            )}

            <button
              onClick={handleEdit}
              className="flex items-center px-3 py-2 border border-indigo-600 bg-white text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-50"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Service
            </button>

            <button
              onClick={() => setDeleteModalOpen(true)}
              className="flex items-center px-3 py-2 border border-red-600 bg-white text-red-600 rounded-md text-sm font-medium hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </button>
          </div>
        </div>

        {/* Service description */}
        <div className="p-6">
          <p className="text-gray-700 mb-4">{service.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-2">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Service URL */}
          {service.serviceUrl && (
            <a
              href={service.serviceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:underline flex items-center mt-3"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              {service.serviceUrl}
            </a>
          )}

          {/* Rejection reason */}
          {service.status === "rejected" && service.rejectionReason && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <h3 className="font-medium text-red-800 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Rejection Reason
              </h3>
              <p className="mt-1 text-red-700">{service.rejectionReason}</p>
              {service.rejectionDate && (
                <p className="mt-1 text-sm text-red-600">
                  Rejected on{" "}
                  {new Date(service.rejectionDate).toLocaleDateString()}
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Clients */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Users className="h-4 w-4 mr-1" />
            <span>Total Clients</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {service.clients}
          </p>
          <p className="text-sm text-gray-600">
            {service.activeClients} active this month
          </p>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>Total Revenue</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(service.revenue)}
          </p>
          <p className="text-sm text-gray-600">
            {formatCurrency(service.monthlyRevenue)} this month
          </p>
        </div>

        {/* Rating */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Star className="h-4 w-4 mr-1" />
            <span>Average Rating</span>
          </div>
          <div className="flex items-center mb-1">
            <p className="text-2xl font-bold text-gray-900 mr-2">
              {service.rating.toFixed(1)}
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(service.rating)
                      ? "text-amber-500 fill-amber-500"
                      : i < Math.ceil(service.rating) &&
                        i < Math.floor(service.rating) + 0.5
                      ? "text-amber-500 fill-amber-500 opacity-50"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Based on {service.reviewCount} reviews
          </p>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8 -mb-px">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "analytics"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "reviews"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "settings"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Tab content */}
      <div className="mb-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Service features */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div
                className="p-6 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("features")}
              >
                <h2 className="text-lg font-medium text-gray-900">
                  Features & Capabilities
                </h2>
                {expandedSection === "features" ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {(expandedSection === "features" || expandedSection === null) && (
                <div className="p-6">
                  <ul className="space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex">
                        <div className="flex-shrink-0 mt-1">
                          <Sparkles className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">
                            {feature.name}
                          </h3>
                          {feature.description && (
                            <p className="text-gray-600 mt-1">
                              {feature.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div
                className="p-6 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("pricing")}
              >
                <h2 className="text-lg font-medium text-gray-900">Pricing</h2>
                {expandedSection === "pricing" ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {(expandedSection === "pricing" || expandedSection === null) && (
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.pricingModel === "subscription"
                        ? "Subscription"
                        : service.pricingModel === "one-time"
                        ? "One-time Payment"
                        : "Usage-based"}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-1">Base Price</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {formatCurrency(service.basePrice)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {service.pricingModel === "subscription"
                        ? "per month"
                        : service.pricingModel === "one-time"
                        ? "one-time payment"
                        : "starting price"}
                    </p>
                  </div>

                  {service.pricingTiers && service.pricingTiers.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">
                        Additional Pricing Tiers
                      </h3>
                      <div className="space-y-4">
                        {service.pricingTiers.map((tier, index) => (
                          <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4"
                          >
                            <h4 className="font-medium text-gray-900 mb-1">
                              {tier.name}
                            </h4>
                            <p className="text-gray-600 text-sm mb-2">
                              {tier.description}
                            </p>
                            <p className="text-indigo-600 font-semibold">
                              {formatCurrency(tier.price)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div
                className="p-6 border-b border-gray-200 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("requirements")}
              >
                <h2 className="text-lg font-medium text-gray-900">
                  Requirements & Integration
                </h2>
                {expandedSection === "requirements" ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>

              {(expandedSection === "requirements" ||
                expandedSection === null) && (
                <div className="p-6">
                  {service.requirements ? (
                    <div className="text-gray-700">
                      <p>{service.requirements}</p>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">
                      No specific requirements specified
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Creation and update info */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Created on</p>
                  <p className="font-medium text-gray-900">
                    {new Date(service.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Last updated</p>
                  <p className="font-medium text-gray-900">
                    {new Date(service.updatedAt).toLocaleDateString()}
                  </p>
                </div>
                {service.status === "active" && service.approvedAt && (
                  <div>
                    <p className="text-gray-500">Approved on</p>
                    <p className="font-medium text-gray-900">
                      {new Date(service.approvedAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div>
            {/* Performance Overview */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Performance Overview
                </h2>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Views */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Total Views</p>
                    <p className="text-xl font-bold text-gray-900">
                      {service.analytics?.views || 0}
                    </p>
                    <p className="text-sm text-gray-600">
                      {service.analytics?.viewsThisWeek || 0} this week
                    </p>
                  </div>

                  {/* Inquiries */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">Inquiries</p>
                    <p className="text-xl font-bold text-gray-900">
                      {service.analytics?.inquiries || 0}
                    </p>
                    <p className="text-sm text-gray-600">
                      {service.analytics?.conversionRate || 0}% conversion rate
                    </p>
                  </div>

                  {/* Client satisfaction */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">
                      Client Satisfaction
                    </p>
                    <p className="text-xl font-bold text-gray-900">
                      {service.analytics?.satisfaction || 0}%
                    </p>
                    <p className="text-sm text-gray-600">
                      Based on client feedback
                    </p>
                  </div>
                </div>

                {/* Performance chart placeholder */}
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">
                      Service performance chart would be displayed here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Demographics */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Client Demographics
                </h2>
              </div>

              <div className="p-6">
                {service.analytics?.demographics ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Industries */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">
                        Top Industries
                      </h3>
                      <div className="space-y-3">
                        {service.analytics.demographics.industries.map(
                          (industry, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-32 text-sm text-gray-600">
                                {industry.name}
                              </div>
                              <div className="flex-1">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-indigo-600 h-2 rounded-full"
                                    style={{ width: `${industry.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="w-12 text-right text-sm text-gray-600 ml-2">
                                {industry.percentage}%
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Company size */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">
                        Company Size
                      </h3>
                      <div className="space-y-3">
                        {service.analytics.demographics.companySize.map(
                          (size, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-32 text-sm text-gray-600">
                                {size.name}
                              </div>
                              <div className="flex-1">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-indigo-600 h-2 rounded-full"
                                    style={{ width: `${size.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="w-12 text-right text-sm text-gray-600 ml-2">
                                {size.percentage}%
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      Not enough client data to display demographics
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Export Analytics */}
            <div className="flex justify-end">
              <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                <Download className="h-4 w-4 mr-2" />
                Export Analytics Report
              </button>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div>
            {/* Reviews summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Client Reviews
                </h2>
              </div>

              <div className="p-6">
                {service.reviews && service.reviews.length > 0 ? (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                      {/* Rating overview */}
                      <div className="md:col-span-4 flex flex-col items-center justify-center">
                        <p className="text-sm text-gray-500 mb-2">
                          Overall Rating
                        </p>
                        <p className="text-4xl font-bold text-gray-900 mb-2">
                          {service.rating.toFixed(1)}
                        </p>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(service.rating)
                                  ? "text-amber-500 fill-amber-500"
                                  : i < Math.ceil(service.rating) &&
                                    i < Math.floor(service.rating) + 0.5
                                  ? "text-amber-500 fill-amber-500 opacity-50"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          Based on {service.reviewCount} reviews
                        </p>
                      </div>

                      {/* Rating distribution */}
                      <div className="md:col-span-8">
                        <h3 className="text-sm font-medium text-gray-900 mb-3">
                          Rating Distribution
                        </h3>
                        <div className="space-y-3">
                          {[5, 4, 3, 2, 1].map((rating) => {
                            const count = service.reviews.filter(
                              (r) => Math.round(r.rating) === rating
                            ).length;
                            const percentage = Math.round(
                              (count / service.reviews.length) * 100
                            );

                            return (
                              <div key={rating} className="flex items-center">
                                <div className="w-5 text-sm text-gray-600 mr-2">
                                  {rating}
                                </div>
                                <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-2" />
                                <div className="flex-1">
                                  <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                      className="bg-amber-500 h-2 rounded-full"
                                      style={{ width: `${percentage}%` }}
                                    ></div>
                                  </div>
                                </div>
                                <div className="w-16 text-right text-sm text-gray-600 ml-2">
                                  {percentage}% ({count})
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Reviews list */}
                    <h3 className="text-sm font-medium text-gray-900 mb-4">
                      Recent Reviews
                    </h3>
                    <div className="space-y-6">
                      {service.reviews.slice(0, 5).map((review, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="flex mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "text-amber-500 fill-amber-500"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="font-medium text-gray-900">
                                {review.title || "Review"}
                              </p>
                            </div>
                            <p className="text-sm text-gray-500">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>

                          <p className="text-gray-600 mb-3">{review.text}</p>

                          <div className="flex items-center text-sm text-gray-500">
                            <span>From: {review.clientName}</span>
                          </div>

                          {review.response && (
                            <div className="mt-3 p-3 bg-gray-50 rounded-md border border-gray-200">
                              <p className="text-xs text-gray-500 mb-1">
                                Your Response:
                              </p>
                              <p className="text-sm text-gray-700">
                                {review.response}
                              </p>
                            </div>
                          )}

                          {!review.response && (
                            <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-800 flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Respond to Review
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    {service.reviews.length > 5 && (
                      <div className="mt-6 text-center">
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          View All Reviews
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No Reviews Yet
                    </h3>
                    <p className="text-gray-600">
                      Once clients leave reviews for this service, they will
                      appear here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div>
            {/* Visibility settings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Visibility Settings
                </h2>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Public Visibility
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Control whether your service is visible to potential
                        clients
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 text-sm text-gray-600">
                        {service.isPublic ? "Visible" : "Hidden"}
                      </span>
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          service.isPublic ? "bg-indigo-600" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            service.isPublic ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Featured Service
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Display this service prominently in your profile
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 text-sm text-gray-600">
                        {service.isFeatured ? "Featured" : "Not Featured"}
                      </span>
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          service.isFeatured ? "bg-indigo-600" : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            service.isFeatured
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Accepting New Clients
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Control whether you're currently accepting new clients
                        for this service
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3 text-sm text-gray-600">
                        {service.acceptingClients
                          ? "Accepting"
                          : "Not Accepting"}
                      </span>
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                          service.acceptingClients
                            ? "bg-indigo-600"
                            : "bg-gray-300"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                            service.acceptingClients
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration settings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">
                  Integration Settings
                </h2>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">
                    API Integration
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Use this API key to integrate this service with external
                    systems
                  </p>
                  <div className="flex">
                    <input
                      type="password"
                      value="••••••••••••••••••••••"
                      disabled
                      className="flex-1 py-2 px-3 border border-gray-300 rounded-l-md bg-gray-50 text-gray-500"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700">
                      Reveal
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Your API key is secret. Never share it with others.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Webhooks</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Set up webhooks to receive notifications about this service
                  </p>
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Configure Webhooks
                  </button>
                </div>
              </div>
            </div>

            {/* Danger zone */}
            <div className="bg-white rounded-lg shadow-sm border border-red-200 overflow-hidden">
              <div className="p-6 border-b border-red-200 bg-red-50">
                <h2 className="text-lg font-medium text-red-800">
                  Danger Zone
                </h2>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Delete this service
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Once deleted, this service and all associated data will be
                      permanently removed
                    </p>
                  </div>
                  <button
                    onClick={() => setDeleteModalOpen(true)}
                    className="px-4 py-2 bg-white border border-red-600 text-red-600 rounded-md hover:bg-red-50"
                  >
                    Delete Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-3">
                Delete Service
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Are you sure you want to delete this service? This action cannot
                be undone and all associated data will be permanently removed.
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

// Mock data generator function
const getMockServiceData = (id) => {
  return {
    id,
    name: "AI Chatbot Assistant",
    description:
      "A customizable chatbot assistant that can be trained on company knowledge bases and integrated with customer support systems. This AI-powered solution helps reduce response times and improve customer satisfaction by providing instant, accurate answers to common questions.",
    category: "Customer Support",
    status: "active",
    technologies: [
      "Natural Language Processing",
      "Machine Learning",
      "API Integration",
      "Knowledge Base",
    ],
    serviceUrl: "https://example.com/chatbot-service",
    isPublic: true,
    isFeatured: true,
    acceptingClients: true,
    clients: 24,
    activeClients: 18,
    revenue: 48000,
    monthlyRevenue: 6500,
    rating: 4.8,
    reviewCount: 15,
    features: [
      {
        name: "Customizable Knowledge Base",
        description:
          "Train the chatbot on your company's specific knowledge base and documentation.",
      },
      {
        name: "Multi-channel Integration",
        description:
          "Deploy the chatbot across multiple channels including website, mobile app, and messaging platforms.",
      },
      {
        name: "Advanced NLP",
        description:
          "Utilizes state-of-the-art natural language processing to understand complex queries.",
      },
      {
        name: "Analytics Dashboard",
        description:
          "Track performance metrics and gain insights into customer inquiries.",
      },
      {
        name: "Continuous Learning",
        description:
          "The AI improves over time based on interactions and feedback.",
      },
    ],
    pricingModel: "subscription",
    basePrice: 799,
    pricingTiers: [
      {
        name: "Basic",
        description: "Up to 1,000 queries per month",
        price: 799,
      },
      {
        name: "Professional",
        description: "Up to 5,000 queries per month with priority support",
        price: 1499,
      },
      {
        name: "Enterprise",
        description:
          "Unlimited queries with dedicated support and customization",
        price: 2999,
      },
    ],
    requirements:
      "Requires API access to your knowledge base or documentation. Compatible with most CRM systems including Salesforce, Zendesk, and custom solutions.",
    createdAt: "2023-09-15T14:30:00Z",
    updatedAt: "2024-01-22T10:15:00Z",
    approvedAt: "2023-09-18T09:20:00Z",
    analytics: {
      views: 1240,
      viewsThisWeek: 86,
      inquiries: 42,
      conversionRate: 12,
      satisfaction: 94,
      demographics: {
        industries: [
          { name: "Technology", percentage: 40 },
          { name: "E-commerce", percentage: 25 },
          { name: "Finance", percentage: 15 },
          { name: "Healthcare", percentage: 12 },
          { name: "Others", percentage: 8 },
        ],
        companySize: [
          { name: "Small", percentage: 35 },
          { name: "Medium", percentage: 45 },
          { name: "Large", percentage: 20 },
        ],
      },
    },
    reviews: [
      {
        id: 1,
        clientName: "John Smith",
        clientCompany: "TechCorp Inc.",
        rating: 5,
        title: "Excellent service that exceeded expectations",
        text: "The AI chatbot dramatically improved our customer service response times. Setup was straightforward and the team provided excellent support throughout the implementation process.",
        date: "2024-01-10T08:30:00Z",
        response:
          "Thank you for your kind feedback, John! We're thrilled that the chatbot is working well for your team.",
      },
      {
        id: 2,
        clientName: "Sarah Johnson",
        clientCompany: "E-Shop Solutions",
        rating: 5,
        title: "Game-changer for our customer support",
        text: "We've seen a 40% reduction in support tickets since implementing this chatbot. The AI is remarkably accurate and keeps improving over time. Highly recommended!",
        date: "2023-12-22T15:45:00Z",
        response: null,
      },
      {
        id: 3,
        clientName: "Michael Wong",
        clientCompany: "FinTech Innovators",
        rating: 4,
        title: "Very good but some room for improvement",
        text: "Overall a great service that has helped us streamline customer inquiries. There were some initial challenges with training the AI on our financial terminology, but the support team was helpful in resolving these issues.",
        date: "2023-11-15T11:20:00Z",
        response:
          "Thank you for your feedback, Michael. We're constantly working to improve our financial terminology recognition, and your input has been valuable in that process.",
      },
      {
        id: 4,
        clientName: "Lisa Rodriguez",
        clientCompany: "HealthTech Solutions",
        rating: 5,
        title: "Perfect solution for our healthcare platform",
        text: "The chatbot's ability to handle complex healthcare queries while maintaining HIPAA compliance has been impressive. Integration with our existing systems was seamless.",
        date: "2023-10-30T09:15:00Z",
        response:
          "We're glad to hear the solution is working well for your healthcare application, Lisa! Thank you for the wonderful review.",
      },
      {
        id: 5,
        clientName: "David Chen",
        clientCompany: "Retail Innovations",
        rating: 5,
        title: "Transformed our customer experience",
        text: "Our customers love the instant responses, and our support team can now focus on more complex issues. The analytics provided have also given us valuable insights into customer needs.",
        date: "2023-10-05T16:40:00Z",
        response:
          "Thank you, David! We're thrilled to hear about the positive impact on both your customers and support team.",
      },
    ],
  };
};

export default ServiceDetail;
