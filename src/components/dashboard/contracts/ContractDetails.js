import React, { useState } from "react";
import {
  FileText,
  Download,
  MessageSquare,
  AlertTriangle,
  Calendar,
  DollarSign,
  Check,
  Loader,
  Clock,
  Users,
  Building,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Send,
} from "lucide-react";
import MilestoneTracker from "./MilestoneTracker";

/**
 * Contract details view component
 *
 * @param {object} contract - Contract data object
 * @param {function} onBack - Function to go back to list view
 * @param {boolean} loading - Whether contract is loading
 */
const ContractDetails = ({ contract = null, onBack, loading = false }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [messageText, setMessageText] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Get status config for display
  const getStatusConfig = (status) => {
    switch (status) {
      case "active":
        return {
          icon: <Check className="w-5 h-5 text-green-500" />,
          text: "Active",
          bgColor: "bg-green-100",
          textColor: "text-green-800",
        };
      case "pending":
        return {
          icon: <Clock className="w-5 h-5 text-amber-500" />,
          text: "Pending",
          bgColor: "bg-amber-100",
          textColor: "text-amber-800",
        };
      case "completed":
        return {
          icon: <Check className="w-5 h-5 text-indigo-500" />,
          text: "Completed",
          bgColor: "bg-indigo-100",
          textColor: "text-indigo-800",
        };
      case "dispute":
        return {
          icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
          text: "In Dispute",
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
        };
      case "cancelled":
        return {
          icon: <FileText className="w-5 h-5 text-red-500" />,
          text: "Cancelled",
          bgColor: "bg-red-100",
          textColor: "text-red-800",
        };
      default:
        return {
          icon: <FileText className="w-5 h-5 text-gray-500" />,
          text: status,
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
        };
    }
  };

  // Handle send message
  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message to the API
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-8 flex flex-col items-center justify-center">
        <Loader className="h-8 w-8 text-indigo-600 animate-spin mb-4" />
        <p className="text-gray-600">Loading contract details...</p>
      </div>
    );
  }

  // Handle missing contract data
  if (!contract) {
    return (
      <div className="bg-white shadow-sm rounded-lg p-8 text-center">
        <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Contract Not Found
        </h3>
        <p className="text-gray-600 mb-6">
          The requested contract could not be found or you don't have access to
          view it.
        </p>
        <button
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Back to Contracts
        </button>
      </div>
    );
  }

  // Get status display values
  const { icon, text, bgColor, textColor } = getStatusConfig(contract.status);

  return (
    <div className="bg-white shadow-sm rounded-lg">
      {/* Contract Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="mr-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>

            <div>
              <div className="flex items-center">
                <h2 className="text-lg font-bold text-gray-900 mr-3">
                  {contract.projectTitle}
                </h2>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
                >
                  {icon}
                  <span className="ml-1">{text}</span>
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Contract #{contract.contractNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <button className="ml-2 text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="px-6 pt-4 border-b border-gray-200">
        <nav className="flex space-x-6 -mb-px">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === "overview"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("milestones")}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === "milestones"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Milestones
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === "messages"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Messages
          </button>
          <button
            onClick={() => setActiveTab("files")}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${
              activeTab === "files"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Files
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-6">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div>
            {/* Contract summary cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Contract Value</p>
                <p className="text-xl font-semibold text-gray-900 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-1" />
                  {formatCurrency(contract.value)}
                </p>
                {contract.isEscrow && (
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <Check className="h-3 w-3 mr-1" />
                    Escrow Protected
                  </p>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Timeline</p>
                <p className="text-sm font-medium text-gray-900 flex items-center">
                  <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                  {formatDate(contract.dateCreated)} -{" "}
                  {formatDate(contract.deadline)}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {Math.ceil(
                    (new Date(contract.deadline) - new Date()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days remaining
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs text-gray-500 mb-1">Service Type</p>
                <p className="text-sm font-semibold text-gray-900">
                  {contract.service}
                </p>
                <p className="text-xs inline-flex items-center bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded mt-1">
                  {contract.serviceType}
                </p>
              </div>
            </div>

            {/* Client and project details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <Building className="h-4 w-4 text-gray-500 mr-2" />
                  Client Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="font-medium text-gray-900">
                    {contract.clientName}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {contract.clientEmail}
                  </p>
                  <p className="text-sm text-gray-600">
                    {contract.clientCompany}
                  </p>
                  {contract.clientPhone && (
                    <p className="text-sm text-gray-600">
                      {contract.clientPhone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                  <FileText className="h-4 w-4 text-gray-500 mr-2" />
                  Project Details
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">
                    {contract.projectDescription}
                  </p>

                  {contract.deliverables && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-gray-900 mb-1">
                        Deliverables:
                      </p>
                      <ul className="text-sm text-gray-600 list-disc list-inside">
                        {contract.deliverables.map((deliverable, index) => (
                          <li key={index}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900 flex items-center">
                  <FileText className="h-4 w-4 text-gray-500 mr-2" />
                  Terms & Conditions
                </h3>
                <button
                  onClick={() => setShowTerms(!showTerms)}
                  className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  {showTerms ? "Hide Terms" : "Show Terms"}
                  {showTerms ? (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronRight className="h-4 w-4 ml-1" />
                  )}
                </button>
              </div>

              {showTerms && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm text-gray-600 max-h-60 overflow-y-auto">
                  <p className="mb-3">
                    This agreement is entered into between {contract.clientName}{" "}
                    ("Client") and [Your Name] ("Provider") for the provision of
                    AI services as outlined in this contract.
                  </p>
                  <p className="mb-3">
                    <strong>1. Scope of Work:</strong> Provider agrees to
                    deliver the services as described in the project details
                    section and milestone deliverables.
                  </p>
                  <p className="mb-3">
                    <strong>2. Payment Terms:</strong> Client agrees to pay the
                    contract value of {formatCurrency(contract.value)} according
                    to the milestone payment schedule.
                    {contract.isEscrow
                      ? " Payments will be held in escrow and released upon milestone completion."
                      : ""}
                  </p>
                  <p className="mb-3">
                    <strong>3. Timeline:</strong> Provider agrees to complete
                    all deliverables by {formatDate(contract.deadline)}. Any
                    delays should be communicated and agreed upon in writing.
                  </p>
                  <p className="mb-3">
                    <strong>4. Intellectual Property:</strong> Upon full
                    payment, Client will own all deliverables produced under
                    this contract, excluding any pre-existing Provider tools or
                    frameworks.
                  </p>
                  <p className="mb-3">
                    <strong>5. Confidentiality:</strong> Both parties agree to
                    maintain confidentiality of all information shared during
                    the project period and beyond.
                  </p>
                  <p className="mb-3">
                    <strong>6. Termination:</strong> This contract may be
                    terminated by either party with 14 days written notice.
                    Payment will be prorated based on completed work.
                  </p>
                  <p>
                    <strong>7. Dispute Resolution:</strong> Any disputes will be
                    resolved through NerdRezult's dispute resolution process.
                  </p>
                </div>
              )}
            </div>

            {/* Contract History */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                Contract History
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flow-root">
                  <ul className="-mb-8">
                    {contract.history &&
                      contract.history.map((event, index) => (
                        <li key={index}>
                          <div className="relative pb-8">
                            {index !== contract.history.length - 1 ? (
                              <span
                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                aria-hidden="true"
                              ></span>
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center ring-8 ring-white">
                                  {event.type === "creation" ? (
                                    <FileText className="h-4 w-4 text-gray-500" />
                                  ) : event.type === "milestone" ? (
                                    <Check className="h-4 w-4 text-green-500" />
                                  ) : event.type === "message" ? (
                                    <MessageSquare className="h-4 w-4 text-indigo-500" />
                                  ) : event.type === "payment" ? (
                                    <DollarSign className="h-4 w-4 text-green-500" />
                                  ) : (
                                    <Clock className="h-4 w-4 text-gray-500" />
                                  )}
                                </span>
                              </div>
                              <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                  <p className="text-sm text-gray-700">
                                    {event.description}
                                  </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                  {new Date(event.date).toLocaleDateString()}
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
        )}

        {/* Milestones Tab */}
        {activeTab === "milestones" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Milestone Tracking
            </h3>
            {contract.milestones ? (
              <MilestoneTracker
                milestones={contract.milestones}
                contractId={contract.id}
              />
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <AlertTriangle className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No milestones found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  This contract doesn't have any defined milestones.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Messages</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Contact Support
              </button>
            </div>

            {contract.messages && contract.messages.length > 0 ? (
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 mb-4">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {contract.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.sender === "you"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-3/4 rounded-lg px-4 py-2 ${
                          message.sender === "you"
                            ? "bg-indigo-100 text-indigo-900"
                            : "bg-white border border-gray-200 text-gray-800"
                        }`}
                      >
                        <div className="text-xs text-gray-500 mb-1">
                          {message.sender === "you"
                            ? "You"
                            : message.senderName}{" "}
                          - {new Date(message.timestamp).toLocaleString()}
                        </div>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200 mb-4">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No messages yet
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Start the conversation with your client.
                </p>
              </div>
            )}

            <div className="flex">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 disabled:bg-indigo-300 flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </button>
            </div>
          </div>
        )}

        {/* Files Tab */}
        {activeTab === "files" && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Files & Documents
              </h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Upload New File
              </button>
            </div>

            {contract.files && contract.files.length > 0 ? (
              <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {contract.files.map((file, index) => (
                    <li
                      key={index}
                      className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {file.type === "pdf" ? (
                            <div className="w-10 h-10 bg-red-100 text-red-700 rounded flex items-center justify-center">
                              PDF
                            </div>
                          ) : file.type === "doc" ? (
                            <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded flex items-center justify-center">
                              DOC
                            </div>
                          ) : file.type === "image" ? (
                            <div className="w-10 h-10 bg-green-100 text-green-700 rounded flex items-center justify-center">
                              IMG
                            </div>
                          ) : (
                            <div className="w-10 h-10 bg-gray-100 text-gray-700 rounded flex items-center justify-center">
                              FILE
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {file.size} • Uploaded on{" "}
                            {new Date(file.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Download className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <ExternalLink className="h-5 w-5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No files uploaded
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Upload files to share with your client.
                </p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Upload a File
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contract Actions */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        {/* Action buttons based on contract status */}
        <div>
          {contract.status === "pending" && (
            <>
              <button className="mr-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
                Accept Contract
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                Decline
              </button>
            </>
          )}

          {contract.status === "active" && contract.milestones && (
            <button className="mr-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
              Submit Next Milestone
            </button>
          )}

          {contract.status === "dispute" && (
            <button className="mr-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
              View Dispute Details
            </button>
          )}
        </div>

        {/* Additional actions */}
        <div>
          {(contract.status === "active" || contract.status === "pending") && (
            <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
              Request Modification
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContractDetails;
