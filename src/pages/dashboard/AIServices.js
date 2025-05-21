import React, { useState, useEffect } from "react";
import { DashboardLayout } from "../../components/dashboard/layout";
import { AIServiceCard } from "../../components/dashboard/ai-agents/AIServiceCard";
import { ServiceStatusBadge } from "../../components/dashboard/ai-agents/ServiceStatusBadge";
import {
  Plus,
  Filter,
  Search,
  ArrowUpDown,
  ChevronDown,
  Sliders,
  GridIcon,
  List,
} from "lucide-react";

/**
 * AI Services page for listing and managing AI services
 */
const AIServices = () => {
  // State for filters and view options
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Mock AI services data
  const allServices = [
    {
      id: 1,
      name: "AI Chatbot Assistant",
      description:
        "A customizable chatbot assistant that can be trained on company knowledge bases and integrated with customer support systems.",
      status: "active",
      category: "Customer Support",
      technologies: [
        "Natural Language Processing",
        "Machine Learning",
        "API Integration",
      ],
      lastUpdated: "2 days ago",
      clients: 12,
      rating: 4.8,
      reviewCount: 24,
    },
    {
      id: 2,
      name: "Data Analysis Agent",
      description:
        "Automated data analysis service that transforms raw data into actionable insights using advanced AI algorithms.",
      status: "active",
      category: "Data Analytics",
      technologies: [
        "Machine Learning",
        "Statistical Analysis",
        "Data Visualization",
      ],
      lastUpdated: "1 week ago",
      clients: 8,
      rating: 4.6,
      reviewCount: 15,
    },
    {
      id: 3,
      name: "Content Generator",
      description:
        "AI-powered content creation tool that generates marketing copy, product descriptions, and blog posts based on simple prompts.",
      status: "pending",
      category: "Content Creation",
      technologies: ["Large Language Models", "Natural Language Generation"],
      lastUpdated: "3 hours ago",
      clients: 0,
      rating: 0,
      reviewCount: 0,
    },
    {
      id: 4,
      name: "Recommendation Engine",
      description:
        "Personalized recommendation system that uses machine learning to suggest products, content, or services to users.",
      status: "pending",
      category: "E-commerce",
      technologies: [
        "Collaborative Filtering",
        "Deep Learning",
        "User Behavior Analysis",
      ],
      lastUpdated: "6 hours ago",
      clients: 0,
      rating: 0,
      reviewCount: 0,
    },
    {
      id: 5,
      name: "Image Recognition Service",
      description:
        "Visual AI service that identifies objects, scenes, and patterns in images with high accuracy.",
      status: "active",
      category: "Computer Vision",
      technologies: [
        "Convolutional Neural Networks",
        "Transfer Learning",
        "Image Processing",
      ],
      lastUpdated: "3 days ago",
      clients: 5,
      rating: 4.5,
      reviewCount: 8,
    },
    {
      id: 6,
      name: "Sentiment Analysis Tool",
      description:
        "Analyzes customer feedback, social media mentions, and reviews to determine sentiment and extract key insights.",
      status: "active",
      category: "Social Media Analytics",
      technologies: [
        "Natural Language Processing",
        "Sentiment Analysis",
        "Text Mining",
      ],
      lastUpdated: "5 days ago",
      clients: 7,
      rating: 4.3,
      reviewCount: 12,
    },
    {
      id: 7,
      name: "AI Translation Service",
      description:
        "Advanced translation service that preserves context and meaning across languages using neural machine translation.",
      status: "rejected",
      category: "Language Services",
      technologies: [
        "Neural Machine Translation",
        "Natural Language Processing",
      ],
      lastUpdated: "1 week ago",
      clients: 0,
      rating: 0,
      reviewCount: 0,
      rejectionReason: "Similar service already exists, needs differentiation",
    },
  ];

  // Get unique categories from services
  const categories = [
    "all",
    ...new Set(allServices.map((service) => service.category)),
  ];

  // Apply filters and sorting to services
  const filteredServices = allServices
    .filter((service) => {
      // Status filter
      if (statusFilter !== "all" && service.status !== statusFilter) {
        return false;
      }

      // Category filter
      if (categoryFilter !== "all" && service.category !== categoryFilter) {
        return false;
      }

      // Search filter
      if (
        search &&
        !service.name.toLowerCase().includes(search.toLowerCase()) &&
        !service.description.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sorting logic
      let comparison = 0;

      if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "status") {
        comparison = a.status.localeCompare(b.status);
      } else if (sortBy === "clients") {
        comparison = b.clients - a.clients;
      } else if (sortBy === "rating") {
        comparison = b.rating - a.rating;
      } else if (sortBy === "lastUpdated") {
        // Simple string comparison for demo purposes
        // In a real app, you'd convert these to dates
        comparison = a.lastUpdated.localeCompare(b.lastUpdated);
      }

      // Apply sort order
      return sortOrder === "asc" ? comparison : -comparison;
    });

  // Get service status counts
  const statusCounts = {
    all: allServices.length,
    active: allServices.filter((s) => s.status === "active").length,
    pending: allServices.filter((s) => s.status === "pending").length,
    rejected: allServices.filter((s) => s.status === "rejected").length,
  };

  // Handle view service details
  const handleViewDetails = (serviceId) => {
    const service = allServices.find((s) => s.id === serviceId);
    setSelectedService(service);
    // In a real app, this would navigate to a detail page
    console.log("View details for service:", service);
  };

  // Handle edit service
  const handleEditService = (serviceId) => {
    const service = allServices.find((s) => s.id === serviceId);
    setSelectedService(service);
    // In a real app, this would open an edit modal or navigate to an edit page
    console.log("Edit service:", service);
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <DashboardLayout pageTitle="AI Services">
      {/* Action bar with search and filters */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-1 max-w-md items-center bg-white rounded-md border border-gray-300 px-3 py-2">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-2 flex-1 outline-none text-sm text-gray-700"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* View toggle */}
          <div className="hidden sm:flex p-1 bg-gray-100 rounded-md">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded ${
                viewMode === "grid"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <GridIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded ${
                viewMode === "list"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Sliders className="h-4 w-4" />
              <span className="hidden sm:inline">Filter & Sort</span>
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Status
                  </h3>
                  <div className="space-y-2 mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={statusFilter === "all"}
                        onChange={() => setStatusFilter("all")}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        All ({statusCounts.all})
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={statusFilter === "active"}
                        onChange={() => setStatusFilter("active")}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Active ({statusCounts.active})
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={statusFilter === "pending"}
                        onChange={() => setStatusFilter("pending")}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Pending Review ({statusCounts.pending})
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={statusFilter === "rejected"}
                        onChange={() => setStatusFilter("rejected")}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Rejected ({statusCounts.rejected})
                      </span>
                    </label>
                  </div>

                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Category
                  </h3>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>

                  <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">
                    Sort By
                  </h3>
                  <div className="flex items-center justify-between">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="name">Name</option>
                      <option value="status">Status</option>
                      <option value="clients">Clients</option>
                      <option value="rating">Rating</option>
                      <option value="lastUpdated">Last Updated</option>
                    </select>

                    <button
                      onClick={toggleSortOrder}
                      className="ml-2 p-2 border border-gray-300 rounded-md"
                    >
                      {sortOrder === "asc" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right border-t border-gray-200">
                  <button
                    onClick={() => {
                      setStatusFilter("all");
                      setCategoryFilter("all");
                      setSortBy("name");
                      setSortOrder("asc");
                      setFilterOpen(false);
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900 font-medium mr-4"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-medium"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Create Service</span>
          </button>
        </div>
      </div>

      {/* Status tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8 overflow-x-auto">
          <button
            onClick={() => setStatusFilter("all")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "all"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            All ({statusCounts.all})
          </button>
          <button
            onClick={() => setStatusFilter("active")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "active"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Active ({statusCounts.active})
          </button>
          <button
            onClick={() => setStatusFilter("pending")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "pending"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pending Review ({statusCounts.pending})
          </button>
          <button
            onClick={() => setStatusFilter("rejected")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "rejected"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Rejected ({statusCounts.rejected})
          </button>
        </nav>
      </div>

      {/* Results summary */}
      <div className="mb-4 text-sm text-gray-600">
        Showing {filteredServices.length} of {allServices.length} services
        {statusFilter !== "all" && ` with status "${statusFilter}"`}
        {categoryFilter !== "all" && ` in category "${categoryFilter}"`}
        {search && ` matching "${search}"`}
      </div>

      {/* Services grid view */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create new service card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Plus className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              Create a new AI service
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Showcase your AI expertise with a new service
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Create Service
            </button>
          </div>

          {/* Service cards */}
          {filteredServices.map((service) => (
            <div key={service.id}>
              <AIServiceCard
                service={service}
                onViewDetails={handleViewDetails}
                onEdit={handleEditService}
              />
            </div>
          ))}
        </div>
      )}

      {/* Services list view */}
      {viewMode === "list" && (
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Clients
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Last Updated
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredServices.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-1">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <ServiceStatusBadge status={service.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {service.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {service.clients}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {service.rating > 0 ? (
                      <div className="flex items-center">
                        <span className="text-amber-500">★</span>
                        <span className="ml-1 text-sm text-gray-700">
                          {service.rating} ({service.reviewCount})
                        </span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">N/A</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {service.lastUpdated}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewDetails(service.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEditService(service.id)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty state */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <div className="mx-auto h-12 w-12 text-gray-400">
            <ArrowUpDown className="h-12 w-12" />
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No services found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {search
              ? `No results match "${search}"`
              : "Try changing your filters"}
          </p>
          <div className="mt-6">
            <button
              onClick={() => {
                setStatusFilter("all");
                setCategoryFilter("all");
                setSearch("");
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Pagination (for future implementation) */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">{filteredServices.length}</span> of{" "}
              <span className="font-medium">{filteredServices.length}</span>{" "}
              results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 bg-white">
                1
              </button>
              <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* TODO: Implement these modals */}
      {/* Create Service Modal - would be implemented as a separate component */}
      {/* 
        {showCreateModal && (
          <CreateServiceModal 
            onClose={() => setShowCreateModal(false)}
            onSubmit={(serviceData) => {
              // Handle creation
              setShowCreateModal(false);
            }}
          />
        )} 
      */}

      {/* Service Details Modal - would be implemented as a separate component */}
      {/* 
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      */}
    </DashboardLayout>
  );
};

export default AIServices;
