import React, { useState } from "react";
import { Menu, Bell, ChevronDown, Search, Plus } from "lucide-react";

/**
 * Top navigation bar for the dashboard
 *
 * @param {string} pageTitle - Title of the current page
 * @param {function} toggleSidebar - Function to toggle the sidebar on mobile
 */
const TopNav = ({ pageTitle, toggleSidebar }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Dummy notifications data
  const notifications = [
    {
      id: 1,
      title: "New service review",
      message: "Your 'AI Chatbot Assistant' service is under review.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Service approved",
      message: "Your 'Data Analysis Agent' service has been approved.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 3,
      title: "New contract",
      message: "You have a new contract proposal from TechCorp.",
      time: "2 days ago",
      read: true,
    },
  ];

  // Toggle notification dropdown
  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
    if (userMenuOpen) setUserMenuOpen(false);
  };

  // Toggle user menu dropdown
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (notificationsOpen) setNotificationsOpen(false);
  };

  return (
    <div className="sticky top-0 z-10">
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Search bar */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-3 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none text-sm text-gray-800 placeholder-gray-500 ml-2 w-40 lg:w-60"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Create new button */}
          <button className="hidden sm:flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
            <Plus className="h-5 w-5" />
            <span>Create Service</span>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={toggleNotifications}
              className="text-gray-600 hover:text-gray-900 focus:outline-none relative"
            >
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Notifications dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Notifications
                  </h3>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex px-4 py-3 border-b border-gray-200 hover:bg-gray-50 ${
                        !notification.read ? "bg-indigo-50" : ""
                      }`}
                    >
                      <div className="ml-3 w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 bg-gray-50 text-center">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User menu */}
          <div className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                AE
              </div>
              <div className="hidden md:flex items-center">
                <span className="text-sm font-medium text-gray-800">
                  AI Expert
                </span>
                <ChevronDown className="h-4 w-4 ml-1 text-gray-600" />
              </div>
            </button>

            {/* User dropdown */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm text-gray-600">Signed in as</p>
                  <p className="text-sm font-medium text-gray-900">
                    expert@example.com
                  </p>
                </div>
                <div className="py-1">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
