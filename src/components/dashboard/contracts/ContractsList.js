import React, { useState } from "react";
import {
  FileText,
  Check,
  Clock,
  AlertTriangle,
  XCircle,
  Search,
  Filter,
  ChevronDown,
  ChevronRight,
  DollarSign,
} from "lucide-react";

/**
 * Contracts list component with filtering and sorting
 *
 * @param {Array} contracts - Array of contract objects to display
 * @param {function} onViewDetails - Function to view contract details
 * @param {boolean} loading - Whether contracts are loading
 */
const ContractsList = ({ contracts = [], onViewDetails, loading = false }) => {
  // State for filters and search
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("dateCreated");
  const [sortOrder, setSortOrder] = useState("desc");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [expandedContract, setExpandedContract] = useState(null);

  // Status display config
  const getStatusConfig = (status) => {
    switch (status) {
      case "active":
        return {
          icon: <Check className="w-4 h-4 text-green-500" />,
          text: "Active",
          bgColor: "bg-green-100",
          textColor: "text-green-800",
        };
      case "pending":
        return {
          icon: <Clock className="w-4 h-4 text-amber-500" />,
          text: "Pending",
          bgColor: "bg-amber-100",
          textColor: "text-amber-800",
        };
      case "completed":
        return {
          icon: <Check className="w-4 h-4 text-indigo-500" />,
          text: "Completed",
          bgColor: "bg-indigo-100",
          textColor: "text-indigo-800",
        };
      case "dispute":
        return {
          icon: <AlertTriangle className="w-4 h-4 text-orange-500" />,
          text: "In Dispute",
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
        };
      case "cancelled":
        return {
          icon: <XCircle className="w-4 h-4 text-red-500" />,
          text: "Cancelled",
          bgColor: "bg-red-100",
          textColor: "text-red-800",
        };
      default:
        return {
          icon: <FileText className="w-4 h-4 text-gray-500" />,
          text: status,
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
        };
    }
  };

  // Get counts for each status
  const getStatusCounts = () => {
    const counts = {
      all: contracts.length,
    };

    contracts.forEach((contract) => {
      counts[contract.status] = (counts[contract.status] || 0) + 1;
    });

    return counts;
  };

  const statusCounts = getStatusCounts();

  // Filter and sort contracts
  const filteredContracts = contracts
    .filter((contract) => {
      // Status filter
      if (statusFilter !== "all" && contract.status !== statusFilter) {
        return false;
      }

      // Search
      if (
        search &&
        !contract.clientName.toLowerCase().includes(search.toLowerCase()) &&
        !contract.projectTitle.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sorting
      let comparison = 0;

      if (sortBy === "dateCreated") {
        // Assuming dateCreated is a timestamp or date string
        comparison = new Date(b.dateCreated) - new Date(a.dateCreated);
      } else if (sortBy === "value") {
        comparison = b.value - a.value;
      } else if (sortBy === "status") {
        comparison = a.status.localeCompare(b.status);
      } else if (sortBy === "clientName") {
        comparison = a.clientName.localeCompare(b.clientName);
      }

      return sortOrder === "asc" ? comparison * -1 : comparison;
    });

  // Toggle expanded contract
  const toggleExpandContract = (id) => {
    if (expandedContract === id) {
      setExpandedContract(null);
    } else {
      setExpandedContract(id);
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-10 bg-gray-200 rounded mb-4 w-2/3"></div>

        <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="h-5 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>

          {[...Array(5)].map((_, index) => (
            <div key={index} className="border-b border-gray-200 px-6 py-4">
              <div className="flex justify-between items-center mb-2">
                <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                <div className="h-6 bg-gray-200 rounded-full w-24"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Search and filter section */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex-1 max-w-lg relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contracts by client or project..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">
                    Filter by Status
                  </h3>
                  <div className="space-y-2 mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        checked={statusFilter === "all"}
                        onChange={() => setStatusFilter("all")}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        All ({statusCounts.all || 0})
                      </span>
                    </label>
                    {[
                      "active",
                      "pending",
                      "completed",
                      "dispute",
                      "cancelled",
                    ].map((status) => (
                      <label key={status} className="flex items-center">
                        <input
                          type="radio"
                          name="status"
                          checked={statusFilter === status}
                          onChange={() => setStatusFilter(status)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {getStatusConfig(status).text} (
                          {statusCounts[status] || 0})
                        </span>
                      </label>
                    ))}
                  </div>

                  <h3 className="font-medium text-gray-900 mb-2">Sort By</h3>
                  <div className="flex mb-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-md text-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="dateCreated">Date Created</option>
                      <option value="value">Contract Value</option>
                      <option value="status">Status</option>
                      <option value="clientName">Client Name</option>
                    </select>

                    <button
                      onClick={() =>
                        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                      }
                      className="ml-2 px-3 py-2 border border-gray-300 rounded-md bg-white"
                      aria-label={
                        sortOrder === "asc"
                          ? "Sort ascending"
                          : "Sort descending"
                      }
                    >
                      {sortOrder === "asc" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500"
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
                          className="h-5 w-5 text-gray-500"
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

                <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-end">
                  <button
                    onClick={() => {
                      setStatusFilter("all");
                      setSortBy("dateCreated");
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
        </div>
      </div>

      {/* Status tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex -mb-px space-x-8 overflow-x-auto">
          <button
            onClick={() => setStatusFilter("all")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "all"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            All Contracts
          </button>
          <button
            onClick={() => setStatusFilter("active")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "active"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter("pending")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "pending"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setStatusFilter("completed")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "completed"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setStatusFilter("dispute")}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "dispute"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            In Dispute
          </button>
        </nav>
      </div>

      {/* Contracts list */}
      {filteredContracts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No contracts found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {search
              ? `No contracts match "${search}"`
              : "You don't have any contracts matching the selected filters."}
          </p>
          {statusFilter !== "all" || search ? (
            <button
              onClick={() => {
                setStatusFilter("all");
                setSearch("");
              }}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Clear Filters
            </button>
          ) : null}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {filteredContracts.map((contract) => {
              const { icon, text, bgColor, textColor } = getStatusConfig(
                contract.status
              );
              const isExpanded = expandedContract === contract.id;

              return (
                <li key={contract.id} className="relative">
                  <div
                    className={`px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      isExpanded ? "bg-gray-50" : ""
                    }`}
                    onClick={() => toggleExpandContract(contract.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <FileText className="text-gray-400 mr-3 h-5 w-5" />
                          <h3 className="text-lg font-medium text-gray-900">
                            {contract.projectTitle}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Client: {contract.clientName}
                        </p>
                      </div>

                      <div className="ml-4 flex-shrink-0 flex items-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
                        >
                          {icon}
                          <span className="ml-1">{text}</span>
                        </span>

                        <ChevronRight
                          className={`ml-4 h-5 w-5 text-gray-400 transition-transform ${
                            isExpanded ? "transform rotate-90" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500">
                            Contract Value
                          </p>
                          <p className="text-sm font-medium text-gray-900 flex items-center">
                            <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                            {formatCurrency(contract.value)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">Date Created</p>
                          <p className="text-sm font-medium text-gray-900">
                            {formatDate(contract.dateCreated)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500">Deadline</p>
                          <p className="text-sm font-medium text-gray-900">
                            {formatDate(contract.deadline)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                            {contract.service}
                          </div>
                          {contract.isEscrow && (
                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded flex items-center">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Escrow Protected
                            </div>
                          )}
                          {contract.milestones && (
                            <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {contract.milestones.length} Milestones
                            </div>
                          )}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails && onViewDetails(contract.id);
                          }}
                          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContractsList;
