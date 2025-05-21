import React from "react";
import { DashboardLayout } from "../../components/dashboard/layout";
import {
  Sparkles,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  DollarSign,
  TrendingUp,
} from "lucide-react";

/**
 * Main dashboard overview page for AI experts
 */
const ExpertDashboard = () => {
  // Mock data for dashboard
  const stats = [
    {
      title: "Active Services",
      value: "4",
      icon: <Sparkles className="h-6 w-6 text-indigo-600" />,
      change: "+2 this month",
      positive: true,
    },
    {
      title: "Pending Review",
      value: "2",
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      change: "1 day avg. review time",
      positive: true,
    },
    {
      title: "Approved Services",
      value: "6",
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      change: "83% approval rate",
      positive: true,
    },
    {
      title: "Rejected Services",
      value: "1",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      change: "Feedback available",
      positive: false,
    },
  ];

  // Mock data for AI services
  const aiServices = [
    {
      id: 1,
      name: "AI Chatbot Assistant",
      status: "active",
      lastUpdated: "2 days ago",
      clients: 12,
      revenue: "$2,400",
    },
    {
      id: 2,
      name: "Data Analysis Agent",
      status: "active",
      lastUpdated: "1 week ago",
      clients: 8,
      revenue: "$1,800",
    },
    {
      id: 3,
      name: "Content Generator",
      status: "pending",
      lastUpdated: "Just now",
      clients: 0,
      revenue: "$0",
    },
    {
      id: 4,
      name: "Recommendation Engine",
      status: "pending",
      lastUpdated: "3 hours ago",
      clients: 0,
      revenue: "$0",
    },
  ];

  // Mock data for recent activity
  const recentActivity = [
    {
      id: 1,
      action: "Service Approved",
      service: "Data Analysis Agent",
      date: "Today, 9:42 AM",
    },
    {
      id: 2,
      action: "New Service Submitted",
      service: "Content Generator",
      date: "Today, 8:30 AM",
    },
    {
      id: 3,
      action: "New Client Contract",
      service: "AI Chatbot Assistant",
      client: "TechCorp",
      date: "Yesterday, 4:15 PM",
    },
    {
      id: 4,
      action: "Payment Received",
      amount: "$850",
      service: "AI Chatbot Assistant",
      date: "Yesterday, 2:30 PM",
    },
    {
      id: 5,
      action: "Service Edited",
      service: "Data Analysis Agent",
      date: "2 days ago",
    },
  ];

  return (
    <DashboardLayout pageTitle="Dashboard">
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className="p-2 rounded-md bg-gray-50">{stat.icon}</div>
            </div>
            <div
              className={`text-xs mt-3 ${
                stat.positive ? "text-green-600" : "text-gray-600"
              }`}
            >
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Services and activity section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent AI services */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">
                Your AI Services
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View all
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clients
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {aiServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {service.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        Updated {service.lastUpdated}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          service.status === "active"
                            ? "bg-green-100 text-green-800"
                            : service.status === "pending"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {service.status.charAt(0).toUpperCase() +
                          service.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {service.clients}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.revenue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent activity feed */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>
          <div className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivity.map((activity, index) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {index !== recentActivity.length - 1 && (
                        <span
                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                      )}
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <span className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center ring-8 ring-white">
                            {activity.action.includes("Service") ? (
                              <Sparkles className="h-5 w-5 text-indigo-600" />
                            ) : activity.action.includes("Contract") ? (
                              <FileText className="h-5 w-5 text-indigo-600" />
                            ) : activity.action.includes("Payment") ? (
                              <DollarSign className="h-5 w-5 text-green-600" />
                            ) : (
                              <TrendingUp className="h-5 w-5 text-indigo-600" />
                            )}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <p className="text-sm text-gray-900 font-medium">
                              {activity.action}
                            </p>
                            {activity.service && (
                              <p className="text-sm text-gray-600">
                                {activity.service}
                              </p>
                            )}
                            {activity.client && (
                              <p className="text-sm text-gray-600">
                                Client: {activity.client}
                              </p>
                            )}
                            {activity.amount && (
                              <p className="text-sm text-gray-600">
                                Amount: {activity.amount}
                              </p>
                            )}
                            <p className="mt-1 text-xs text-gray-500">
                              {activity.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Calls to action */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold">Create a New AI Service</h3>
          <p className="mt-2 text-indigo-100">
            Expand your portfolio by adding a new AI service to showcase your
            expertise.
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-indigo-700 hover:bg-indigo-50 rounded-md font-medium text-sm transition-colors">
            Create Service
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-md p-6 text-white">
          <h3 className="text-lg font-semibold">Complete Your Profile</h3>
          <p className="mt-2 text-purple-100">
            A complete profile increases your chances of being matched with
            high-value projects.
          </p>
          <div className="mt-4 bg-purple-500 bg-opacity-30 rounded-full h-2.5">
            <div className="bg-white h-2.5 rounded-full w-4/5"></div>
          </div>
          <p className="mt-2 text-sm text-purple-100">80% complete</p>
          <button className="mt-4 px-4 py-2 bg-white text-purple-700 hover:bg-purple-50 rounded-md font-medium text-sm transition-colors">
            Update Profile
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ExpertDashboard;
