import React, { useState } from "react";
import {
  MessageSquare,
  Star,
  ThumbsUp,
  ThumbsDown,
  Calendar,
  Filter,
  ArrowDown,
  ArrowUp,
  Search,
  PieChart,
  BarChart,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";

/**
 * Client Feedback component for displaying and analyzing client reviews and feedback
 *
 * @param {Array} feedback - Array of feedback/review objects
 * @param {Array} services - Array of service objects for filtering
 * @param {Object} stats - Feedback statistics and sentiment analysis
 * @param {string} timeRange - Selected time range
 * @param {function} onTimeRangeChange - Function to call when time range changes
 * @param {boolean} loading - Whether data is loading
 */
const ClientFeedback = ({
  feedback = [],
  services = [],
  stats = {},
  timeRange = "all",
  onTimeRangeChange,
  loading = false,
}) => {
  // State for filters and sorting
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [search, setSearch] = useState("");

  // Time range options
  const timeRanges = [
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
    { value: "year", label: "Last 12 Months" },
    { value: "all", label: "All Time" },
  ];

  // Rating options
  const ratingOptions = [
    { value: "all", label: "All Ratings" },
    { value: "5", label: "5 Stars" },
    { value: "4", label: "4 Stars" },
    { value: "3", label: "3 Stars" },
    { value: "2", label: "2 Stars" },
    { value: "1", label: "1 Star" },
  ];

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Handle time range change
  const handleTimeRangeChange = (e) => {
    if (onTimeRangeChange) {
      onTimeRangeChange(e.target.value);
    }
  };

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filter and sort feedback
  const filteredFeedback = feedback
    .filter((item) => {
      // Service filter
      if (selectedService !== "all" && item.serviceId !== selectedService) {
        return false;
      }

      // Rating filter
      if (
        selectedRating !== "all" &&
        item.rating !== parseInt(selectedRating)
      ) {
        return false;
      }

      // Search filter
      if (
        search &&
        !item.text.toLowerCase().includes(search.toLowerCase()) &&
        !item.clientName.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sorting logic
      let comparison = 0;

      if (sortBy === "date") {
        comparison = new Date(b.date) - new Date(a.date);
      } else if (sortBy === "rating") {
        comparison = b.rating - a.rating;
      } else if (sortBy === "sentiment") {
        comparison = b.sentiment - a.sentiment;
      }

      return sortOrder === "asc" ? -comparison : comparison;
    });

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
        }`}
      />
    ));
  };

  // Get sentiment icon and color
  const getSentimentDisplay = (sentiment) => {
    if (sentiment > 0.5) {
      return {
        icon: <ThumbsUp className="h-4 w-4" />,
        color: "text-green-500",
        label: "Positive",
      };
    } else if (sentiment < -0.2) {
      return {
        icon: <ThumbsDown className="h-4 w-4" />,
        color: "text-red-500",
        label: "Negative",
      };
    } else {
      return {
        icon: <div className="h-4 w-4 border-t-2 border-gray-400"></div>,
        color: "text-gray-500",
        label: "Neutral",
      };
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // No data state
  if (!feedback || feedback.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No Feedback Yet
        </h3>
        <p className="text-gray-600 mb-6">
          You haven't received any client feedback yet. Feedback will appear
          here once clients review your services.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-900">Client Feedback</h2>

        <div className="flex flex-wrap gap-3">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search feedback..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white text-sm"
            />
          </div>

          {/* Filter button */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4 mr-2" />
              <span>Filter</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>

            {filterOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Filter by Service
                  </h3>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="all">All Services</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>

                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Filter by Rating
                  </h3>
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    {ratingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Sort By
                  </h3>
                  <div className="flex">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
                    >
                      <option value="date">Date</option>
                      <option value="rating">Rating</option>
                      <option value="sentiment">Sentiment</option>
                    </select>
                    <button
                      onClick={toggleSortOrder}
                      className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50 flex items-center"
                    >
                      {sortOrder === "asc" ? (
                        <ArrowUp className="h-4 w-4 text-gray-500" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedService("all");
                      setSelectedRating("all");
                      setSortBy("date");
                      setSortOrder("desc");
                      setFilterOpen(false);
                    }}
                    className="text-sm text-gray-600 hover:text-gray-900 font-medium mr-4"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Time range */}
          <select
            value={timeRange}
            onChange={handleTimeRangeChange}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700"
          >
            {timeRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Feedback summary stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Overall rating */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-sm text-gray-500 mb-2">Overall Rating</h3>
          <div className="flex items-center mb-3">
            <span className="text-3xl font-bold text-gray-900 mr-2">
              {stats.averageRating ? stats.averageRating.toFixed(1) : "0.0"}
            </span>
            <div className="flex">
              {renderStars(Math.round(stats.averageRating || 0))}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Based on {stats.totalReviews || 0} reviews
          </p>
        </div>

        {/* Sentiment analysis */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-sm text-gray-500 mb-2">Sentiment Analysis</h3>
          <div className="text-lg font-bold text-gray-900 mb-3">
            {stats.sentimentStats ? (
              <div className="flex space-x-3">
                <div className="flex items-center text-green-500">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  <span>{stats.sentimentStats.positive || 0}%</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <div className="h-5 w-5 border-t-2 border-gray-400 mr-1"></div>
                  <span>{stats.sentimentStats.neutral || 0}%</span>
                </div>
                <div className="flex items-center text-red-500">
                  <ThumbsDown className="h-5 w-5 mr-1" />
                  <span>{stats.sentimentStats.negative || 0}%</span>
                </div>
              </div>
            ) : (
              "No sentiment data"
            )}
          </div>
          <p className="text-sm text-gray-600">
            {stats.sentimentTrend > 0
              ? `Sentiment improved by ${stats.sentimentTrend}% from previous period`
              : stats.sentimentTrend < 0
              ? `Sentiment declined by ${Math.abs(
                  stats.sentimentTrend
                )}% from previous period`
              : "Sentiment stable compared to previous period"}
          </p>
        </div>

        {/* Recent feedback rate */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-sm text-gray-500 mb-2">Recent Activity</h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">
            {stats.recentFeedbackCount || 0}
          </p>
          <p className="text-sm text-gray-600">
            New reviews in the last 30 days
          </p>
        </div>
      </div>

      {/* Feedback charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Rating distribution */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-4">
            Rating Distribution
          </h3>

          {stats.ratingDistribution ? (
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <div className="w-16 flex items-center justify-end mr-3">
                    <div className="flex">{renderStars(rating)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{
                          width: `${stats.ratingDistribution[rating] || 0}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm text-gray-600 ml-3">
                    {stats.ratingDistribution[rating] || 0}%
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-40 text-center">
              <div>
                <PieChart className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  No rating data available
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Feedback trends */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-4">Feedback Trends</h3>

          {stats.trends ? (
            <div className="h-60 flex items-center justify-center">
              <BarChart className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-500">
                Trend chart would be rendered here
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center h-40 text-center">
              <div>
                <BarChart className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Not enough data for trends
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Feedback list */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-medium text-gray-900">
            Client Reviews{" "}
            {filteredFeedback.length > 0 && `(${filteredFeedback.length})`}
          </h3>
          {filteredFeedback.length !== feedback.length && (
            <button
              onClick={() => {
                setSelectedService("all");
                setSelectedRating("all");
                setSearch("");
              }}
              className="text-sm text-indigo-600 hover:text-indigo-800"
            >
              Clear filters
            </button>
          )}
        </div>

        {filteredFeedback.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {filteredFeedback.map((item) => {
              const serviceName =
                services.find((s) => s.id === item.serviceId)?.name ||
                "Unknown Service";
              const sentimentInfo = getSentimentDisplay(item.sentiment);

              return (
                <div key={item.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <div className="flex mr-2">
                          {renderStars(item.rating)}
                        </div>
                        <span className="text-gray-500 text-sm">
                          for {serviceName}
                        </span>
                      </div>

                      <h4 className="font-medium text-gray-900 mb-2">
                        {item.title}
                      </h4>

                      <div className="text-gray-600 mb-3">{item.text}</div>

                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{formatDate(item.date)}</span>
                        </div>

                        <span className="mx-2">•</span>

                        <div className="flex items-center">
                          <span>From: {item.clientName}</span>
                        </div>

                        <span className="mx-2">•</span>

                        <div
                          className={`flex items-center ${sentimentInfo.color}`}
                        >
                          {sentimentInfo.icon}
                          <span className="ml-1">{sentimentInfo.label}</span>
                        </div>
                      </div>
                    </div>

                    {item.response && (
                      <div className="ml-4 mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm w-80">
                        <p className="text-xs text-gray-500 mb-1">
                          Your Response:
                        </p>
                        <p className="text-gray-700">{item.response}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-16 text-center">
            <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              No Matching Feedback
            </h3>
            <p className="text-gray-600">
              No feedback matches your current filters.
            </p>
          </div>
        )}
      </div>

      {/* AI Insight */}
      {stats.keyInsights && stats.keyInsights.length > 0 && (
        <div className="mt-8 bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h3 className="text-lg font-medium text-indigo-900 mb-4">
            Key Insights from Feedback
          </h3>

          <div className="space-y-4">
            {stats.keyInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-indigo-100 shadow-sm"
              >
                <h4 className="font-medium text-gray-900 mb-1">
                  {insight.title}
                </h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientFeedback;
