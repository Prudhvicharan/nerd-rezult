import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

/**
 * Dashboard Layout component
 * Wraps all dashboard pages with consistent navigation and layout
 *
 * @param {React.ReactNode} children - The content to display in the main area
 * @param {string} pageTitle - The title of the current page
 */
const DashboardLayout = ({ children, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        <TopNav pageTitle={pageTitle} toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-6">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
          </div>

          {/* Page content */}
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white p-4 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} NerdRezult. AI Expert Dashboard</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
