import React, { useState } from "react";
import {
  Users,
  Clock,
  Calendar,
  Activity,
  Repeat,
  BarChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  Filter,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
} from "lucide-react";

/**
 * Engagement Metrics component for displaying client engagement data
 *
 * @param {Object} metrics - Engagement metrics data
 * @param {Array} services - Array of service objects for filtering
 * @param {string} timeRange - Selected time range
 * @param {function} onTimeRangeChange - Function to call when time range changes
 * @param {boolean} loading - Whether data is loading
 */
const EngagementMetrics = ({
  metrics = {},
  services = [],
  timeRange = "30days",
  onTimeRangeChange,
  loading = false,
}) => {
  // State for filters
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("all");

  // Time range options
  const timeRanges = [
    { value: "7days", label: "Last 7 Days" },
    { value: "30days", label: "Last 30 Days" },
    { value: "90days", label: "Last 90 Days" },
    { value: "year", label: "Last 12 Months" },
    { value: "all", label: "All Time" },
  ];

  // Format percentage with sign
  const formatPercent = (value) => {
    return `${value > 0 ? "+" : ""}${value}%`;
  };

  // Format number with K/M/B suffix
  const formatNumber = (num) => {
    if (!num && num !== 0) return "N/A";

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

  // Get trend indicator color based on value and whether higher is better
  const getTrendColor = (value, higherIsBetter = true) => {
    if (value === 0) return "text-gray-500";

    const isPositive = value > 0;
    return (isPositive && higherIsBetter) || (!isPositive && !higherIsBetter)
      ? "text-green-500"
      : "text-red-500";
  };

  // Get trend indicator arrow based on value
  const getTrendArrow = (value, higherIsBetter = true) => {
    if (value === 0) return null;

    const isPositive = value > 0;
    return (isPositive && higherIsBetter) ||
      (!isPositive && !higherIsBetter) ? (
      <ArrowUpRight className="h-4 w-4 mr-1" />
    ) : (
      <ArrowDownRight className="h-4 w-4 mr-1" />
    );
  };

  // Handle time range change
  const handleTimeRangeChange = (e) => {
    if (onTimeRangeChange) {
      onTimeRangeChange(e.target.value);
    }
  };

  // Get filtered metrics based on selected service
  const getFilteredMetrics = () => {
    if (selectedService === "all" || !metrics.serviceMetrics) {
      return metrics;
    }

    // Get service-specific metrics
    const serviceData = metrics.serviceMetrics.find(
      (s) => s.id === selectedService
    );
    if (!serviceData) return metrics;

    // Override aggregated metrics with service-specific ones
    return {
      ...metrics,
      activeClients: serviceData.activeClients,
      activeClientsChange: serviceData.activeClientsChange,
      avgEngagementTime: serviceData.avgEngagementTime,
      avgEngagementTimeChange: serviceData.avgEngagementTimeChange,
      repeatRate: serviceData.repeatRate,
      repeatRateChange: serviceData.repeatRateChange,
      responseTime: serviceData.responseTime,
      responseTimeChange: serviceData.responseTimeChange,
    };
  };

  const filteredMetrics = getFilteredMetrics();

  // Loading state
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-60 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  // No data state
  if (!metrics || Object.keys(metrics).length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <Activity className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No Engagement Data Available
        </h3>
        <p className="text-gray-600 mb-6">
          There isn't enough client engagement data to display metrics yet.
          Engagement analytics will appear once your services have more client
          interactions.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-900">
          Client Engagement Metrics
        </h2>

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
        {/* Active clients */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Users className="h-4 w-4 mr-1" />
            <span>Active Clients</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {formatNumber(filteredMetrics.activeClients)}
          </p>
          {filteredMetrics.activeClientsChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getTrendColor(
                filteredMetrics.activeClientsChange
              )}`}
            >
              {getTrendArrow(filteredMetrics.activeClientsChange)}
              <span>
                {formatPercent(filteredMetrics.activeClientsChange)} from
                previous period
              </span>
            </div>
          )}
        </div>

        {/* Average engagement time */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>Avg. Engagement Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {filteredMetrics.avgEngagementTime
              ? `${filteredMetrics.avgEngagementTime} min`
              : "N/A"}
          </p>
          {filteredMetrics.avgEngagementTimeChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getTrendColor(
                filteredMetrics.avgEngagementTimeChange
              )}`}
            >
              {getTrendArrow(filteredMetrics.avgEngagementTimeChange)}
              <span>
                {formatPercent(filteredMetrics.avgEngagementTimeChange)} from
                previous period
              </span>
            </div>
          )}
        </div>

        {/* Repeat client rate */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Repeat className="h-4 w-4 mr-1" />
            <span>Repeat Client Rate</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {filteredMetrics.repeatRate
              ? `${filteredMetrics.repeatRate}%`
              : "N/A"}
          </p>
          {filteredMetrics.repeatRateChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getTrendColor(
                filteredMetrics.repeatRateChange
              )}`}
            >
              {getTrendArrow(filteredMetrics.repeatRateChange)}
              <span>
                {formatPercent(filteredMetrics.repeatRateChange)} from previous
                period
              </span>
            </div>
          )}
        </div>

        {/* Response time */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>Response Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            {filteredMetrics.responseTime
              ? `${filteredMetrics.responseTime} hrs`
              : "N/A"}
          </p>
          {filteredMetrics.responseTimeChange !== undefined && (
            <div
              className={`text-sm flex items-center ${getTrendColor(
                filteredMetrics.responseTimeChange,
                false
              )}`}
            >
              {getTrendArrow(filteredMetrics.responseTimeChange, false)}
              <span>
                {formatPercent(filteredMetrics.responseTimeChange)} from
                previous period
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Engagement charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Client engagement chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-6">
            Client Engagement Over Time
          </h3>

          {filteredMetrics.engagementChart ? (
            <div className="h-64 w-full">
              {/* This would use a charting library in a real implementation */}
              <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm">
                    Engagement chart would be rendered here using a charting
                    library
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-center">
              <div>
                <BarChart className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Not enough engagement data for chart
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Client retention chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-6">Client Retention</h3>

          {filteredMetrics.retentionData ? (
            <div className="h-64 w-full">
              {/* This would use a charting library in a real implementation */}
              <div className="w-full h-full bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm">
                    Retention chart would be rendered here using a charting
                    library
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-center">
              <div>
                <PieChart className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Not enough retention data for chart
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Engagement distribution by service */}
      {metrics.serviceMetrics && metrics.serviceMetrics.length > 0 && (
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
          <h3 className="font-medium text-gray-900 mb-6">
            Engagement by Service
          </h3>

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
                    Active Clients
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Engagement Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Repeat Rate
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Response Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {metrics.serviceMetrics.map((service) => {
                  const serviceName =
                    services.find((s) => s.id === service.id)?.name ||
                    "Unknown Service";

                  return (
                    <tr
                      key={service.id}
                      className={`hover:bg-gray-50 ${
                        selectedService === service.id ? "bg-indigo-50" : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {serviceName}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatNumber(service.activeClients)}
                        </div>
                        <div
                          className={`text-xs flex items-center ${getTrendColor(
                            service.activeClientsChange
                          )}`}
                        >
                          {getTrendArrow(service.activeClientsChange)}
                          <span>
                            {formatPercent(service.activeClientsChange)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {service.avgEngagementTime} min
                        </div>
                        <div
                          className={`text-xs flex items-center ${getTrendColor(
                            service.avgEngagementTimeChange
                          )}`}
                        >
                          {getTrendArrow(service.avgEngagementTimeChange)}
                          <span>
                            {formatPercent(service.avgEngagementTimeChange)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {service.repeatRate}%
                        </div>
                        <div
                          className={`text-xs flex items-center ${getTrendColor(
                            service.repeatRateChange
                          )}`}
                        >
                          {getTrendArrow(service.repeatRateChange)}
                          <span>{formatPercent(service.repeatRateChange)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {service.responseTime} hrs
                        </div>
                        <div
                          className={`text-xs flex items-center ${getTrendColor(
                            service.responseTimeChange,
                            false
                          )}`}
                        >
                          {getTrendArrow(service.responseTimeChange, false)}
                          <span>
                            {formatPercent(service.responseTimeChange)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Client engagement by time */}
      {filteredMetrics.engagementByTime && (
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
          <h3 className="font-medium text-gray-900 mb-4">
            Client Engagement by Time of Day
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Most Active Hours
              </h4>
              <div className="space-y-2">
                {filteredMetrics.engagementByTime.hours.map((hour, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 text-sm text-gray-500">
                      {hour.time}
                    </div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${hour.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-right text-sm text-gray-600 ml-2">
                      {hour.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Most Active Days
              </h4>
              <div className="space-y-2">
                {filteredMetrics.engagementByTime.days.map((day, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 text-sm text-gray-500">{day.day}</div>
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${day.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-right text-sm text-gray-600 ml-2">
                      {day.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Engagement insights */}
      {filteredMetrics.insights && filteredMetrics.insights.length > 0 && (
        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h3 className="text-lg font-medium text-indigo-900 mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Engagement Insights
          </h3>

          <div className="space-y-4">
            {filteredMetrics.insights.map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-indigo-100 shadow-sm"
              >
                <h4 className="font-medium text-gray-900 mb-1">
                  {insight.title}
                </h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
                {insight.recommendation && (
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <p className="text-sm font-medium text-indigo-700">
                      Recommendation:
                    </p>
                    <p className="text-sm text-gray-600">
                      {insight.recommendation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EngagementMetrics;
