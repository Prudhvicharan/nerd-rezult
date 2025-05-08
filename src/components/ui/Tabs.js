import React from "react";

function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="inline-flex p-1 bg-gray-100 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 rounded-md ${
            activeTab === tab.id ? "bg-indigo-600 text-white" : "text-gray-700"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
