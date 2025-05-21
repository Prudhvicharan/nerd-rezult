import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  Star,
  Clock,
  Calendar,
  ChevronDown,
  Filter,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

/**
 * Service Performance component for displaying analytics about AI services
 *
 * @param {Array} services - Array of service objects with performance data
 * @param {string} timeRange - Selected time range filter
 * @param {function} onTimeRangeChange - Function to call when time range changes
 * @param {object} performanceMetrics - Performance metrics and KPIs
 * @param {boolean} loading - Whether data is loading
 */
const ServicePerformance = ({
  services = [],
  timeRange = "30days",
  onTimeRangeChange,
  performanceMetrics = {},
  loading = false,
}) => {
  // State for filter dropdown
  const [filterOpen, setFilterOpen] = useState(false);

  // State for selected service
  const [selectedService, setSelectedService] = useState("all");

  // Time range options
  const timeRanges = [
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
    { value: "year", label: "Last 12 Months" },
    { value: "all", label: "All Time" },
  ];

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Format percentage
  const formatPercent = (value) => {
    return `${value > 0 ? "+" : ""}${value}%`;
  };

  // Get performance indicator color based on value
  const getIndicatorColor = (value, inverse = false) => {
    if (inverse) {
      return value > 0
        ? "text-red-500"
        : value < 0
        ? "text-green-500"
        : "text-gray-500";
    }
    return value > 0
      ? "text-green-500"
      : value < 0
      ? "text-red-500"
      : "text-gray-500";
  };

  // Get performance indicator icon based on value
  const getIndicatorIcon = (value, inverse = false) => {
    const direction = inverse ? -value : value;

    if (direction > 0) {
      return <TrendingUp className="h-4 w-4 mr-1" />;
    } else if (direction < 0) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14"
          />
        </svg>
      );
    }
  };

  // Format number with K/M/B suffix
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  // Handle time range change
  const handleTimeRangeChange = (e) => {
    if (onTimeRangeChange) {
      onTimeRangeChange(e.target.value);
    }
  };

  // Filter services by selected service
  const filteredData =
    selectedService === "all"
      ? services
      : services.filter((service) => service.id === selectedService);

  // Loading state
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  // No data state
  if (!services || services.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No Performance Data Available
        </h3>
        <p className="text-gray-600 mb-6">
          There isn't enough data to display performance metrics for your
          services yet. Performance analytics will appear once your services
          have been active for some time.
        </p>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
          Create a New Service
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-900">Service Performance</h2>

        <div className="flex space-x-3">
          {/* Service filter */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              <span>
                {selectedService === "all"
                  ? "All Services"
                  : services.find((s) => s.id === selectedService)?.name ||
                    "All Services"}
              </span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>

            {filterOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    onClick={() => {
                      setSelectedService("all");
                      setFilterOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      selectedService === "all"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }`}
                    role="menuitem"
                  >
                    All Services
                  </button>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setSelectedService(service.id);
                        setFilterOpen(false);
                      }}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        selectedService === service.id
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700"
                      }`}
                      role="menuitem"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Time range filter */}
          <select
            value={timeRange}
            onChange={handleTimeRangeChange}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* KPI summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Revenue card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>Total Revenue</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {formatCurrency(performanceMetrics.revenue || 0)}
          </p>
          {performanceMetrics.revenueChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getIndicatorColor(
                performanceMetrics.revenueChange
              )}`}
            >
              {getIndicatorIcon(performanceMetrics.revenueChange)}
              <span>
                {formatPercent(performanceMetrics.revenueChange)} from previous
                period
              </span>
            </div>
          )}
        </div>

        {/* Clients card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Users className="h-4 w-4 mr-1" />
            <span>Total Clients</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {formatNumber(performanceMetrics.clients || 0)}
          </p>
          {performanceMetrics.clientsChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getIndicatorColor(
                performanceMetrics.clientsChange
              )}`}
            >
              {getIndicatorIcon(performanceMetrics.clientsChange)}
              <span>
                {formatPercent(performanceMetrics.clientsChange)} from previous
                period
              </span>
            </div>
          )}
        </div>

        {/* Rating card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Star className="h-4 w-4 mr-1" />
            <span>Average Rating</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {(performanceMetrics.avgRating || 0).toFixed(1)}
            <span className="text-sm font-normal text-gray-500 ml-1">
              / 5.0
            </span>
          </p>
          {performanceMetrics.avgRatingChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getIndicatorColor(
                performanceMetrics.avgRatingChange
              )}`}
            >
              {getIndicatorIcon(performanceMetrics.avgRatingChange)}
              <span>
                {formatPercent(performanceMetrics.avgRatingChange)} from
                previous period
              </span>
            </div>
          )}
        </div>

        {/* Response time card */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>Avg. Response Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {performanceMetrics.responseTime || 0} hrs
          </p>
          {performanceMetrics.responseTimeChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getIndicatorColor(
                performanceMetrics.responseTimeChange,
                true
              )}`}
            >
              {getIndicatorIcon(performanceMetrics.responseTimeChange, true)}
              <span>
                {formatPercent(performanceMetrics.responseTimeChange)} from
                previous period
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Revenue chart */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Revenue Over Time
        </h3>

        <div className="h-64 w-full">
          {/* 
            In a real implementation, this would use a charting library like Recharts or Chart.js
            For this implementation, we'll show a placeholder
          */}
          <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 text-sm">
                Revenue chart would be rendered here using a charting library
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service performance table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Services Performance Comparison
          </h3>
        </div>

        <div className="overflow-x-auto">
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
                  Revenue
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
                  Growth
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Details</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-medium">
                          {service.name.charAt(0) +
                            service.name.charAt(service.name.indexOf(" ") + 1)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {service.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {service.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatCurrency(service.revenue)}
                    </div>
                    <div
                      className={`text-sm flex items-center ${getIndicatorColor(
                        service.revenueChange
                      )}`}
                    >
                      {getIndicatorIcon(service.revenueChange)}
                      <span>{formatPercent(service.revenueChange)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {service.clients}
                    </div>
                    <div
                      className={`text-sm flex items-center ${getIndicatorColor(
                        service.clientsChange
                      )}`}
                    >
                      {getIndicatorIcon(service.clientsChange)}
                      <span>{formatPercent(service.clientsChange)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="text-sm text-gray-900">
                        {service.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.reviews} reviews
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          service.growth > 20
                            ? "bg-green-500"
                            : service.growth > 0
                            ? "bg-indigo-500"
                            : "bg-gray-400"
                        }`}
                        style={{ width: `${Math.max(service.growth, 0)}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {service.growth}% growth
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 flex items-center">
                      Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional insights */}
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
        <h3 className="text-lg font-medium text-indigo-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Performance Insights
        </h3>

        <div className="space-y-4">
          {performanceMetrics.insights &&
          performanceMetrics.insights.length > 0 ? (
            performanceMetrics.insights.map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-indigo-100 shadow-sm"
              >
                <h4 className="font-medium text-gray-900 mb-1">
                  {insight.title}
                </h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg p-4 border border-indigo-100 shadow-sm text-center">
              <p className="text-gray-600">
                Performance insights will appear here as more data becomes
                available.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePerformance;
