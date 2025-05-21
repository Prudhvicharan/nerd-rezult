import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Cpu,
  LayoutDashboard,
  Sparkles,
  FileText,
  BarChart3,
  DollarSign,
  User,
  Settings,
  LogOut,
  X,
} from "lucide-react";

/**
 * Sidebar navigation component
 *
 * @param {boolean} isOpen - Whether the sidebar is open on mobile
 * @param {function} closeSidebar - Function to close the sidebar on mobile
 */
const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  // Navigation items
  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: "/expert-dashboard",
      exact: true,
    },
    {
      name: "AI Services",
      icon: <Sparkles className="w-5 h-5" />,
      path: "/expert-dashboard/services",
    },
    {
      name: "Contracts",
      icon: <FileText className="w-5 h-5" />,
      path: "/expert-dashboard/contracts",
    },
    {
      name: "Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      path: "/expert-dashboard/analytics",
    },
    {
      name: "Payments",
      icon: <DollarSign className="w-5 h-5" />,
      path: "/expert-dashboard/payments",
    },
    {
      name: "Profile",
      icon: <User className="w-5 h-5" />,
      path: "/expert-dashboard/profile",
    },
    {
      name: "Settings",
      icon: <Settings className="w-5 h-5" />,
      path: "/expert-dashboard/settings",
    },
  ];

  // Check if a navigation item is active
  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50 lg:w-64 lg:bg-white lg:border-r lg:border-gray-200">
        <SidebarContent navItems={navItems} isActive={isActive} />
      </div>

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute top-0 right-0 pt-4 pr-4">
          <button
            onClick={closeSidebar}
            className="text-gray-500 hover:text-gray-900 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <SidebarContent
          navItems={navItems}
          isActive={isActive}
          closeSidebar={closeSidebar}
        />
      </div>
    </>
  );
};

/**
 * Sidebar content component - extracted to avoid duplication
 */
const SidebarContent = ({ navItems, isActive, closeSidebar }) => {
  const handleNavClick = () => {
    if (closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200 flex items-center space-x-2">
        <Cpu className="h-8 w-8 text-indigo-600" />
        <h1 className="text-xl font-bold text-gray-900">
          Nerd<span className="text-indigo-600">Rezult</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={handleNavClick}
            className={`flex items-center px-3 py-3 rounded-md transition-colors ${
              isActive(item.path, item.exact)
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="mr-3">{item.icon}</div>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Logout button */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
