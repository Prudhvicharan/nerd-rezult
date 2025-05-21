import React, { useState } from "react";
import {
  Filter,
  Search,
  X,
  Sliders,
  GridIcon,
  List,
  ArrowUpDown,
} from "lucide-react";

/**
 * Comprehensive filter controls for AI services
 *
 * @param {string} search - Search query
 * @param {function} onSearchChange - Function to call when search query changes
 * @param {string} statusFilter - Current status filter
 * @param {function} onStatusFilterChange - Function to call when status filter changes
 * @param {string} categoryFilter - Current category filter
 * @param {function} onCategoryFilterChange - Function to call when category filter changes
 * @param {Array} categories - Array of available categories
 * @param {string} sortBy - Current sort field
 * @param {function} onSortByChange - Function to call when sort field changes
 * @param {string} sortOrder - Current sort order ('asc' or 'desc')
 * @param {function} onSortOrderChange - Function to call when sort order changes
 * @param {string} viewMode - Current view mode ('grid' or 'list')
 * @param {function} onViewModeChange - Function to call when view mode changes
 * @param {Object} statusCounts - Object with counts for each status
 * @param {function} onClearFilters - Function to clear all filters
 */
const ServiceFilters = ({
  search = "",
  onSearchChange,
  statusFilter = "all",
  onStatusFilterChange,
  categoryFilter = "all",
  onCategoryFilterChange,
  categories = [],
  sortBy = "name",
  onSortByChange,
  sortOrder = "asc",
  onSortOrderChange,
  viewMode = "grid",
  onViewModeChange,
  statusCounts = { all: 0, active: 0, pending: 0, rejected: 0 },
  onClearFilters,
}) => {
  const [filterOpen, setFilterOpen] = useState(false);

  // Toggle the dropdown
  const toggleFilterDropdown = () => {
    setFilterOpen(!filterOpen);
  };

  // Clear the search
  const clearSearch = () => {
    if (onSearchChange) {
      onSearchChange("");
    }
  };

  // Handle sort order toggle
  const toggleSortOrder = () => {
    if (onSortOrderChange) {
      onSortOrderChange(sortOrder === "asc" ? "desc" : "asc");
    }
  };

  // Reset all filters
  const resetFilters = () => {
    if (onStatusFilterChange) onStatusFilterChange("all");
    if (onCategoryFilterChange) onCategoryFilterChange("all");
    if (onSortByChange) onSortByChange("name");
    if (onSortOrderChange) onSortOrderChange("asc");
    if (onSearchChange) onSearchChange("");
    setFilterOpen(false);
  };

  return (
    <div className="mb-6">
      {/* Action bar with search and filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-1 max-w-md items-center bg-white rounded-md border border-gray-300 px-3 py-2 shadow-sm">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            className="ml-2 flex-1 outline-none text-sm text-gray-700"
          />
          {search && (
            <button
              onClick={clearSearch}
              className="ml-1 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* View toggle */}
          <div className="hidden sm:flex p-1 bg-gray-100 rounded-md">
            <button
              onClick={() => onViewModeChange && onViewModeChange("grid")}
              className={`p-1.5 rounded ${
                viewMode === "grid"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              title="Grid view"
            >
              <GridIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => onViewModeChange && onViewModeChange("list")}
              className={`p-1.5 rounded ${
                viewMode === "list"
                  ? "bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              title="List view"
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          {/* Sort and filter dropdown */}
          <div className="relative">
            <button
              onClick={toggleFilterDropdown}
              className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm"
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
                        onChange={() =>
                          onStatusFilterChange && onStatusFilterChange("all")
                        }
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
                        onChange={() =>
                          onStatusFilterChange && onStatusFilterChange("active")
                        }
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
                        onChange={() =>
                          onStatusFilterChange &&
                          onStatusFilterChange("pending")
                        }
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
                        onChange={() =>
                          onStatusFilterChange &&
                          onStatusFilterChange("rejected")
                        }
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        Rejected ({statusCounts.rejected})
                      </span>
                    </label>
                  </div>

                  {categories.length > 0 && (
                    <>
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        Category
                      </h3>
                      <select
                        value={categoryFilter}
                        onChange={(e) =>
                          onCategoryFilterChange &&
                          onCategoryFilterChange(e.target.value)
                        }
                        className="w-full p-2 border border-gray-300 rounded-md text-sm mb-4"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category === "all" ? "All Categories" : category}
                          </option>
                        ))}
                      </select>
                    </>
                  )}

                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Sort By
                  </h3>
                  <div className="flex items-center justify-between">
                    <select
                      value={sortBy}
                      onChange={(e) =>
                        onSortByChange && onSortByChange(e.target.value)
                      }
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
                      title={sortOrder === "asc" ? "Ascending" : "Descending"}
                    >
                      <ArrowUpDown className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right border-t border-gray-200">
                  <button
                    onClick={resetFilters}
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
        </div>
      </div>

      {/* Status tabs */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8 overflow-x-auto">
          <button
            onClick={() => onStatusFilterChange && onStatusFilterChange("all")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "all"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            All ({statusCounts.all})
          </button>
          <button
            onClick={() =>
              onStatusFilterChange && onStatusFilterChange("active")
            }
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "active"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Active ({statusCounts.active})
          </button>
          <button
            onClick={() =>
              onStatusFilterChange && onStatusFilterChange("pending")
            }
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              statusFilter === "pending"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Pending Review ({statusCounts.pending})
          </button>
          <button
            onClick={() =>
              onStatusFilterChange && onStatusFilterChange("rejected")
            }
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

      {/* Active filters summary */}
      {(statusFilter !== "all" || categoryFilter !== "all" || search) && (
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Active filters:</span>
            {statusFilter !== "all" && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Status: {statusFilter}
                <button
                  onClick={() =>
                    onStatusFilterChange && onStatusFilterChange("all")
                  }
                  className="ml-1 text-indigo-600 hover:text-indigo-800"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {categoryFilter !== "all" && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Category: {categoryFilter}
                <button
                  onClick={() =>
                    onCategoryFilterChange && onCategoryFilterChange("all")
                  }
                  className="ml-1 text-indigo-600 hover:text-indigo-800"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {search && (
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Search: {search}
                <button
                  onClick={clearSearch}
                  className="ml-1 text-indigo-600 hover:text-indigo-800"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>

          <button
            onClick={onClearFilters}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceFilters;
